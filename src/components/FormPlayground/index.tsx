import { FormFieldType } from "@/types/formFIeld";
import {
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { useEffect, useState } from "react";
import FieldOptionBar from "../FieldOptionBar";
import SortableCard from "../SortableCard";
import { fields } from "@/constants/fields";
import FormPreview from "../FormPreview";
import { FormButton, Modal, TextInput } from "../molecules";
import {
  getAllLocalStorageItemsAsJSON,
  getSanitizedName,
  LocalStorageItems,
} from "@/helpers/commonHelper";
import { appName } from "@/constants/app";

const FormPlayground = () => {
  const [items, setItems] = useState<FormFieldType[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isPreview, setIsPreview] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [template, setTemplate] = useState("");
  const [templates, setTemplates] = useState<LocalStorageItems<object | null>>(
    {}
  );

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const getSavedTemplates = () => {
    const data = getAllLocalStorageItemsAsJSON();
    setTemplates(data);
  };

  useEffect(() => {
    getSavedTemplates();
  }, []);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && over.id === "droppable-area" && active?.data?.current?.type) {
      setItems([
        ...items,
        {
          id: Date.now(),
          type: active.data.current.type,
          label: active.data.current.label || "New Field",
          placeholder: active.data.current.placeholder || "",
          options: active.data.current.options,
          name: active.data.current.name || "",
          formFieldType: active.data.current?.formFieldType || "",
          radioOptions: active.data.current.radioOptions,
          formFieldName: JSON.stringify(Date.now()),
        },
      ]);
    }
    setActiveId(null);
  };

  const handleDragStart = (event: DragEndEvent) => {
    setActiveId(event?.active?.data?.current?.name || null);
  };

  const handleSaveClicked = () => {
    if (items.length) {
      setIsSaved(true);
    }
  };

  const handleClearClick = () => {
    setItems([]);
    setIsPreview(false);
    setTemplate("");
  };

  const handlePreviewClick = () => {
    if (items.length) {
      setIsPreview(true);
    }
  };

  const handleConfirmClick = () => {
    if (template !== "") {
      localStorage.setItem(`${appName}_${template}`, JSON.stringify(items));
      setTemplate("");
      setIsSaved(false);
      getSavedTemplates();
    }
  };

  const handleTemplateClick = (key: string) => {
    setItems(templates[key] as FormFieldType[]);
    setIsPreview(true);
  };

  const renderTemplates = () => {
    const keys: string[] = Object.keys(templates);
    return (
      <div>
        <h3>Saved Templates</h3>

        <div className="flex flex-row gap-2">
        {keys.map((key, index) => (
          <div className="mt-2" key={index}>
            <button
              className="bg-transparent text-slate-400 border-[0.5px] border-gray-400 rounded-[30px] px-4 py-1 shadow-sm shadow-gray-40 hover:border-gray-600"
              onClick={() => handleTemplateClick(key)}
            >
              {getSanitizedName(key || "")}
            </button>
          </div>
        ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-4">
      {templates && renderTemplates()}

      <div className="flex flex-row justify-start gap-[100px] flex-wrap">
        <div className="flex flex-row flex-wrap">
          <DndContext
            sensors={sensors}
            onDragEnd={handleDragEnd}
            onDragStart={handleDragStart}
          >
            <FieldOptionBar fields={fields} activeId={activeId} />

            <SortableCard
              items={items}
              setItems={setItems}
              onSaveClick={handleSaveClicked}
              onClearClick={handleClearClick}
              onPreviewClick={handlePreviewClick}
            />
          </DndContext>
        </div>

        <div>{isPreview && <FormPreview items={items} />}</div>

        <Modal
          open={isSaved}
          onOpenChange={setIsSaved}
          title="Save as tremplate?"
        >
          <TextInput
            value={template}
            onChange={(e) => setTemplate(e.target.value)}
            placeholder="Template Name"
            className="mt-2 bg-black"
          />

          <div className="flex justify-center">
            <FormButton title="Confirm" onClick={handleConfirmClick} />
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default FormPlayground;

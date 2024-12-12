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
import { useState } from "react";
import FieldOptionBar from "../FieldOptionBar";
import SortableCard from "../SortableCard";
import { fields } from "@/constants/fields";
import FormPreview from "../FormPreview";

const FormPlayground = () => {
  const [items, setItems] = useState<FormFieldType[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

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
          formFieldName: active.data.current.formFieldName,
        },
      ]);
    }
    setActiveId(null);
  };

  const handleDragStart = (event: DragEndEvent) => {
    setActiveId(event?.active?.data?.current?.name || null);
  };

  const handleSaveClicked = () => {};

  return (
    <div className="flex flex-row gap-2 justify-between flex-wrap">
      <DndContext
        sensors={sensors}
        onDragEnd={handleDragEnd}
        onDragStart={handleDragStart}
      >
        <FieldOptionBar fields={fields} activeId={activeId} />

        <SortableCard
          items={items}
          setItems={setItems}
          onSaveClicked={handleSaveClicked}
        />
      </DndContext>

      <FormPreview items={items} />
    </div>
  );
};

export default FormPlayground;

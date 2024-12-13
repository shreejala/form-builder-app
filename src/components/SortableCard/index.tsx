import {
  closestCenter,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useDroppable,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import { FormFieldType, FormFieldUpdateType } from "@/types/formFIeld";
import ElementItem from "../ElementItem";
import SortableItem from "../molecules/SortableItem";
import { FormButton } from "../molecules";

interface SortableCardProps {
  items: FormFieldType[];
  setItems: React.Dispatch<React.SetStateAction<FormFieldType[]>>;
  onSaveClick: () => void;
  onClearClick: () => void;
  onPreviewClick: () => void;
}

const SortableCard = ({
  items,
  setItems,
  onSaveClick,
  onClearClick,
  onPreviewClick,
}: SortableCardProps) => {
  const { setNodeRef, isOver } = useDroppable({ id: "droppable-area" });

  const style = {
    background: isOver ? "black" : undefined,
    opacity: isOver ? 0.5 : 1,
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (active.id !== over?.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over?.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  const updateItem = (id: number, data: FormFieldUpdateType) => {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };

  const handleRemoveField = (item: FormFieldType) => {
    const foundIndex = items.findIndex((itm) => itm.id === item.id);
    if (foundIndex > -1) {
      const prevItems = [...items];
      prevItems.splice(foundIndex, 1);

      setItems(prevItems);
    }
  };

  return (
    <div ref={setNodeRef} className="flex flex-col gap-2 md:ml-4">
      <div className="flex flex-row justify-between items-center">
        <h3>Droppable Card</h3>

        <FormButton title="Clear" variant="ghost" onClick={onClearClick} />
      </div>

      <div className="bg-[#2F2F2F] p-2 rounded-md flex flex-col items-center">
        <div className=" w-[350px]  md:w-[450px]" style={style}>
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
            autoScroll={{ threshold: { x: 5, y: 5 } }}
          >
            <div className=" relative p-4 overflow-y-auto overflow-x-hidden max-h-[500px] scrollbar-thin flex flex-col gap-4">
              <SortableContext items={items}>
                {items.length > 0 ? (
                  items.map((item: FormFieldType, index) => (
                    <SortableItem key={index} id={item.id}>
                      <ElementItem
                        item={item}
                        updateItem={updateItem}
                        onRemoveField={() => handleRemoveField(item)}
                      />
                    </SortableItem>
                  ))
                ) : (
                  <p>Drag and drop fields here</p>
                )}
              </SortableContext>
            </div>
          </DndContext>
        </div>

        <div>
          <FormButton
            className="m-2"
            title="Preview"
            onClick={onPreviewClick}
          />

          <FormButton className="m-2" title="Save" onClick={onSaveClick} />
        </div>
      </div>
    </div>
  );
};

export default SortableCard;

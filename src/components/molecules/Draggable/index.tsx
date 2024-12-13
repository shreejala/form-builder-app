import { FieldType } from "@/types/field";
import { useDraggable } from "@dnd-kit/core";

interface DraggableProps {
  id: string;
  field: FieldType;
  children: React.ReactNode;
}

const Draggable = ({ id, field, children }: DraggableProps) => {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id,
    data: field,
  });

  return (
    <div ref={setNodeRef} {...listeners} {...attributes}>
      {children}
    </div>
  );
};

export default Draggable;

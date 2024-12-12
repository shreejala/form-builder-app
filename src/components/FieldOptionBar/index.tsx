import { FieldType } from "@/types/field";
import { DragOverlay } from "@dnd-kit/core";
import { Draggable } from "../atoms";
import FieldItem from "../FieldItem";

interface FieldOptionProps {
  fields: FieldType[];
  activeId: string | null;
}

const FieldOptionBar = ({ fields, activeId }: FieldOptionProps) => {

  return (
    <div className="flex flex-col gap-2">
      <h3>Draggable Field Options</h3>

      <div className=" p-5 flex flex-col gap-5 w-[200px]">
        {fields.map((field: FieldType, index) => {
          return (
            <Draggable key={index} id={field.id} field={field}>
              <FieldItem name={field.name} />
            </Draggable>
          );
        })}

        <DragOverlay>
          {activeId ? <FieldItem name={activeId} /> : null}
        </DragOverlay>
      </div>
    </div>
  );
};

export default FieldOptionBar;

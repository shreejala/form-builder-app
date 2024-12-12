interface FieldItemProps {
  name: string;
}

const FieldItem = ({ name }: FieldItemProps) => {
  return (
    <div className="p-[5px] bg-white text-black font-bold  flex justify-center items-center cursor-grab border-slate-800 shadow-md rounded-md border-[1px]">
      {name}
    </div>
  );
};

export default FieldItem;

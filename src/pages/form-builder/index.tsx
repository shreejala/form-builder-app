import { FormPlayground } from "@/components";

const FormBuilder = () => {
  return (
    <div className=" min-h-[100vh]">
      <div className="p-10 flex flex-col gap-4">
        <span className=" text-[30px] font-semibold">Form Builder</span>

        <FormPlayground />
      </div>
    </div>
  );
};

export default FormBuilder;

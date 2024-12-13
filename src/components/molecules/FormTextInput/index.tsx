import { Input } from "@/components/ui/input";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  placeholder?: string;
  label?: string;
  error?: string;
}
const FormTextInput = ({
  type = "text",
  placeholder = "",
  label,
  error,
  ...props
}: TextInputProps) => {
  return (
    <div className="flex flex-1 flex-col gap-2">
      <div className="flex flex-col gap-2">
        {label && <div className="flex">{label}</div>}

        <div className="flex">
          <Input
            type={type}
            placeholder={placeholder}
            onPointerDown={(e) => e.stopPropagation()}
            onKeyDown={(e)=> e.stopPropagation()}
            className="bg-[#1E1F22] placeholder:text-[#86898C]"
            {...props}
          />
        </div>
      </div>

      <div className="flex text-red-500">{error && <div>{error}</div>}</div>
    </div>
  );
};

export default FormTextInput;

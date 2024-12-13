import { Input } from "@/components/ui/input";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  placeholder?: string;
  label?: string;
  error?: string;
}
const FormTextInput = ({
  type="text",
  placeholder="",
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
            className="text-black"
            {...props}

          />
        </div>
      </div>

      <div className="flex text-destructive">{error && <div>{error}</div>}</div>
    </div>
  );
};

export default FormTextInput;

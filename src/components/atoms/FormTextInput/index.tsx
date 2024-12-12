import { Input } from "@/components/ui/input";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder?: string;
  label?: string;
  error?: string;
}
const FormTextInput = ({
  type,
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
            {...props}
            onPointerDown={(e) => e.stopPropagation()}
            className="text-black"
          />
        </div>
      </div>

      <div className="flex text-destructive">{error && <div>{error}</div>}</div>
    </div>
  );
};

export default FormTextInput;

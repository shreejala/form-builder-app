import { Input } from "@/components/ui/input";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
  label?: string;
  error?: string;
}
export function TextInput({
  type,
  placeholder,
  label,
  error,
  ...props
}: TextInputProps) {
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex flex-col">
        {label && <div className="flex">{label}</div>}

        <div>
          <Input
            type={type}
            placeholder={placeholder}
            onPointerDown={(e) => e.stopPropagation()}
            {...props}
          />
        </div>
      </div>

      <div>{error && <div>{error}</div>}</div>
    </div>
  );
}

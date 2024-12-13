import { Input } from "@/components/ui/input";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  placeholder: string;
  label?: string;
  error?: string;
}
export function TextInput({
  type = "text",
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
            className="bg-white  text-black border-black border-[1px] px-[4px] py-[2px] placeholder-gray-500"
            {...props}
          />
        </div>
      </div>

      <div>{error && <div>{error}</div>}</div>
    </div>
  );
}

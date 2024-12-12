import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectInputProps {
  value?: string;
  label?: string;
  options: string[];
  handleChange: (value: string) => void;
  error?: string;
  placeholder:string
}

const SelectInput = ({
  value,
  label,
  options,
  handleChange,
  placeholder,
  error,
}: SelectInputProps) => {
  return (
    <div className="flex flex-1 flex-col">
      <div className={`flex flex-col gap-2}`}>
        {label && <div className="flex">{label}</div>}

        <Select onValueChange={handleChange} defaultValue={value}>
          <SelectTrigger className="text-black">
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            {options?.map((opt, index) => {
              return (
                <SelectItem key={index} value={opt}>
                  {opt}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>

      <div className="flex text-destructive">{error && <div>{error}</div>}</div>
    </div>
  );
};

export default SelectInput;

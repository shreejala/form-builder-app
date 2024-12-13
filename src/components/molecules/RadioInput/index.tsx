// import { Label } from "@/components/ui/label";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface RadioInputProps {
  label?: string;
  error?: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}

const RadioInput = ({
  label,
  error,
  value,
  onChange,
  options,
}: RadioInputProps) => {
  return (
    <div className="flex flex-1 flex-col">
      <div className={`flex flex-col gap-2}`}>
        {label && <div className="flex">{label}</div>}

        {/* <RadioGroup value={value} onValueChange={onChange} defaultValue={value}>
          {options?.map((opt, index) => {
            return (
              <div key={index} className="flex items-center space-x-2 mt-2">
                <RadioGroupItem value={opt} id={opt} />
                <Label htmlFor={opt}>{opt}</Label>
              </div>
            );
          })}
        </RadioGroup> */}
        {options?.map((opt, index) => (
          <label key={index} className="flex items-center space-x-2">
            <input
              type="radio"
              value={opt}
              checked={value === opt}
              onChange={() => onChange(opt)}
              className="h-4 w-4 rounded-full border border-neutral-900 focus:ring-2 focus:ring-neutral-900"
            />
            <span>{opt}</span>
          </label>
        ))}
      </div>

      <div className="flex text-destructive">{error && <div>{error}</div>}</div>
    </div>
  );
};

export default RadioInput;

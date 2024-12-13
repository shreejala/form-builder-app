interface FormCheckBoxProps {
  text?: string;
  value: boolean;
  onChange: (val: boolean) => void;
  error?: string;
}
const FormCheckBox = ({
  value,
  text = "",
  onChange,
  error,
}: FormCheckBoxProps) => {
  return (
    <div className="flex flex-1 flex-col gap-2">
      <div className="flex flex-row gap-2 items-center">
        <input
          type="checkbox"
          id="checkbox"
          checked={value}
          onChange={() => onChange(!value)}
          className="h-4 w-4 rounded border border-neutral-900 focus:ring-2 focus:ring-neutral-900"
        />

        <div>{text}</div>
      </div>

      <div className="flex text-red-500">{error && <div>{error}</div>}</div>
    </div>
  );
};

export default FormCheckBox;

interface LabelProps extends React.HTMLAttributes<HTMLDivElement> {
  formTitle: string;
}

const Label = ({ formTitle, ...props }: LabelProps) => {
  return (
    <div className="font-bold text-[22px]" {...props}>
      {formTitle}
    </div>
  );
};

export default Label;

import { Button } from "@/components/ui/button";

interface FormButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "secondary"
    | "default"
    | "destructive"
    | "outline"
    | "ghost"
    | "link"
    | null
    | undefined;
  onClick?: () => void;
  title: string;
  size?: "default" | "sm" | "lg" | "icon";
  type?: "submit" | "reset" | "button";
}

const FormButton = ({
  variant = "secondary",
  onClick = () => {},
  title,
  size = "lg",
  type = "submit",
  ...props
}: FormButtonProps) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      onPointerDown={(e) => e.stopPropagation()}
      size={size}
      type={type}
      {...props}
    >
      {title}
    </Button>
  );
};

export default FormButton;

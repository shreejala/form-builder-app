import { Button } from "@/components/ui/button";

interface IconButtonProps {
  variant?:
    | "secondary"
    | "default"
    | "destructive"
    | "outline"
    | "ghost"
    | "link"
    | null
    | undefined;
  onClick: () => void;
  children: React.ReactNode;
}

const IconButton = ({
  variant = "secondary",
  onClick,
  children,
}: IconButtonProps) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      onPointerDown={(e) => e.stopPropagation()}
      size="icon"
    >
      {children}
    </Button>
  );
};

export default IconButton;

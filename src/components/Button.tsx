export enum Color {
  RED = "#f20a0a",
  BLUE = "#0004fc",
  GREEN = "#2bff00",
}

interface ButtonProps {
  size: "small" | "large";
  color: Color;
  text: string;
  borderColor?: Color;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const Button = ({ size, color, text, borderColor, onClick }: ButtonProps) => {
  return (
    <button
      className={`button__${size}`}
      style={{ backgroundColor: color, borderColor: borderColor }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

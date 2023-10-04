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
}

const Button = ({ size, color, text, borderColor }: ButtonProps) => {
  return (
    <button
      className={`button__${size}`}
      style={{ backgroundColor: color, borderColor: borderColor }}
    >
      {text}
    </button>
  );
};

export default Button;

export enum Color {
  RED = "#f20a0a",
  BLUE = "#0004fc",
  GREEN = "#2bff00",
}

interface ButtonProps {
  size: "small" | "large";
  color: Color;
  text: string;
}

const Button = ({ size, color, text }: ButtonProps) => {
  return (
    <button className={`button__${size}`} style={{ backgroundColor: color }}>
      {text}
    </button>
  );
};

export default Button;

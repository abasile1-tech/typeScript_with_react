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
  return <button></button>;
};

export default Button;

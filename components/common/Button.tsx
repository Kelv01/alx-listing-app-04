import React from "react";
import { ButtonProps } from "../../interfaces";

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
}) => {
  const baseStyle =
    "px-4 py-2 rounded-md text-white font-medium transition duration-200";

  const styles = {
    primary: `${baseStyle} bg-teal-600 hover:bg-teal-700`,
    secondary: `${baseStyle} bg-gray-300 text-gray-800 hover:bg-gray-400`,
  };

  return (
    <button onClick={onClick} className={styles[variant]}>
      {label}
    </button>
  );
};

export default Button;

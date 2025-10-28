import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, className = "", ...props }: ButtonProps) => (
  <button className={`btn btn-primary ${className}`} {...props}>
    {children}
  </button>
);

export default Button;

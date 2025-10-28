import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, className = "", required = false, ...props }, ref) => (
    <div className="mx-[10px] my-[8px]">
      {label && (
        <label htmlFor={id} className="floating-label">
          {label}
          {required && <span className="ml-1 text-red-500">*</span>}
        </label>
      )}
      <input
        id={id}
        ref={ref}
        required={required}
        className={`input input-primary ${props.disabled ? "border-gray-800" : ""} ${className}`}
        {...props}
      />
    </div>
  ),
);

export default Input;

import { forwardRef, type InputHTMLAttributes } from "react";

interface RadioButtonProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
  id: string;
  name: string;
  value: string;
}

const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ label, id, name, value, className = "", ...props }, ref) => (
    <div className="mb-4 flex items-center">
      <input
        ref={ref}
        type="radio"
        id={id}
        name={name}
        value={value}
        className={`radio ${className}`}
        {...props}
      />

      <label htmlFor={id} className="floating-label ml-2 cursor-pointer">
        {label}
      </label>
    </div>
  ),
);

RadioButton.displayName = "RadioButton";

export default RadioButton;

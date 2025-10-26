import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, className = "", required = false, ...props }, ref) => (
    <div className="mx-[10px] my-[8px]">
      {label && (
        <label
          htmlFor={id}
          className="mb-0 block text-sm font-bold text-gray-700"
        >
          {label}
          {required && <span className="ml-1 text-red-500">*</span>}
        </label>
      )}
      <input
        id={id}
        ref={ref}
        required={required}
        className={`focus:shadow-outline w-full rounded border px-3 py-2 text-gray-700 shadow ${props.disabled ? "cursor-not-allowed bg-gray-200" : "hover:border-sky-600"} ${className}`}
        {...props}
      />
    </div>
  ),
);

export default Input;

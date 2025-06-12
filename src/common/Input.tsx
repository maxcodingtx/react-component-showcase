import React from "react";

interface InputProps {
  id?: string;
  label?: string;
  type: "text" | "email" | "password" | "number" | "date";
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  required?: boolean;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  className = "",
  required = false,
  disabled = false,
}) => {
  return (
    <div className="mx-[10px] my-[8px]">
      <label
        htmlFor={id}
        className="mb-0 block text-sm font-bold text-gray-700"
      >
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={id}
        name={id} // Good practice for form handling
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className={`focus:shadow-outline w-full rounded border px-3 py-2 text-gray-700 shadow ${disabled ? "cursor-not-allowed bg-gray-200" : "hover:border-sky-600"} ${className}`}
      />
    </div>
  );
};

export default Input;

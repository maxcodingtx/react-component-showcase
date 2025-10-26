import React, { type InputHTMLAttributes } from "react";

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  name: string;
  value: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  id,
  name,
  value,
  checked,
  onChange,
}) => {
  return (
    <div className="mb-4 flex items-center">
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="cursor-pointer ring-sky-400 transition duration-200 ease-in-out checked:bg-sky-500 checked:ring-2 focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-white"
      />

      <label
        htmlFor="{id}"
        className="ml-2 block cursor-pointer text-sm font-medium text-gray-700"
      >
        {label}
      </label>
    </div>
  );
};

export default RadioButton;

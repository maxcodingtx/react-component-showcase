import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, className = "" }) => {
  const buttonStyles =
    "mx-[10px] my-[8px] cursor-pointer rounded-[6px] border-[4px] border-solid border-sky-300 bg-white px-[12px] py-[9px] font-sans font-[550] text-black shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)] hover:bg-gray-200 active:scale-95";

  return <button className={`${buttonStyles} ${className}`}>{children}</button>;
};

export default Button;

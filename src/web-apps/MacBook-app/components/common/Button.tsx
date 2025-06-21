// will be moved into HeroSection if only used there.

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  // const buttonStyles ="";

  return (
    <button
      className="mt-4 cursor-pointer rounded-3xl bg-red-400 px-6 py-2 text-lg font-semibold text-white hover:bg-red-500 active:scale-95"
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;

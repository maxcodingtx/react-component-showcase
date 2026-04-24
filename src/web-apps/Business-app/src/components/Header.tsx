import { Menu } from "lucide-react";
import Logo from "../images/Logo.png";

const Header = () => {
  return (
    <header className="flex items-center justify-between border-b border-b-[var(--color-border)] bg-[var(--color-bg)] px-5 py-5">
      <div className="flex items-center gap-3">
        <img
          className="size-9 rounded-full border border-[var(--color-accent)] p-1"
          src={Logo}
          alt="Website Logo"
        />
        <p className="font-[Cormorant_Garamond] text-lg tracking-wide text-[var(--color-text)]">
          Foo, Our Website
        </p>
      </div>

      <Menu className="size-5 text-[var(--color-text)] md:hidden" />

      <button className="hidden border border-[var(--color-accent)] px-7 py-1.5 font-[Jost] text-sm tracking-widest text-[var(--color-accent)] uppercase transition-colors duration-300 hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)] md:block">
        Menu
      </button>
    </header>
  );
};

export default Header;

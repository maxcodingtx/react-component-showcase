import AppleLogo from "../images/apple-logo.png";

const Logo = () => {
  return (
    <div>
      <img
        className="w-8 opacity-90 brightness-0 invert"
        src={AppleLogo}
        alt="Apple Logo"
      />
    </div>
  );
};

const NavLinks = () => {
  return (
    <div className="flex gap-8">
      {["Overview", "Pricing", "Features"].map((label) => (
        <a
          key={label}
          href="#"
          className="group font-600 relative font-['Syne',sans-serif] text-xs tracking-[0.18em] text-[var(--mb-text-secondary)] uppercase"
        >
          {label}
          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[var(--mb-gold)] transition-all duration-300 group-hover:w-full" />
        </a>
      ))}
    </div>
  );
};

export const NavBar = () => {
  return (
    <nav className="my-3 flex items-center justify-between rounded-xl border border-[var(--mb-border)] bg-[var(--mb-surface)] px-5 py-3 backdrop-blur-[12px]">
      <Logo />
      <NavLinks />
    </nav>
  );
};

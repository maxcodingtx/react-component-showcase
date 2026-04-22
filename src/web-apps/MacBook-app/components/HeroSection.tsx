import MacBookImage from "../images/MacBook.jpg";
import Button from "./common/Button";

export const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-between gap-6 py-14">
      <div className="w-[40%] shrink-0">
        <p className="mb-3 text-xs tracking-[0.25em] uppercase font-['Syne',sans-serif] text-[var(--mb-silver)]">
          Introducing
        </p>
        <h1 className="mb-4 text-7xl leading-[1.05] font-light font-['Cormorant_Garamond',serif] text-[var(--mb-text-primary)]">
          The new
          <br />
          MacBook
        </h1>
        <p className="mb-1 text-sm leading-relaxed font-['DM_Sans',sans-serif] text-[var(--mb-text-secondary)]">
          Powerful performance in a sleek, thin design.
        </p>
        <Button
          className="mt-4 border border-white/25 bg-white/[0.06] transition-colors duration-300 hover:bg-white/[0.12]"
          onClick={() => {
            alert("Start Now clicked!");
          }}
        >
          Start Now
        </Button>
      </div>

      <div className="relative w-[58%]">
        <div className="pointer-events-none absolute inset-0 -z-10 rounded-full blur-3xl bg-[radial-gradient(ellipse_at_center,rgba(123,175,212,0.18)_0%,transparent_70%)]" />
        <img
          src={MacBookImage}
          alt="MacBook"
          className="relative w-full drop-shadow-[0_20px_60px_rgba(123,175,212,0.22)]"
        />
      </div>
    </section>
  );
};

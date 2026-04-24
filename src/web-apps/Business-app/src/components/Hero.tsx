import heroImage from "../images/hero-image.png";

const Welcome = () => {
  return (
    <section>
      <div
        className="relative flex min-h-[72vh] flex-col items-center justify-center bg-cover bg-center px-5 text-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-[var(--color-bg)] opacity-75" />

        <div className="relative z-10 flex flex-col items-center gap-5">
          <h1
            className="font-[Cormorant_Garamond] text-6xl leading-tight font-semibold text-[var(--color-text)] md:text-8xl"
            style={{ animation: "fadeSlideUp 0.7s ease both" }}
          >
            Discover Our Offers
          </h1>
          <p
            className="max-w-md font-[Jost] text-base font-light text-[var(--color-text-muted)] md:text-lg"
            style={{ animation: "fadeSlideUp 0.7s ease 0.15s both" }}
          >
            Top-quality services tailored to your business needs. Start your
            journey towards success.
          </p>
          <button
            className="underline-sweep mt-2 font-[Jost] text-sm font-medium tracking-widest text-[var(--color-accent)] uppercase"
            style={{ animation: "fadeSlideUp 0.7s ease 0.3s both" }}
          >
            Get Started
          </button>
        </div>
      </div>

      <div className="box-border block w-full overflow-hidden border-t border-t-[var(--color-border)] bg-[var(--color-surface)] py-3 whitespace-nowrap">
        <span className="mx-2 inline-block animate-[scroll_10s_linear_infinite] pl-[100%] font-[Jost] text-xs font-light tracking-[0.2em] text-[var(--color-text-muted)] uppercase">
          Available for projects — Book a consultation
          →&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Available for projects — Book a
          consultation →
        </span>
        <span className="mx-2 inline-block animate-[scroll_10s_linear_infinite] pl-[100%] font-[Jost] text-xs font-light tracking-[0.2em] text-[var(--color-text-muted)] uppercase">
          Available for projects — Book a consultation
          →&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Available for projects — Book a
          consultation →
        </span>
      </div>
    </section>
  );
};

export default Welcome;

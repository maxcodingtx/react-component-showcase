import type { JSX } from "react";
import Button from "./common/Button";

const features = [
  "8GB Unified Memory",
  "256GB SSD Storage",
  "Up to 18hr battery",
];

export const PricingSection = (): JSX.Element => {
  return (
    <section className="my-14">
      <p className="mb-1 font-['Syne',sans-serif] text-xs tracking-[0.25em] text-[var(--mb-text-secondary)] uppercase">
        Choose Your Config
      </p>
      <h2 className="mb-8 font-['Cormorant_Garamond',serif] text-5xl font-light text-[var(--mb-text-primary)]">
        Pricing
      </h2>

      <div className="flex flex-col items-center gap-5 md:flex-row md:items-stretch md:justify-between">
        <div className="w-full rounded-2xl border border-[var(--mb-border)] bg-[var(--mb-surface)] px-6 py-8 transition-transform duration-300 hover:-translate-y-1 md:w-1/3">
          <p className="mb-1 font-['Syne',sans-serif] text-xs tracking-[0.2em] text-[var(--mb-text-secondary)] uppercase">
            Essential
          </p>
          <p className="mb-6 font-['Cormorant_Garamond',serif] text-5xl font-light text-[var(--mb-text-primary)]">
            $1299
          </p>
          <ul className="mb-4 space-y-2">
            {features.map((feature, index) => (
              <li
                key={`feature-${index}`}
                className="flex items-center gap-2 font-['DM_Sans',sans-serif] text-sm text-[var(--mb-text-secondary)]"
              >
                <span className="text-[var(--mb-silver)]">✓</span> {feature}
              </li>
            ))}
          </ul>
          <Button
            className="mx-auto block w-[min(90%,160px)] border border-white/20 bg-white/10 transition-colors duration-300 hover:bg-white/[0.15]"
            onClick={() => {}}
          >
            Get Started
          </Button>
        </div>

        {/* $1699 — Most Popular */}
        <div className="w-full rounded-2xl border border-[var(--mb-border)] bg-[var(--mb-surface)] px-6 py-8 shadow-[0_0_32px_rgba(212,168,83,0.12),inset_0_0_0_1px_rgba(212,168,83,0.22)] transition-transform duration-300 hover:-translate-y-1 md:w-1/3">
          <p className="mb-1 font-['Syne',sans-serif] text-xs tracking-[0.2em] text-[var(--mb-gold)] uppercase">
            Most Popular
          </p>
          <p className="mb-6 font-['Cormorant_Garamond',serif] text-5xl font-light text-[var(--mb-text-primary)]">
            $1699
          </p>
          <ul className="mb-4 space-y-2">
            {features.map((feature, index) => (
              <li
                key={`feature-${index}`}
                className="flex items-center gap-2 font-['DM_Sans',sans-serif] text-sm text-[var(--mb-text-secondary)]"
              >
                <span className="text-[var(--mb-gold)]">✓</span> {feature}
              </li>
            ))}
          </ul>
          <Button
            className="mx-auto block w-[min(90%,160px)] border border-amber-500/60 bg-amber-500/20 transition-colors duration-300 hover:bg-amber-500/30"
            onClick={() => {}}
          >
            Get Started
          </Button>
        </div>

        {/* $1899 — Pro */}
        <div className="w-full rounded-2xl border border-[var(--mb-border)] bg-[var(--mb-surface)] px-6 py-8 transition-transform duration-300 hover:-translate-y-1 md:w-1/3">
          <p className="mb-1 font-['Syne',sans-serif] text-xs tracking-[0.2em] text-[var(--mb-text-secondary)] uppercase">
            Pro
          </p>
          <p className="mb-6 font-['Cormorant_Garamond',serif] text-5xl font-light text-[var(--mb-text-primary)]">
            $1899
          </p>
          <ul className="mb-4 space-y-2">
            {features.map((feature, index) => (
              <li
                key={`feature-${index}`}
                className="flex items-center gap-2 font-['DM_Sans',sans-serif] text-sm text-[var(--mb-text-secondary)]"
              >
                <span className="text-[var(--mb-silver)]">✓</span> {feature}
              </li>
            ))}
          </ul>
          <Button
            className="mx-auto block w-[min(90%,160px)] border border-white/20 bg-white/10 transition-colors duration-300 hover:bg-white/[0.15]"
            onClick={() => {}}
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

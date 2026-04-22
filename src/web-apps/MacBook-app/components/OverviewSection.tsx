import Gear from "../images/gear-icon.png";
import Shield from "../images/shield-icon.png";
import Battery from "../images/battery-icon.png";

// Unnecessary, but wanted to experiment with types.
interface OverviewProps {
  facts: [string, string, string, string];
  factsInfo: [string, string, string, string];
}

export function OverviewSection({ facts, factsInfo }: OverviewProps) {
  const topAccents = [
    "#4dd0e1", // cyan
    "#f87171", // rose
    "#818cf8", // indigo
    "#fbbf24", // amber
  ];

  const iconGlows = [
    "drop-shadow(0 0 7px rgba(77,208,225,0.7))",
    "drop-shadow(0 0 7px rgba(248,113,113,0.7))",
    "drop-shadow(0 0 7px rgba(129,140,248,0.7))",
    "drop-shadow(0 0 7px rgba(251,191,36,0.7))",
  ];

  const iconsUrl = [Gear, Gear, Battery, Shield];

  return (
    <section className="mt-10">
      <p className="mb-5 font-['Syne',sans-serif] text-xs tracking-[0.25em] text-[var(--mb-text-secondary)] uppercase">
        Engineered For
      </p>
      <div className="grid grid-cols-2 grid-rows-2 gap-5">
        {facts.map((fact, index) => (
          <div
            key={index}
            className="flex rounded-xl border border-[var(--mb-border)] bg-[var(--mb-surface)] px-5 py-5 [border-top:2px_solid_var(--card-accent)]"
            style={
              { "--card-accent": topAccents[index] } as React.CSSProperties
            }
          >
            <div className="mr-4 shrink-0 self-start rounded-lg bg-white/[0.06] p-2">
              <img
                src={iconsUrl[index]}
                alt={fact}
                className="w-6 [filter:brightness(0)_invert(1)_var(--icon-glow)]"
                style={
                  { "--icon-glow": iconGlows[index] } as React.CSSProperties
                }
              />
            </div>
            <div>
              <h2 className="mb-1 font-['Syne',sans-serif] text-base font-semibold text-[var(--mb-text-primary)]">
                {fact}
              </h2>
              <p className="font-['DM_Sans',sans-serif] text-sm leading-relaxed text-[var(--mb-text-secondary)]">
                {factsInfo[index]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import UserIconOrange from "../images/user-icon-orange.jpg";
import UserIconIndigo from "../images/user-icon-indigo.jpg";
import UserIconRed from "../images/user-icon-red.jpg";
import UserIconCyan from "../images/user-icon-cyan.jpg";

// Unnecessary, but wanted to experiment with types.
interface TestimonialsProps {
  testimonies: [string, string, string, string];
  names: [string, string, string, string];
}

export function TestimonialSection({ testimonies, names }: TestimonialsProps) {
  const iconURLS = [UserIconIndigo, UserIconRed, UserIconOrange, UserIconCyan];
  const ringColors = ["#818cf8", "#f87171", "#fbbf24", "#4dd0e1"];

  return (
    <section className="my-14 pb-10">
      <p className="mb-1 font-['Syne',sans-serif] text-xs tracking-[0.25em] text-[var(--mb-text-secondary)] uppercase">
        What People Say
      </p>
      <h2 className="mb-8 font-['Cormorant_Garamond',serif] text-5xl font-light text-[var(--mb-text-primary)]">
        Testimonials
      </h2>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {testimonies.map((testimony, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl border border-[var(--mb-border)] bg-[var(--mb-surface)] px-6 py-6"
          >
            <span className="pointer-events-none absolute -top-2 right-4 font-['Cormorant_Garamond',serif] text-9xl leading-none text-white/[0.05] select-none">
              &ldquo;
            </span>

            <p className="mb-3 text-xs tracking-widest text-[var(--mb-gold)]">
              ★★★★★
            </p>

            <p className="mb-6 font-['DM_Sans',sans-serif] text-sm leading-relaxed text-[var(--mb-text-secondary)]">
              {testimony}
            </p>

            <div className="flex items-center gap-3">
              <img
                src={iconURLS[index]}
                alt={names[index]}
                className="h-9 w-9 rounded-full object-cover [outline:2px_solid_var(--ring)] outline-offset-2"
                style={{ "--ring": ringColors[index] } as React.CSSProperties}
              />
              <p className="font-['Syne',sans-serif] text-xs font-semibold tracking-wider text-[var(--mb-text-primary)] uppercase">
                {names[index]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

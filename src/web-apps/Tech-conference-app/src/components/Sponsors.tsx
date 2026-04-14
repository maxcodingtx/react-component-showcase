import { motion } from "motion/react";

const logos = Object.values(
  import.meta.glob("../images/logo-sponsors/*.png", {
    eager: true,
    query: "?url",
    import: "default",
  }),
) as string[];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 },
};

export const Sponsors = () => {
  return (
    <section className="border-y border-white/5 px-6 py-10">
      <p className="mb-6 text-center text-xs font-medium tracking-widest text-gray-500 uppercase">
        Backed by industry leaders
      </p>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
      >
        {logos.map((logo, index) => (
          <motion.img
            key={index}
            variants={item}
            src={logo}
            alt={`Sponsor ${index + 1}`}
            className="h-10 w-auto object-contain opacity-40 grayscale transition hover:opacity-90 hover:grayscale-0"
          />
        ))}
      </motion.div>
    </section>
  );
};

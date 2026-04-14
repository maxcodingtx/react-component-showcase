import { motion } from "motion/react";
import speakerIcon from "../images/icon-speaker.png";

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.733-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
  </svg>
);

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const speakers = [
  {
    name: "Alex Rivera",
    title: "Staff Engineer, Google",
    topic: "AI Infrastructure",
  },
  {
    name: "Maya Chen",
    title: "CTO, Vercel",
    topic: "Edge Computing",
  },
  {
    name: "Jordan Lee",
    title: "Principal, AWS",
    topic: "Cloud Architecture",
  },
  {
    name: "Sam Patel",
    title: "Founder, Linear",
    topic: "Developer Tools",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export const Speakers = () => {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <span className="mb-2 block text-xs font-medium tracking-widest text-cyan-400 uppercase">
            Line-up
          </span>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Featured Speakers
          </h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {speakers.map((speaker) => (
            <motion.div
              key={speaker.name}
              variants={item}
              className="group relative flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-colors hover:border-cyan-500/30"
            >
              {/* Avatar */}
              <div className="relative mb-4">
                <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-md transition-all group-hover:bg-cyan-500/40" />
                <img
                  src={speakerIcon}
                  alt={speaker.name}
                  className="relative h-16 w-16 rounded-full object-cover ring-2 ring-white/10 group-hover:ring-cyan-500/40"
                />
              </div>

              {/* Topic badge */}
              <span className="mb-3 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-cyan-400">
                {speaker.topic}
              </span>

              <h3 className="text-sm font-bold text-white">{speaker.name}</h3>
              <p className="mt-1 text-xs text-gray-500">{speaker.title}</p>

              {/* Social links */}
              <div className="mt-4 flex gap-3">
                <a
                  href="#"
                  aria-label={`${speaker.name} on X`}
                  className="text-gray-600 transition-colors hover:text-cyan-400"
                >
                  <XIcon className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  aria-label={`${speaker.name} on LinkedIn`}
                  className="text-gray-600 transition-colors hover:text-cyan-400"
                >
                  <LinkedInIcon className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

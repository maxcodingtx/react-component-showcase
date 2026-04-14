import { motion } from "motion/react";
import { Code2, Cpu, MapPin, Ticket, type LucideIcon } from "lucide-react";

const venueItems = [
  {
    icon: MapPin,
    title: "123 Convention Center",
    description:
      "Located in the heart of San Francisco, a world-class venue built for the biggest minds in tech.",
  },
  {
    icon: Ticket,
    title: "$99 / ticket",
    description:
      "Early bird pricing available for a limited time. Includes full access to all sessions and workshops.",
  },
];

const featureItems = [
  {
    icon: Code2,
    title: "Workshops",
    description:
      "Hands-on sessions led by industry experts covering the latest tools, frameworks, and methodologies.",
  },
  {
    icon: Cpu,
    title: "Hackathon",
    description:
      "48-hour coding challenge with $10k in prizes. Build alongside the best engineers in the world.",
  },
];

const InfoCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) => (
  <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-colors hover:border-cyan-500/30">
    <div className="mb-3 inline-flex rounded-lg bg-cyan-500/10 p-2">
      <Icon className="h-5 w-5 text-cyan-400" />
    </div>
    <p className="mb-1 font-semibold text-white">{title}</p>
    <p className="text-xs leading-relaxed text-gray-500">{description}</p>
  </div>
);

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export const Information = () => {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 md:grid-cols-2 md:divide-x md:divide-white/5">
        {/* Venue & Tickets */}
        <div>
          <span className="mb-2 block text-xs font-medium tracking-widest text-cyan-400 uppercase">
            Details
          </span>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Venue & Tickets
          </h2>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-6 grid grid-cols-2 gap-4"
          >
            {venueItems.map((props) => (
              <motion.div key={props.title} variants={item}>
                <InfoCard {...props} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Event Features */}
        <div className="md:pl-12">
          <span className="mb-2 block text-xs font-medium tracking-widest text-cyan-400 uppercase">
            Programme
          </span>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Event Features
          </h2>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-6 grid grid-cols-2 gap-4"
          >
            {featureItems.map((props) => (
              <motion.div key={props.title} variants={item}>
                <InfoCard {...props} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

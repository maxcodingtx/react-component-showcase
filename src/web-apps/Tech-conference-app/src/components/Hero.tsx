import { motion } from "motion/react";
import { ArrowRight, Calendar, MapPin } from "lucide-react";

const registerUser = () => {
  alert("Successfully registered for the conference!");
};

export const Hero = () => {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-20 text-center">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-medium tracking-widest text-cyan-400 uppercase"
      >
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
        Now Accepting Registrations
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-gradient-to-br from-white via-cyan-100 to-cyan-400 bg-clip-text text-6xl font-black tracking-tight text-transparent md:text-8xl"
      >
        TECH‑WORLD
        <br />
        <span className="text-5xl md:text-7xl">2025</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400"
      >
        <span className="flex items-center gap-1.5">
          <Calendar className="h-4 w-4 text-cyan-500" />
          March 7–9, 2025
        </span>
        <span className="h-1 w-1 rounded-full bg-gray-600" />
        <span className="flex items-center gap-1.5">
          <MapPin className="h-4 w-4 text-cyan-500" />
          San Francisco, CA
        </span>
      </motion.div>

      <motion.button
        type="button"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        onClick={registerUser}
        className="group mt-10 flex cursor-pointer items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-shadow hover:shadow-cyan-500/50 md:text-base"
      >
        Register Now
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </motion.button>
    </section>
  );
};

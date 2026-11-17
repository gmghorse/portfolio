"use client";

import { motion, type Variants } from "framer-motion";
import { site } from "@/data/site";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section id="top" className="flex min-h-[85vh] items-center py-20">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full"
      >
        <motion.p variants={item} className="mb-6 text-lg">
          {site.role}
        </motion.p>

        <motion.h1
          variants={item}
          className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl"
        >
          Hi, I&apos;m {site.name}. {site.headline}
        </motion.h1>

        {/* The one signature moment: an orange rule draws across on load */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="my-10 h-1.5 w-full max-w-xs origin-left bg-[#ff5a00]"
        />

        <motion.p variants={item} className="max-w-xl text-lg leading-relaxed">
          {site.intro}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="bg-black px-6 py-3 text-white transition-colors hover:bg-[#ff5a00]"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="border border-black px-6 py-3 transition-colors hover:border-[#ff5a00] hover:text-[#ff5a00]"
          >
            Get in touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

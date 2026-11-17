"use client";

import { motion, type Variants } from "framer-motion";
import { site, skills } from "@/data/site";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[calc(88vh-72px)] items-center overflow-hidden py-16 sm:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute -right-36 top-12 size-[26rem] rounded-full border border-black/[0.06] sm:right-[-8rem] sm:size-[36rem]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 top-28 size-[20rem] rounded-full border border-black/[0.06] sm:right-[-4rem] sm:top-32 sm:size-[28rem]" />

      <motion.div variants={container} initial="hidden" animate="show" className="relative z-10 grid w-full items-center gap-14 lg:grid-cols-[1.3fr_0.7fr] lg:gap-8">
        <div>
          <motion.div variants={item} className="mb-8 flex items-center gap-3 text-sm font-medium text-black/55">
            <span className="h-px w-8 bg-[#ff5a00]" />
            <span>{site.role}</span>
          </motion.div>

          <motion.h1 variants={item} className="max-w-4xl text-[clamp(3.6rem,8.2vw,6.8rem)] font-semibold leading-[0.94] tracking-[-0.075em]">
            I build <span className="relative inline-block whitespace-nowrap">backend systems<motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.75, ease: [0.22, 1, 0.36, 1] }} className="absolute -bottom-1 left-0 h-[0.09em] w-full origin-left bg-[#ff5a00] sm:-bottom-2" /></span>
            <br />and web apps<span className="text-[#ff5a00]">.</span>
          </motion.h1>

          <motion.p variants={item} className="mt-8 max-w-xl text-base leading-7 text-black/65 sm:text-lg sm:leading-8">
            I&apos;m {site.name}, a final-year software engineering student who enjoys working close to the metal in Rust and C++, and building useful apps with Flutter and Postgres.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#projects" className="group inline-flex items-center gap-4 bg-[#171717] px-5 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#ff5a00] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff5a00]">
              Explore my work <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">↗</span>
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-3 py-3.5 text-sm font-medium text-black/70 transition-colors hover:text-[#ff5a00] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff5a00]">
              Get in touch <span aria-hidden="true">↓</span>
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-12 flex max-w-xl flex-wrap gap-x-2 gap-y-2 border-t border-black/10 pt-5">
            <span className="mr-2 text-xs uppercase tracking-[0.15em] text-black/40">Working with</span>
            {skills.slice(0, 4).map((skill) => <span key={skill} className="text-xs text-black/65">{skill}<span className="ml-2 text-[#ff5a00]">/</span></span>)}
          </motion.div>
        </div>

        <motion.div variants={item} className="relative mx-auto hidden aspect-square w-full max-w-[21rem] place-items-center lg:grid">
          <div aria-hidden="true" className="pointer-events-none absolute inset-2 rounded-full border border-black/[0.08]" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-12 rounded-full border border-dashed border-black/[0.12]" />
          <span aria-hidden="true" className="pointer-events-none absolute right-[3.15rem] top-[3.1rem] z-0 size-2.5 rounded-full bg-[#ff5a00]" />
          <span aria-hidden="true" className="pointer-events-none absolute bottom-[3.6rem] left-[2.8rem] z-0 size-2 rounded-full bg-black/25" />
          <div className="relative z-10 grid size-44 place-items-center rounded-full border-[6px] border-white bg-[#171717] text-white shadow-[0_24px_80px_rgba(0,0,0,0.16)]">
            <div className="text-center">
              <span className="block font-mono text-5xl font-medium tracking-[-0.08em]">&#123;gm&#125;</span>
              <span className="mt-2 block text-[10px] uppercase tracking-[0.25em] text-white/55">build · iterate</span>
            </div>
            <span className="absolute -right-1 top-8 size-3 rounded-full bg-[#ff5a00] ring-4 ring-white" />
          </div>
          <span className="absolute bottom-[-1.4rem] text-[10px] uppercase tracking-[0.22em] text-black/35">Curiosity → working software</span>
        </motion.div>
      </motion.div>
    </section>
  );
}

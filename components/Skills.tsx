"use client";

import { motion, type Variants } from "framer-motion";
import { skills } from "@/data/site";

const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const row: Variants = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function Skills() {
  return (
    <section id="skills" className="border-t border-black py-20">
      <h2 className="mb-10 text-3xl font-semibold tracking-tight">Skills</h2>
      <motion.ul
        variants={list}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="flex flex-col"
      >
        {skills.map((skill) => (
          <motion.li
            key={skill}
            variants={row}
            whileHover={{ x: 12 }}
            className="w-fit cursor-default text-4xl font-semibold tracking-tight transition-colors hover:text-[#ff5a00] sm:text-5xl"
          >
            {skill}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}

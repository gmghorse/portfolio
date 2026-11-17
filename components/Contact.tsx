"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-black py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-semibold tracking-tight">Contact</h2>
        <p className="mt-4 max-w-md">
          I&apos;m looking for internships and graduate roles. Send me an email
          and I&apos;ll reply as soon as I can.
        </p>

        <a
          href={`mailto:${site.email}`}
          className="mt-8 inline-block break-all border-b-4 border-[#ff5a00] pb-1 text-2xl font-semibold transition-colors hover:text-[#ff5a00] sm:text-4xl"
        >
          {site.email}
        </a>

        {(site.github || site.linkedin) && (
          <div className="mt-8 flex gap-6">
            {site.github && (
              <a href={site.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#ff5a00]">
                GitHub
              </a>
            )}
            {site.linkedin && (
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#ff5a00]">
                LinkedIn
              </a>
            )}
          </div>
        )}
      </motion.div>
    </section>
  );
}

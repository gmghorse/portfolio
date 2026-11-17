"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "@/data/site";

export default function ProjectCard({ project }: { project: Project }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const screenshots = project.screenshots;
  const active = screenshots[activeIndex];

  const move = (direction: number) => {
    setActiveIndex((index) => (index + direction + screenshots.length) % screenshots.length);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="grid gap-8 border-t border-black/15 py-12 md:grid-cols-[0.8fr_1.4fr] md:gap-12"
    >
      <div className="flex flex-col items-start">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[#ff5a00]">
          Featured project
        </p>
        <h3 className="text-2xl font-semibold tracking-tight">{project.title}</h3>
        <p className="mt-3 max-w-md leading-relaxed text-black/70">{project.summary}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-full border border-black/15 px-3 py-1 text-sm text-black/70">
              {tag}
            </li>
          ))}
        </ul>
      </div>

      {active && (
        <div className="min-w-0">
          <div className="group relative aspect-[16/10] overflow-hidden rounded-2xl border border-black/10 bg-[#f4f3f1] shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.src}
                initial={{ opacity: 0, scale: 1.015 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.99 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={active.src}
                  alt={active.alt}
                  fill
                  priority={activeIndex === 0}
                  sizes="(max-width: 768px) 100vw, 65vw"
                  className="object-contain p-2 sm:p-4"
                />
              </motion.div>
            </AnimatePresence>

            {screenshots.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => move(-1)}
                  aria-label={`Previous ${project.title} screenshot`}
                  className="absolute left-3 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-black/10 bg-white/90 text-xl shadow-sm backdrop-blur transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff5a00]"
                >
                  <span aria-hidden="true">‹</span>
                </button>
                <button
                  type="button"
                  onClick={() => move(1)}
                  aria-label={`Next ${project.title} screenshot`}
                  className="absolute right-3 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-black/10 bg-white/90 text-xl shadow-sm backdrop-blur transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff5a00]"
                >
                  <span aria-hidden="true">›</span>
                </button>
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/55 to-transparent px-4 pb-4 pt-10 text-white">
                  <span className="text-sm">{String(activeIndex + 1).padStart(2, "0")} <span className="text-white/60">/ {String(screenshots.length).padStart(2, "0")}</span></span>
                  <div className="flex gap-1.5" aria-label="Choose screenshot">
                    {screenshots.map((shot, index) => (
                      <button
                        key={shot.src}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        aria-label={`Show screenshot ${index + 1}`}
                        aria-current={index === activeIndex}
                        className={`h-1.5 rounded-full transition-all ${index === activeIndex ? "w-6 bg-white" : "w-1.5 bg-white/55 hover:bg-white"}`}
                      />
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </motion.article>
  );
}

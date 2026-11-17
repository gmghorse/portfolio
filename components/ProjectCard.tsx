"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "@/data/site";

export default function ProjectCard({ project }: { project: Project }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [detailsOpen, setDetailsOpen] = useState(false);
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
        {project.title === "EV Charging Edge Server" && (
          <Link
            href="/projects/ev-charging-edge-server"
            className="mt-6 inline-flex items-center gap-2 border-b border-[#ff5a00] pb-1 text-sm font-medium transition-colors hover:text-[#ff5a00]"
          >
            Open full case study <span aria-hidden="true">↗</span>
          </Link>
        )}
        <button
          type="button"
          onClick={() => setDetailsOpen((open) => !open)}
          aria-expanded={detailsOpen}
          className="mt-7 inline-flex items-center gap-2 border-b border-[#ff5a00] pb-1 text-sm font-medium transition-colors hover:text-[#ff5a00] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff5a00]"
        >
          {detailsOpen ? "Hide project details" : "Explore the project"}
          <motion.span animate={{ rotate: detailsOpen ? 180 : 0 }} aria-hidden="true">⌄</motion.span>
        </button>
        <AnimatePresence initial={false}>
          {detailsOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full overflow-hidden"
            >
              <div className="max-w-md border-t border-black/10 pt-5 mt-5">
                <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-black/50">Overview</h4>
                <p className="mt-2 leading-relaxed text-black/70">{project.overview}</p>
                <h4 className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-black/50">How it works</h4>
                <ol className="mt-3 space-y-2">
                  {project.workflow.map((step, index) => (
                    <li key={step} className="flex gap-3 text-sm leading-relaxed text-black/70">
                      <span className="font-mono text-[#ff5a00]">0{index + 1}</span><span>{step}</span>
                    </li>
                  ))}
                </ol>
                <h4 className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-black/50">Design focus</h4>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.focus.map((item) => <li key={item} className="rounded-lg bg-black/[0.04] px-3 py-2 text-xs text-black/70">{item}</li>)}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
          {screenshots.length > 1 && (
            <div className="mt-3 flex gap-2 overflow-x-auto pb-1" aria-label={`${project.title} screenshots`}>
              {screenshots.map((shot, index) => (
                <button
                  key={shot.src}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`View ${project.title} screenshot ${index + 1}`}
                  aria-pressed={index === activeIndex}
                  className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border bg-[#f4f3f1] transition sm:h-16 sm:w-24 ${index === activeIndex ? "border-[#ff5a00] ring-2 ring-[#ff5a00]/20" : "border-black/10 opacity-70 hover:opacity-100"}`}
                >
                  <Image src={shot.src} alt="" fill sizes="96px" className="object-contain p-1" />
                </button>
              ))}
              <span className="self-center pl-1 text-xs text-black/45">Select a view</span>
            </div>
          )}
        </div>
      )}
    </motion.article>
  );
}

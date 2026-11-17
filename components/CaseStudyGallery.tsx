"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const screenshots = [
  "/grems_ev/Screenshot 2026-11-16 at 21.32.12.png",
  "/grems_ev/Screenshot 2026-11-16 at 21.32.24.png",
  "/grems_ev/Screenshot 2026-11-16 at 21.32.31.png",
  "/grems_ev/Screenshot 2026-11-16 at 21.32.39.png",
];

export default function CaseStudyGallery() {
  const [active, setActive] = useState(0);
  const move = (direction: number) => setActive((current) => (current + direction + screenshots.length) % screenshots.length);

  return (
    <div>
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-black/10 bg-[#f4f3f1]">
        <AnimatePresence mode="wait">
          <motion.div key={screenshots[active]} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="absolute inset-0">
            <Image src={screenshots[active]} alt={`EV charging edge server screenshot ${active + 1}`} fill priority={active === 0} sizes="(max-width: 768px) 100vw, 75vw" className="object-contain p-3 sm:p-8" />
          </motion.div>
        </AnimatePresence>
        <button type="button" onClick={() => move(-1)} aria-label="Previous screenshot" className="absolute left-3 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-xl shadow">‹</button>
        <button type="button" onClick={() => move(1)} aria-label="Next screenshot" className="absolute right-3 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-xl shadow">›</button>
        <span className="absolute bottom-4 right-4 rounded-full bg-black/70 px-3 py-1 text-xs text-white">{String(active + 1).padStart(2, "0")} / {String(screenshots.length).padStart(2, "0")}</span>
      </div>
      <div className="mt-3 grid grid-cols-4 gap-2 sm:gap-3">
        {screenshots.map((src, index) => (
          <button key={src} type="button" onClick={() => setActive(index)} aria-label={`Show screenshot ${index + 1}`} aria-pressed={active === index} className={`relative aspect-[4/3] overflow-hidden rounded-lg border bg-[#f4f3f1] ${active === index ? "border-[#ff5a00] ring-2 ring-[#ff5a00]/20" : "border-black/10 opacity-70 hover:opacity-100"}`}>
            <Image src={src} alt="" fill sizes="(max-width: 768px) 25vw, 200px" className="object-contain p-1" />
          </button>
        ))}
      </div>
    </div>
  );
}

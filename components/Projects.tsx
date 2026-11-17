"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { featuredProjects, otherProjects } from "@/data/site";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  return (
    <section id="projects" className="py-20">
      <h2 className="mb-12 text-3xl font-semibold tracking-tight">Projects</h2>

      <div>
        {featuredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <div className="border-t border-black pt-12">
        <h3 className="mb-8 text-xl font-semibold">Also worked on</h3>
        <ul>
          {otherProjects.map((p) => (
            <motion.li
              key={p.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border-l-4 border-[#ff5a00] pl-5"
            >
              <span className="text-lg font-medium">
                {p.title}{" "}
                <span className="font-normal text-black/60">at {p.org}</span>
              </span>
              <p className="mt-1 max-w-xl text-black/70">{p.summary}</p>
              <button
                type="button"
                onClick={() => setExpandedProject(expandedProject === p.title ? null : p.title)}
                aria-expanded={expandedProject === p.title}
                className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[#b84000] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff5a00]"
              >
                {expandedProject === p.title ? "Show less" : "More about this project"}
                <span aria-hidden="true">{expandedProject === p.title ? "−" : "+"}</span>
              </button>
              <AnimatePresence initial={false}>
                {expandedProject === p.title && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-3 max-w-xl leading-relaxed text-black/65">{p.details}</p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {p.tags.map((tag) => <li key={tag} className="rounded-full border border-black/15 px-3 py-1 text-xs text-black/65">{tag}</li>)}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { featuredProjects, otherProjects } from "@/data/site";
import ProjectCard from "./ProjectCard";

export default function Projects() {
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
              className="flex flex-col gap-1 border-l-4 border-[#ff5a00] pl-5"
            >
              <span className="text-lg font-medium">
                {p.title}{" "}
                <span className="font-normal text-black/60">at {p.org}</span>
              </span>
              <span className="max-w-xl">{p.summary}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

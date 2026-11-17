"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { site } from "@/data/site";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-40 bg-white/90 backdrop-blur"
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <a href="#top" className="font-semibold">
          {site.name}
        </a>
        <ul className="flex gap-6 text-sm" onMouseLeave={() => setActive(null)}>
          {links.map((link) => (
            <li key={link.href} className="relative">
              <a
                href={link.href}
                className="block py-1"
                onMouseEnter={() => setActive(link.href)}
                onFocus={() => setActive(link.href)}
                onBlur={() => setActive(null)}
              >
                {link.label}
              </a>
              {active === link.href && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-[#ff5a00]"
                  transition={{ type: "spring", stiffness: 500, damping: 40 }}
                />
              )}
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}

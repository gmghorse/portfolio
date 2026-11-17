import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyGallery from "@/components/CaseStudyGallery";

export const metadata: Metadata = {
  title: "EV Charging Edge Server | Gabriel Mamman",
  description: "A case study on an edge server connecting EV chargers to a charging app and keeping session data in sync.",
};

const problems = [
  {
    title: "Connecting physical chargers to the app",
    text: "Charger communication needs a bridge between the hardware and the software experience. The edge server provides that connection point close to the chargers.",
  },
  {
    title: "Keeping session information consistent",
    text: "A charging session spans the charger and the app. The system needs to keep session data synchronized so both sides can work from the same information.",
  },
];

const features = [
  "An edge server that sits near the chargers.",
  "Charger communication handled through the server.",
  "Charging session data synchronized with the EV app.",
  "A clear connection between charger-side activity and the app experience.",
];

const learnings = [
  "Edge software has to account for both the physical device and the application that depends on it.",
  "Keeping session state consistent is central when the same workflow spans multiple parts of a system.",
  "An edge system can span multiple runtimes and storage layers, with server-side PostgreSQL and desktop SQLite serving different parts of the product.",
];

export default function EvChargingCaseStudy() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-6">
        <div className="py-8">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-black/60 transition-colors hover:text-[#ff5a00]">← Back to projects</Link>
        </div>

        <header className="grid gap-10 border-b border-black/10 pb-14 pt-8 md:grid-cols-[1.2fr_0.8fr] md:items-end md:pb-20">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#ff5a00]">Project case study · Backend systems</p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-7xl">EV Charging <span className="text-[#ff5a00]">Edge Server</span></h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-black/65">An edge server that connects EV chargers to the charging app, handles charger communication, and keeps session data in sync.</p>
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-5 border-l-2 border-[#ff5a00] pl-5 text-sm">
            <div><p className="text-xs uppercase tracking-wider text-black/45">Category</p><p className="mt-1 font-medium">Backend / Edge</p></div>
            <div><p className="text-xs uppercase tracking-wider text-black/45">Technologies</p><p className="mt-1 font-medium">Rust, Actix, OCPP, WebSocket, PostgreSQL, Tauri, SQLite</p></div>
            <div className="col-span-2"><p className="text-xs uppercase tracking-wider text-black/45">System role</p><p className="mt-1 font-medium">Charger ↔ Edge server ↔ App</p></div>
          </div>
        </header>

        <section className="grid gap-8 border-b border-black/10 py-14 md:grid-cols-[0.55fr_1fr] md:gap-16 md:py-20">
          <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ff5a00]">01 / Overview</p><h2 className="mt-3 text-3xl font-semibold tracking-tight">Bringing chargers and software together</h2></div>
          <div className="space-y-5 text-base leading-7 text-black/70">
            <p>EV charging involves more than the charger itself. Charger-side communication and the app experience need to meet in the middle, and session information needs to stay aligned as a charge is managed.</p>
            <p>This project places an edge server close to the chargers. It handles charger communication and connects to the EV charging app. The system includes a desktop app built with Tauri, with SQLite for its local data, alongside the Rust server and PostgreSQL-backed session data.</p>
          </div>
        </section>

        <section className="border-b border-black/10 py-14 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ff5a00]">02 / Problems solved</p>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight">The system sits between two sides of a charging session</h2>
          <div className="mt-9 grid gap-4 md:grid-cols-2">
            {problems.map((problem, index) => <article key={problem.title} className="rounded-2xl border border-black/10 p-6 sm:p-8"><span className="font-mono text-sm text-[#ff5a00]">0{index + 1}</span><h3 className="mt-5 text-xl font-semibold">{problem.title}</h3><p className="mt-3 leading-relaxed text-black/65">{problem.text}</p></article>)}
          </div>
        </section>

        <section className="grid gap-8 border-b border-black/10 py-14 md:grid-cols-[0.55fr_1fr] md:gap-16 md:py-20">
          <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ff5a00]">03 / Features</p><h2 className="mt-3 text-3xl font-semibold tracking-tight">What the edge server does</h2></div>
          <ul className="space-y-4">{[...features, "A desktop application packaged with Tauri, using SQLite for local data."].map((feature, index) => <li key={feature} className="flex gap-4 border-b border-black/10 pb-4 text-black/70"><span className="font-mono text-sm text-[#ff5a00]">0{index + 1}</span><span className="leading-relaxed">{feature}</span></li>)}</ul>
        </section>

        <section className="border-b border-black/10 py-14 md:py-20">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ff5a00]">04 / Screenshots</p><h2 className="mt-3 text-3xl font-semibold tracking-tight">A look at the project</h2></div><p className="text-sm text-black/50">Use the arrows or thumbnails to browse.</p></div>
          <CaseStudyGallery />
        </section>

        <section className="grid gap-8 border-b border-black/10 py-14 md:grid-cols-[0.55fr_1fr] md:gap-16 md:py-20">
          <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ff5a00]">05 / Technologies</p><h2 className="mt-3 text-3xl font-semibold tracking-tight">Tools behind the service</h2></div>
          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-2xl bg-[#f6f5f3] p-6 sm:col-span-2"><p className="font-mono text-sm text-[#ff5a00]">01 / Edge server</p><h3 className="mt-4 text-xl font-semibold">Rust · Actix · OCPP · WebSocket · PostgreSQL</h3><p className="mt-2 text-sm leading-relaxed text-black/65">Rust and Actix power the server; OCPP and WebSocket are part of its charger communication stack, and PostgreSQL stores charging session data.</p></article>
            <article className="rounded-2xl bg-[#f6f5f3] p-6"><p className="font-mono text-sm text-[#ff5a00]">02 / Desktop app</p><h3 className="mt-4 text-xl font-semibold">Tauri · SQLite</h3><p className="mt-2 text-sm leading-relaxed text-black/65">Tauri packages the desktop application, with SQLite used for its local data.</p></article>
            <article className="flex items-center rounded-2xl border border-black/10 p-6"><p className="text-sm leading-relaxed text-black/60">The stack spans charger communication, server-side session handling, and a local desktop application.</p></article>
          </div>
        </section>

        <section className="grid gap-8 py-14 md:grid-cols-[0.55fr_1fr] md:gap-16 md:py-20">
          <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ff5a00]">06 / What I learned</p><h2 className="mt-3 text-3xl font-semibold tracking-tight">Lessons from the project</h2></div>
          <ul className="space-y-4">{learnings.map((learning) => <li key={learning} className="flex gap-4 text-base leading-relaxed text-black/70"><span className="mt-2 size-2 shrink-0 rounded-full bg-[#ff5a00]" /><span>{learning}</span></li>)}</ul>
        </section>

        <div className="mb-16 flex flex-wrap items-center justify-between gap-4 border-t border-black/10 pt-8"><p className="text-sm text-black/55">Want to see more of my work?</p><Link href="/#projects" className="bg-black px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#ff5a00]">Back to all projects ↗</Link></div>
      </main>
      <Footer />
    </>
  );
}

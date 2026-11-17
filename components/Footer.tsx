import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-black">
      <div className="mx-auto max-w-5xl px-6 py-8 text-sm">
        © 2026 {site.name}
      </div>
    </footer>
  );
}

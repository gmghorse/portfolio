import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";

const font = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${site.name} | ${site.role}`,
  description: site.intro,
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en" className="scroll-smooth scroll-pt-20">
      <body className={font.className}>
      <div className="min-h-screen bg-white text-black antialiased selection:bg-[#ff5a00] selection:text-white [&_a:focus-visible]:outline [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-4 [&_a:focus-visible]:outline-[#ff5a00] [&_button:focus-visible]:outline [&_button:focus-visible]:outline-2 [&_button:focus-visible]:outline-offset-4 [&_button:focus-visible]:outline-[#ff5a00]">
        {children}
      </div>
      </body>
      </html>
  );
}

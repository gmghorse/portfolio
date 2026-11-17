import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
      <Providers>
        <Navbar />
        <main className="mx-auto max-w-5xl px-6">
          <Hero />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </Providers>
  );
}

// pages/index.tsx
import About from "@/components/about";
import Contact from "@/components/contact";
import HomePage from "@/components/home";
import Portfolio from "@/components/portfolio";
import Section from "@/components/Section";

export default function Home() {
  return (
    <div className="space-y-20  mt-20">
      <Section id="home" className="text-center sm:text-left">
        <HomePage />
      </Section>
      <Section id="about">
        <About />
      </Section>
      <Section id="projects">
        <Portfolio />
      </Section>
      <Section id="contact">
        <Contact />
      </Section>
    </div>
  );
}

// pages/index.tsx
import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import HomePage from "@/components/home";
import Portfolio from "@/components/portfolio";
import Section from "@/components/Section";

export default function Home() {
  return (
    <div>
      <div className="space-y-32  mt-20">
        <Section id="home" className="text-center sm:text-left">
          <HomePage />
        </Section>
        <Section id="about">
          <About />
        </Section>
        <Section id="experience">
          <Experience />
        </Section>
        <Section id="projects">
          <Portfolio />
        </Section>
        <Section id="contact" className="dark:bg-secondary text-center">
          <Contact />
        </Section>
      </div>
      <div className="mt-28">
        <Section id="footer">
          <Footer />
        </Section>
      </div>
    </div>
  );
}

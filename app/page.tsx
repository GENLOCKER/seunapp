// pages/index.tsx
import Section from "@/components/Section";

export default function Home() {
  return (
    <div>
      <Section id="home" title="Home">
        <p>Welcome to my portfolio!</p>
      </Section>
      <Section id="about" title="About">
        <p>About me content goes here.</p>
      </Section>
      <Section id="projects" title="Projects">
        <p>Projects content goes here.</p>
      </Section>
      <Section id="contact" title="Contact">
        <p>Contact information goes here.</p>
      </Section>
    </div>
  );
}

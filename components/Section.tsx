// components/Section.tsx
import React from "react";

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id}>
      <h2 className="text-3xl ">{title}</h2>
      <div>{children}</div>
    </section>
  );
};

export default Section;

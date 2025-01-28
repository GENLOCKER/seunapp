// components/Section.tsx
import React from "react";

// components/Section.tsx
interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string; // Add this line
}

const Section: React.FC<SectionProps> = ({ id, children, className }) => {
  return (
    <section id={id} className={className}>
      <div>{children}</div>
    </section>
  );
};
export default Section;

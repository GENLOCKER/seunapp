// components/Section.tsx
import React from "react";
import { cn } from "@/libs/utils";

// components/Section.tsx
interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string; // Add this line
}

const Section: React.FC<SectionProps> = ({ id, children, className }) => {
  return (
    <section id={id} className={cn("scroll-mt-28", className)}>
      <div>{children}</div>
    </section>
  );
};
export default Section;

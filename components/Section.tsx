// components/Section.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/libs/utils";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, children, className }) => {
  return (
    <section id={id} className={cn("scroll-mt-28", className)}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
};
export default Section;

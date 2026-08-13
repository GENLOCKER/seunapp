"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

interface Project {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  codeUrl?: string;
}

const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A short description of this project — what it does and the problem it solves.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Project Two",
    description:
      "A short description of this project — what it does and the problem it solves.",
    tech: ["React", "Node.js"],
  },
  {
    title: "Project Three",
    description:
      "A short description of this project — what it does and the problem it solves.",
    tech: ["React Native"],
  },
];

const Portfolio = () => {
  return (
    <div>
      {/* Section Header */}
      <div className="mb-8 text-[24px] md:text-[30px] font-sans text-secondary dark:text-info capitalize flex items-center gap-4">
        <span className="text-green-700 dark:text-primary text-[18px] md:text-[24px] font-mono">
          03.
        </span>
        <h2 className="leading-7">portfolio</h2>
        <div className="hidden md:block w-64 h-[1px] bg-secondary dark:bg-info opacity-50"></div>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col gap-4 p-6 rounded-lg bg-green-50 dark:bg-navy border border-secondary/10 dark:border-info/10 hover:-translate-y-1 transition-transform duration-200"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
          >
            <div className="flex items-center justify-between">
              <span className="text-green-700 dark:text-primary text-2xl">
                📁
              </span>
              <div className="flex items-center gap-3 text-secondary dark:text-info">
                {project.codeUrl && (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} source code`}
                    className="hover:text-green-700 dark:hover:text-primary"
                  >
                    <FiGithub size={18} />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} live site`}
                    className="hover:text-green-700 dark:hover:text-primary"
                  >
                    <FiExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>
            <h3 className="text-[18px] font-sans font-bold text-secondary dark:text-info">
              {project.title}
            </h3>
            <p className="text-[15px] font-sans text-secondary dark:text-warning">
              {project.description}
            </p>
            <ul className="flex flex-wrap gap-x-3 gap-y-1 mt-auto pt-2 text-[12px] font-mono text-secondary dark:text-warning opacity-80">
              {project.tech.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

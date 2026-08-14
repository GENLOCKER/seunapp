"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

interface Project {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  codeUrl?: string;
}

interface FeaturedProject extends Project {
  image: string;
}

const featuredProjects: FeaturedProject[] = [
  {
    title: "GoTruck",
    description:
      "An enterprise logistics and cargo transportation marketplace for Nigeria. Shippers get instant price estimates and waybill tracking, while logistics companies manage job creation, bidding, job history, metrics, and documents through a dedicated dashboard. Built job/bid management workflows, presigned-S3 document upload/download, and bank-verification onboarding across web and mobile.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "React Query",
      "React Native",
    ],
    image: "/gotruck.png",
    liveUrl: "https://gotruck.io",
  },
];

const otherProjects: Project[] = [
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

const ProjectLinks = ({ project }: { project: Project }) => (
  <div className="flex items-center gap-4 text-secondary dark:text-info">
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
);

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

      {/* Featured Projects */}
      <div className="flex flex-col gap-16">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            className="flex flex-col md:flex-row gap-8 items-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
          >
            <div className="group w-full md:w-1/2 rounded-lg overflow-hidden relative aspect-[3020/1722] border border-secondary/10 dark:border-info/10">
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out group-hover:scale-105"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3 className="text-[22px] font-sans font-bold text-secondary dark:text-info">
                  {project.title}
                </h3>
                <ProjectLinks project={project} />
              </div>
              <p className="text-[16px] font-sans text-secondary dark:text-warning">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-x-3 gap-y-1 text-[12px] font-mono text-secondary dark:text-warning opacity-80">
                {project.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Other Projects */}
      <h3 className="mt-16 mb-6 text-[16px] font-mono text-secondary dark:text-info">
        Other Projects
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherProjects.map((project, index) => (
          <motion.div
            key={project.title}
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
              <ProjectLinks project={project} />
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

"use client";

import React from "react";
import { motion } from "framer-motion";

interface Role {
  title: string;
  company: string;
  companyUrl?: string;
  employmentType: string;
  dates: string;
  location: string;
  points: string[];
  tech: string[];
}

const roles: Role[] = [
  {
    title: "Frontend Engineer",
    company: "Sifax Group (GoTruck)",
    companyUrl: "https://gotruck.io",
    employmentType: "Full-time",
    dates: "2024 — 2026",
    location: "Lagos, Nigeria",
    points: [
      "Developed frontend features for an enterprise logistics and transportation marketplace using Next.js, React, TypeScript, Tailwind CSS, and HeroUI.",
      "Built job-management workflows covering job creation, job information, bidding, bid details, job history, metrics, and document management.",
      "Implemented reusable components and interactive interfaces including tables, drawers, modals, tabs, forms, search inputs, select inputs, and file-upload components.",
      "Integrated backend services and REST APIs for retrieving and managing jobs, bids, documents, user information, and other business data.",
      "Developed onboarding workflows involving bank selection, account verification, and automatic retrieval of account-holder information through external APIs.",
      "Implemented document upload and download functionality using presigned S3 URLs.",
      "Worked with API state management and asynchronous data using React Query and Redux Toolkit/RTK Query.",
      "Collaborated with backend services to troubleshoot API integration, authentication, CORS, data-fetching, and production issues.",
      "Maintained responsive interfaces across different screen sizes while keeping components modular and reusable.",
      "Contributed to both web and mobile enterprise applications, gaining experience across React/Next.js and React Native/Expo ecosystems.",
    ],
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "HeroUI",
      "Redux Toolkit",
      "React Query",
      "Axios",
      "React Native",
      "Expo",
      "REST APIs",
      "S3",
      "Git",
    ],
  },
];

const Experience = () => {
  return (
    <div>
      {/* Section Header */}
      <div className="mb-8 text-[24px] md:text-[30px] font-sans text-secondary dark:text-info capitalize flex items-center gap-4">
        <span className="text-green-700 dark:text-primary text-[18px] md:text-[24px] font-mono">
          02.
        </span>
        <h2 className="leading-7">experience</h2>
        <div className="hidden md:block w-64 h-[1px] bg-secondary dark:bg-info opacity-50"></div>
      </div>

      {/* Timeline */}
      <div className="flex flex-col gap-10">
        {roles.map((role, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-[20px] font-sans font-bold text-secondary dark:text-info">
                {role.title}{" "}
                <span className="text-green-700 dark:text-primary">
                  @{" "}
                  {role.companyUrl ? (
                    <a
                      href={role.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-transparent hover:decoration-current transition-[text-decoration-color]"
                    >
                      {role.company}
                    </a>
                  ) : (
                    role.company
                  )}
                </span>
              </h3>
              <span className="text-[13px] font-mono text-secondary dark:text-warning opacity-70">
                {role.dates} · {role.location}
              </span>
            </div>
            <p className="mt-1 text-[13px] font-mono text-secondary dark:text-warning opacity-70">
              {role.employmentType}
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {role.points.map((point, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-[16px] font-sans text-secondary dark:text-warning"
                >
                  <span className="text-green-700 dark:text-primary mt-1 shrink-0">
                    ▹
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-[12px] font-mono text-secondary dark:text-warning opacity-80">
              {role.tech.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

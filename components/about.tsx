import React from "react";

const technologies = [
  {
    category: "Frontend",
    items: [
      "React.js",
      "React Native",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Chakra UI",
      "NextUI",
      "Redux",
      "WebSockets",
    ],
  },
  {
    category: "AI / LLM",
    items: ["OpenAI API", "Prompt Engineering", "RAG", "LLM-powered UI"],
  },
  {
    category: "Testing & CI",
    items: ["Cypress", "CircleCI", "CI/CD", "AWS S3"],
  },
  {
    category: "Tools",
    items: ["Git", "PWA", "React Query", "Google Maps API"],
  },
];

const About = () => {

  return (
    <div>
      {/* Section Header */}
      <div className="mb-4 text-[24px] md:text-[30px] font-sans text-secondary dark:text-info capitalize flex items-center gap-4">
        {/* Section Number */}
        <span className="text-green-700 dark:text-primary text-[18px] md:text-[24px] font-mono">
          01.
        </span>

        {/* Section Title */}
        <h2 className="leading-7">about me</h2>

        {/* Divider */}
        <div className="hidden md:block w-64 h-[1px] bg-secondary dark:bg-info opacity-50"></div>
      </div>

      {/* Section Content */}
      <div className="flex flex-col-reverse md:flex-row gap-8 justify-between">
        {/* Text Content */}
        <div className="flex flex-col gap-6 text-justify sm:text-left w-full md:w-7/12">
          <p className="text-[18px] font-sans">
            I&apos;m a Frontend Engineer building enterprise web and mobile
            products with React, Next.js, and TypeScript. I focus on
            translating complex workflows into clean, reusable interfaces,
            integrating REST APIs, and shipping across both React/Next.js and
            React Native/Expo.
          </p>
          <p className="text-[18px] font-sans">
            Here are a few technologies I&apos;ve been working with recently:
          </p>

          {/* Technologies */}
          <div className="flex flex-col gap-5">
            {technologies.map((group) => (
              <div key={group.category} className="flex flex-col gap-2">
                <h3 className="text-[13px] font-mono uppercase tracking-wide text-secondary dark:text-info opacity-60">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-secondary/15 dark:border-info/15 bg-secondary/5 dark:bg-info/5 px-3 py-1.5 text-[12px] font-mono text-secondary/80 dark:text-info/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Container */}
        <div className="w-full md:w-5/12 bg-green-200 dark:bg-primary rounded-lg relative h-[500px] mr-0 md:mr-8 flex items-center justify-center overflow-hidden">
          <span
            aria-hidden
            className="font-sans font-extrabold text-secondary dark:text-navy text-[120px] leading-none select-none opacity-70"
          >
            OS
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;

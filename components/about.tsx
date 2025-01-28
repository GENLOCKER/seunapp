import Image from "next/image";
import React from "react";

const About = () => {
  const technologies = [
    [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React Query",
      "Redux",
      "Cypress",
    ],
    ["Tailwind", "ReactJS", "NextJS", "React Native"],
  ];

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
            I'm competent in utilizing technologies such as HTML, CSS,
            JavaScript, and TypeScript with expertise in modern frameworks such
            as ReactJS, NextJS, and other technologies including Redux, React
            Query, and Cypress.
          </p>
          <p className="text-[18px] font-sans">
            Here are a few technologies I've been working with recently:
          </p>

          {/* Technologies Grid */}
          <div className="flex gap-10 font-sans">
            {technologies.map((group, index) => (
              <div key={index} className="flex flex-col gap-2">
                {group.map((tech, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-green-700 dark:text-primary">-</span>
                    <p>{tech}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Image Container */}
        <div className="w-full md:w-5/12 bg-green-200 dark:bg-primary rounded-lg relative h-[500px] mr-0 md:mr-8">
          <Image
            src="/feji.jpeg"
            alt="Fejiro Ogunje"
            className="w-full rounded-lg object-cover h-full object-top"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default About;

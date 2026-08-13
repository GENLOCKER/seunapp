import React from "react";

interface Role {
  title: string;
  company: string;
  companyUrl?: string;
  dates: string;
  points: string[];
}

const roles: Role[] = [
  {
    title: "Frontend Developer",
    company: "Company Name",
    dates: "Jan 2024 — Present",
    points: [
      "Add your role's key responsibility or impact here.",
      "Add another accomplishment, ideally with a measurable result.",
      "Add the technologies you used day to day.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Previous Company",
    dates: "Jun 2022 — Dec 2023",
    points: [
      "Add your role's key responsibility or impact here.",
      "Add another accomplishment, ideally with a measurable result.",
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
          <div key={index} className="flex gap-6">
            <div className="hidden sm:flex flex-col items-center">
              <span className="w-3 h-3 rounded-full bg-green-700 dark:bg-primary" />
              {index < roles.length - 1 && (
                <span className="flex-1 w-px bg-secondary dark:bg-info opacity-30 mt-2" />
              )}
            </div>
            <div className="flex-1 pb-2">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-[18px] font-sans font-bold text-secondary dark:text-info">
                  {role.title}{" "}
                  <span className="text-green-700 dark:text-primary">
                    @ {role.company}
                  </span>
                </h3>
                <span className="text-[13px] font-mono text-secondary dark:text-warning opacity-70">
                  {role.dates}
                </span>
              </div>
              <ul className="mt-3 flex flex-col gap-2">
                {role.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-[16px] font-sans text-secondary dark:text-warning"
                  >
                    <span className="text-green-700 dark:text-primary mt-1">
                      ▹
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

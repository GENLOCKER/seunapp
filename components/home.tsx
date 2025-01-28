import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <div>
        <h2 className="text-green-700 dark:text-primary font-mono">
          Hi, my name is
        </h2>
        <h1 className="text-secondary dark:text-info text-[30px] sm:text-[40px] md:text-[60px] lg:text-[75px] font-sans font-extrabold md:-mb-5">
          Ogunruku Oluwaseun
        </h1>
        <h1 className="text-green-700 dark:text-warning text-[30px] sm:text-[40px] md:text-[60px] lg:text-[75px] font-sans font-extrabold">
          I build things for the web.
        </h1>
      </div>
      <p
        className="text-secondary dark:text-warning sm:text-[18px] font-sans max-w-xl mb-5 sm:mb-10"
        style={{
          opacity: 1,
          transform: "none",
        }}
      >
        I&apos;m a Computer Science graduate (B.Sc) and a highly-skilled
        Front-end Developer with 2 years of experience. Adept in Software
        Development and Engineering, I am Passionate about building and
        developing innovative tech solutions.
      </p>
      <div
        style={{
          opacity: 1,
          transform: "none",
        }}
      >
        <Link href="/#/contact">
          <button className="btn px-3 md:px-6 btn-outline border-green-700 dark:border-primary hover:border-primary hover:bg-accent hover:text-primary rounded text-[15px] font-mono font-normal capitalize text-green-700 dark:text-primary">
            Get in Touch
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;

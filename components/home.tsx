"use client";

import React from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const HomePage = () => {
  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <div>
        <motion.h2
          variants={item}
          className="text-green-700 dark:text-primary font-mono"
        >
          Hi, my name is
        </motion.h2>
        <motion.h1
          variants={item}
          className="text-secondary dark:text-info text-[30px] sm:text-[40px] md:text-[60px] lg:text-[75px] font-sans font-extrabold md:-mb-5"
        >
          Ogunruku Oluwaseun
        </motion.h1>
        <motion.h2
          variants={item}
          className="text-green-700 dark:text-warning text-[30px] sm:text-[40px] md:text-[60px] lg:text-[75px] font-sans font-extrabold"
        >
          I build things for the web.
        </motion.h2>
      </div>
      <motion.p
        variants={item}
        className="text-secondary dark:text-warning sm:text-[18px] font-sans max-w-xl mb-5 sm:mb-10"
      >
        I&apos;m a Computer Science graduate (B.Sc) and a highly-skilled
        Front-end Developer with 2 years of experience. Adept in Software
        Development and Engineering, I am Passionate about building and
        developing innovative tech solutions.
      </motion.p>
      <motion.div variants={item}>
        <Link href="/#contact">
          <button className="btn px-3 md:px-6 btn-outline border-green-700 dark:border-primary hover:border-primary hover:bg-accent hover:text-primary rounded text-[15px] font-mono font-normal capitalize text-green-700 dark:text-primary">
            Get in Touch
          </button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default HomePage;

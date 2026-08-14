// components/Sidebar.tsx
"use client";

import { motion } from "framer-motion";
import { socialLinks } from "@/libs/constants";
import { SocialIcon } from "./SocialIcon";

export default function Sidebar() {
  return (
    <motion.div
      className="hidden lg:block fixed left-14 bottom-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
    >
      <div className="flex flex-col items-center gap-8">
        {socialLinks.map(({ href, icon: Icon, label }) => (
          <SocialIcon
            key={href}
            href={href}
            icon={<Icon size={20} />}
            label={label}
            className="opacity-100 transform transition-all duration-200 ease-in-out hover:scale-110 hover:-translate-y-1 hover:opacity-75"
          />
        ))}
        <div className="h-24 w-px bg-gray-300 dark:bg-gray-700" />
      </div>
    </motion.div>
  );
}

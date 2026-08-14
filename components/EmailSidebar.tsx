"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function EmailSidebar() {
  return (
    <motion.div
      className="hidden lg:flex fixed bottom-0 right-12 flex-col items-center gap-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
    >
      {/* Email Link */}
      <Link
        href="mailto:ogunrukuseun@gmail.com"
        className="text-secondary dark:text-info font-mono hover:text-green-700 dark:hover:text-primary hover:-translate-y-[2px] transition-transform"
        title="Email"
        style={{
          writingMode: "vertical-lr",
          textOrientation: "sideways",
          letterSpacing: "2px",
        }}
      >
        ogunrukuseun@gmail.com
      </Link>

      {/* Line Divider */}
      <div className="w-px h-24 bg-secondary dark:bg-info opacity-50"></div>
    </motion.div>
  );
}

// lib/constants.ts
import { NavItem } from "@/types";
import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";

export const navLinks: NavItem[] = [
  { href: "/about", number: "01", label: "About" },
  { href: "/experience", number: "02", label: "Experience" },
  { href: "/portfolio", number: "03", label: "Portfolio" },
  { href: "/contact", number: "04", label: "Contact" },
];

export const socialLinks = [
  { href: "https://github.com/GENLOCKER", icon: FiGithub, label: "GitHub" },
  { href: "https://linkedin.com", icon: SlSocialLinkedin, label: "LinkedIn" },
  { href: "https://x.com/seunruku", icon: FaXTwitter, label: "Twitter" },
  {
    href: "https://www.instagram.com/ruku001/?hl=en",
    icon: FaInstagram,
    label: "Instagram",
  },
];

// lib/constants.ts
import { NavItem } from "@/types";
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

export const navLinks: NavItem[] = [
  { href: "/about", number: "01", label: "About" },
  { href: "/experience", number: "02", label: "Experience" },
  { href: "/portfolio", number: "03", label: "Portfolio" },
  { href: "/contact", number: "04", label: "Contact" },
];

export const socialLinks = [
  { href: "https://github.com", icon: FaGithub, label: "GitHub" },
  { href: "https://linkedin.com", icon: FaLinkedinIn, label: "LinkedIn" },
  { href: "https://twitter.com", icon: FaTwitter, label: "Twitter" },
  { href: "https://instagram.com", icon: FaInstagram, label: "Instagram" },
];

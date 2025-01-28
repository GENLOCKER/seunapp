// lib/constants.ts
import { NavItem } from "@/types";
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

export const navLinks: NavItem[] = [
  { href: "/about", label: "01. About" },
  { href: "/experience", label: "02. Experience" },
  { href: "/portfolio", label: "03. Portfolio" },
  { href: "/contact", label: "04. Contact" },
];

export const socialLinks = [
  { href: "https://github.com", icon: FaGithub, label: "GitHub" },
  { href: "https://linkedin.com", icon: FaLinkedinIn, label: "LinkedIn" },
  { href: "https://twitter.com", icon: FaTwitter, label: "Twitter" },
  { href: "https://instagram.com", icon: FaInstagram, label: "Instagram" },
];

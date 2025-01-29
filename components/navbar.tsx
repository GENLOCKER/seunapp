"use client";
import { useState, useEffect } from "react";
// import { usePathname } from "next/navigation";
import { navLinks } from "@/libs/constants";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleThemeToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setIsDarkMode(isChecked);
    if (isChecked) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const darkMode = document.documentElement.classList.contains("dark");
    setIsDarkMode(darkMode);
  }, []);

  return (
    <nav className="flex justify-between items-center font-mono w-full py-6 px-4 md:max-w-[90%] lg:max-w-full mx-auto lg:px-14 fixed top-0 left-0 right-0 z-50 bg-white dark:bg-navy">
      <div className="flex items-center">
        <Link href="/" className="mr-4">
          <Image
            src="/logo-icon.svg"
            alt="Logo"
            width={32}
            height={36.95}
            className="w-12 h-12 dark:fill-primary fill-green-700"
          />
        </Link>
      </div>
      <div className="flex items-center gap-6">
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-8 items-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={`#${link.href}`} className="flex gap-1 text-[13px]">
                  <span className="text-green-700 dark:text-primary">
                    {link.number}.
                  </span>
                  <p className="text-secondary dark:text-info dark:hover:text-primary">
                    {link.label}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Theme Toggle */}
        <label className="swap swap-rotate text-black dark:text-white lg:text-black mx-4">
          <input
            type="checkbox"
            className="theme-controller"
            checked={isDarkMode}
            onChange={handleThemeToggle}
          />
          <svg
            className="swap-on h-5 w-5 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>
          <svg
            className="swap-off h-5 w-5 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>
      {/* Mobile Menu Toggle */}
      <div className="block md:hidden text-primary cursor-pointer">
        <FiMenu className="text-3xl" onClick={toggleMobileMenu} />
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-secondary bg-opacity-95 h-screen text-center overflow-y-scroll z-[99999] lg:hidden">
          <aside className="flex flex-col gap-6 py-8 px-4">
            <div className="px-2 flex justify-end mt-2 mb-4">
              <span
                className="w-9 h-9 bg-primary rounded-full text-2xl text-secondary flex justify-center items-center cursor-pointer"
                onClick={toggleMobileMenu}
              >
                <FiX />
              </span>
            </div>
            <nav>
              <ul className="flex flex-col gap-10 mt-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={`#${link.href}`}
                    className="text-primary text-xl hover:text-primary mx-auto w-fit capitalize"
                    onClick={toggleMobileMenu}
                  >
                    <span className="text-white mr-2">{link.number}.</span>
                    {link.label}
                  </Link>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      )}
    </nav>
  );
}

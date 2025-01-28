// components/SocialIcon.tsx
import { cn } from "@/libs/utils";

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  className?: string;
}

export function SocialIcon({ href, icon, label, className }: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "text-gray-600 hover:text-green-500 dark:text-gray-300 dark:hover:text-green-400 transition-colors duration-300",
        className
      )}
      aria-label={label}
    >
      {icon}
    </a>
  );
}

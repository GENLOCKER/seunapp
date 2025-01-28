// components/Sidebar.tsx
import { socialLinks } from "@/libs/constants";
import { SocialIcon } from "./SocialIcon";

export default function Sidebar() {
  return (
    <div className="hidden lg:flex fixed bottom-0 left-14 flex-col items-center space-y-6">
      {" "}
      {socialLinks.map(({ href, icon: Icon, label }) => (
        <SocialIcon
          key={href}
          href={href}
          icon={<Icon size={20} />}
          label={label}
        />
      ))}{" "}
      <div className="h-24 w-px bg-gray-300 dark:bg-gray-700" />{" "}
    </div>
  );
}

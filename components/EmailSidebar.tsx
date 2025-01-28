import Link from "next/link";

export default function EmailSidebar() {
  return (
    <div className="hidden lg:flex fixed bottom-0 right-12 flex-col items-center">
      <Link
        href="mailto:ogunrukuseun@gmail.com"
        className="vertical-text mb-8 text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400"
      >
        Ogunrukuseun@gmail.com
      </Link>
      <div className="h-24 w-px bg-gray-300 dark:bg-gray-700" />
    </div>
  );
}

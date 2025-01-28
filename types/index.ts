export type Theme = "dark" | "light" | "system";
export interface NavItem {
  href: string;
  label: string;
  number: string; // Add this line
}

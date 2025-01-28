import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

import EmailSidebar from "@/components/EmailSidebar";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/SideBar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Ogunruku Seun",
  description: "Frontend Developer | React Developer | Next.js Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="smooth-scroll" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Main Container */}
          <div className="relative min-h-screen flex flex-col md:flex-row">
            {/* Sidebar */}
            <div className="hidden md:block fixed top-0 left-0 h-full w-64 bg-white dark:bg-navy">
              <Sidebar />
            </div>

            {/* Main Content */}
            <div className="flex-1 md:pl-64">
              {/* Navbar */}
              <Navbar />

              {/* Page Content */}
              <main className="px-4 sm:px-8 lg:px-2">
                <div className="pt-24 pb-8">{children}</div>
              </main>
            </div>

            {/* Email Sidebar */}
            <div className="hidden md:block fixed top-0 right-0 h-full w-16 bg-white dark:bg-navy">
              <EmailSidebar />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

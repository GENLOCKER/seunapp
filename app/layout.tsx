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
          <div className="w-full min-h-screen max-w-[1600px] mx-auto bg-white dark:bg-secondary relative">
            {/* Sidebar */}
            <div className="hidden lg:block fixed left-0 bottom-0 bg-white dark:bg-navy">
              <Sidebar />
            </div>

            {/* Email Sidebar */}
            <div className="hidden lg:block fixed right-0 bottom-0 bg-white dark:bg-navy">
              <EmailSidebar />
            </div>

            {/* Main Content */}
            <div className="flex flex-col min-h-screen">
              {/* Navbar */}
              <div className="sticky top-0 bg-white dark:bg-secondary z-[9999]">
                <Navbar />
              </div>

              {/* Page Content */}
              <main className="flex-grow px-4 sm:px-8 lg:px-2 lg:pl-[250px] lg:pr-[250px]">
                <div className="pt-24 pb-8">{children}</div>
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

import EmailSidebar from "@/components/EmailSidebar";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/SideBar";
import { SITE_NAME, SITE_URL, socialLinks } from "@/libs/constants";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

const title = "Ogunruku Seun | Frontend Developer";
const description =
  "Portfolio of Ogunruku Seun (Ogunruku Oluwaseun), a Frontend Developer specializing in React, Next.js and TypeScript.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: `%s | ${SITE_NAME}`,
  },
  description,
  keywords: [
    "Ogunruku Seun",
    "Ogunruku Oluwaseun",
    "Seun Ogunruku",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title,
    description,
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_NAME,
    alternateName: "Ogunruku Oluwaseun",
    url: SITE_URL,
    jobTitle: "Frontend Developer",
    sameAs: socialLinks.map((link) => link.href),
  };

  return (
    <html lang="en" className="smooth-scroll" suppressHydrationWarning>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
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

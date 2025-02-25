import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ScrollToTop from "@/components/ui/ScrollToTop";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Esa's Portfolio",
  description: "Modern & Minimal JS Mastery Portfolio",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          
        </body>
      </html>
    </>
  )
}

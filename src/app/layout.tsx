import type { Metadata } from "next";
import { Inter } from "next/font/google"; 
import "./globals.css";
import { ThemeProvider } from "./_components/theme-provider";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { Variable } from "lucide-react";


const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
});

export const metadata: Metadata = {
  title: "The Next Dev",
  description: "site para promover meu trabalho",
  keywords: ["Next.js", "React.js", "JavaScript", "TypeScript", "Tailwind CSS"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable, 
          fontHeading.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

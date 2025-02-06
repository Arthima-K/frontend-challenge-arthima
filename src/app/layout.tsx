import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Weather API",
  description: "For the weather frontend challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-indigo-300 from-10% via-sky-300 via-30% to-emerald-300 h-[100vh]">{children}</body>
    </html>
  );
}

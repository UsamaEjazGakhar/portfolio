import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Usama Ejaz | Full Stack Developer – FastAPI, React Native, MERN, Laravel",
  description:
    "Senior Full Stack Developer specializing in FastAPI, React Native, MERN Stack, Laravel, Next.js & NestJS. Available for freelance, contracts & collaborations.",
  keywords: [
    "FastAPI Developer",
    "React Native",
    "Full Stack Developer Pakistan",
    "MERN Stack",
    "Laravel",
    "Next.js",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}

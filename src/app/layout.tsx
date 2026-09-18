import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sanatbek Bokijonov — Apple Developer Academy Student & App Builder",
  description:
    "Apple Developer Academy student in Naples, building apps with a backend engineer’s foundation in Python, Django, and APIs.",
  keywords: [
    "Sanatbek Bokijonov",
    "Apple Developer Academy",
    "Naples",
    "iOS Developer",
    "Swift",
    "SwiftUI",
    "Python",
    "Django",
    "Django REST Framework",
    "Backend Developer",
    "App Builder",
    "Full Stack",
    "Tashkent",
  ],
  authors: [{ name: "Sanatbek Bokijonov" }],
  icons: {
    icon: [
      { url: "/apple-icon.svg?v=3", type: "image/svg+xml" },
      { url: "/icon.png?v=3", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico?v=3", sizes: "any" },
    ],
    shortcut: "/apple-icon.svg?v=3",
    apple: [
      { url: "/apple-touch-icon.png?v=3", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Sanatbek Bokijonov — Apple Developer Academy Student & App Builder",
    description:
      "Apple Developer Academy student in Naples, building apps with a backend engineer’s mindset.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#fbfbfd] text-[#1d1d1f] font-sans selection:bg-blue-600/10 selection:text-blue-600">
        {children}
      </body>
    </html>
  );
}

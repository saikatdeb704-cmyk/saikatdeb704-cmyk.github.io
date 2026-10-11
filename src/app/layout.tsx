import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SITE_CONFIG } from "@/lib/constants";
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
  metadataBase: new URL(SITE_CONFIG.url),
  title: "Saikat Deb Sharma — Computer Science (AI & ML) | Web Developer",
  description:
    "2nd-year B.Tech CSE (AI & ML) student and Web Developer with hands-on experience building production-quality Android and React applications with Gemini AI integrations.",
  keywords: [
    "Saikat Deb Sharma",
    "Web Developer",
    "Android Developer",
    "Kotlin",
    "React 19",
    "Jetpack Compose",
    "Gemini AI",
    "TypeScript",
    "Python",
    "BTech CSE",
    "Portfolio",
    "Kalyani India",
  ],
  authors: [{ name: "Saikat Deb Sharma" }],
  openGraph: {
    title: "Saikat Deb Sharma — Computer Science (AI & ML) | Web Developer",
    description:
      "2nd-year B.Tech CSE (AI & ML) student and Web Developer with hands-on experience building production-quality Android and React applications with Gemini AI integrations.",
    siteName: "Saikat Deb Sharma",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saikat Deb Sharma — Computer Science (AI & ML) | Web Developer",
    description:
      "2nd-year B.Tech CSE (AI & ML) student and Web Developer building production-quality Android and React applications with Gemini AI.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[#050505] text-[#f5f5f5]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

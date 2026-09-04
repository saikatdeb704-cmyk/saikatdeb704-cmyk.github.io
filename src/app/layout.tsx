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
  title: "Saikat Deb Sharma — AI/ML Developer & Builder",
  description:
    "Personal portfolio of Saikat Deb Sharma — BTech CSE (AI/ML) student, Python developer, and AI enthusiast building the future with code.",
  keywords: [
    "Saikat Deb Sharma",
    "AI Developer",
    "Machine Learning",
    "Python Developer",
    "Portfolio",
    "BTech CSE",
    "Full Stack Developer",
  ],
  authors: [{ name: "Saikat Deb Sharma" }],
  openGraph: {
    title: "Saikat Deb Sharma — AI/ML Developer & Builder",
    description:
      "Personal portfolio of Saikat Deb Sharma — BTech CSE (AI/ML) student, Python developer, and AI enthusiast building the future with code.",
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
    title: "Saikat Deb Sharma — AI/ML Developer & Builder",
    description:
      "BTech CSE (AI/ML) student passionate about building with code, exploring AI, and creating the future.",
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

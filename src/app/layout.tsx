import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  keywords: [
    "Saikat Deb Sharma",
    "Web Developer",
    "Android Developer",
    "Kotlin",
    "Jetpack Compose",
    "React 19",
    "TypeScript",
    "Gemini AI SDK",
    "BTech CSE AI ML",
    "Kalyani India",
    "Portfolio",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  alternates: {
    canonical: `${SITE_CONFIG.url}/`,
  },
  openGraph: {
    title: SITE_CONFIG.title,
    description:
      "Selected work, case studies, and engineering journey by Saikat Deb Sharma.",
    url: `${SITE_CONFIG.url}/`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description:
      "Selected work, case studies, and engineering journey by Saikat Deb Sharma.",
    images: [SITE_CONFIG.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: SITE_CONFIG.name,
    jobTitle: "B.Tech CSE (AI & ML) Student · Web & Android Developer",
    url: SITE_CONFIG.url,
    email: SOCIAL_LINKS.email,
    sameAs: [SOCIAL_LINKS.github, SOCIAL_LINKS.linkedin],
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
      data-theme="obsidian"
      className={`${inter.variable} ${plusJakarta.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
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
  // Basic Metadata
  title: {
    default: "Agentropic - Agent-Oriented Programming in Rust",
    template: "%s | Agentropic",
  },
  description:
    "Build intelligent, autonomous multi-agent systems with Agentropic. A comprehensive Rust framework featuring BDI cognitive architecture, FIPA-compliant messaging, swarm intelligence, and production-ready deployment for blockchain, trading, IoT, and enterprise automation.",
  
  // Keywords for SEO
  keywords: [
    "Rust",
    "multi-agent systems",
    "agent-oriented programming",
    "AOP",
    "autonomous agents",
    "BDI architecture",
    "swarm intelligence",
    "blockchain agents",
    "DeFi automation",
    "algorithmic trading",
    "IoT agents",
    "robotics",
    "FIPA ACL",
    "agent framework",
    "cognitive agents",
    "distributed systems",
    "fault tolerance",
    "agent coordination",
    "agents",

  ],

  // Author and Creator
  authors: [{ name: "Agentropic Contributors" }],
  creator: "Agentropic Team",
  publisher: "Agentropic",

  metadataBase: new URL("https://agentropic.xzy"),

  // Open Graph (for social media sharing)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://agentropic.xzy",
    siteName: "Agentropic",
    title: "Agentropic - Agent-Oriented Programming in Rust",
    description:
      "Build intelligent, autonomous multi-agent systems with Rust. Production-ready framework for blockchain, trading, IoT, and enterprise automation.",
    images: [
      {
        //url: "https://agentropic.xyz/assets/ag-logo.png",
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Agentropic - Multi-Agent Systems Framework",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Agentropic - Agent-Oriented Programming in Rust",
    description:
      "Build intelligent, autonomous multi-agent systems with Rust. Production-ready framework for blockchain, trading, IoT, and enterprise.",
    images: ["https://agentropic.xzy/assets/twitter-card-banner.png"],
    creator: "@agentropic",
    site: "@agentropic",
  },

  // Favicon and Icons
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "../public/assets/ag-logo.png", type: "image/png", sizes: "32x32" },
      // { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "../public/assets/ag-logo.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },

  // Manifest for PWA
  manifest: "/site.webmanifest",

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Other
  alternates: {
    canonical: "https://agentropic.xzy",
  },
  category: "technology",
  classification: "Software Framework",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Additional meta tags */}
        <meta name="theme-color" content="#CE422B" />
        <meta name="color-scheme" content="light dark" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider defaultTheme="dark" storageKey="agentropic-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

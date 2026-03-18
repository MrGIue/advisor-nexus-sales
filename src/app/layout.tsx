import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Advisor Nexus — The All-in-One Platform for Financial Advisors",
  description:
    "Stop paying for 5 disconnected tools. Advisor Nexus gives you a CRM, calendars, funnels, email marketing, social media management, and more — built specifically for financial advisors. $197/month.",
  openGraph: {
    title: "Advisor Nexus — The All-in-One Platform for Financial Advisors",
    description:
      "Everything you need to run and grow your practice online. One platform. One login. $197/month.",
    images: ["/advisor-nexus-icon.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Advisor Nexus — Built for Financial Advisors",
    description:
      "CRM, calendars, funnels, email, social media — all in one platform. $197/month.",
    images: ["/advisor-nexus-icon.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

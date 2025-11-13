import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VirtuProse Solutions | Intelligent Growth Engines",
  description:
    "VirtuProse Solutions builds AI-powered growth engines across web, marketing, and automation.",
  icons: {
    icon: "/assets/vps-icon.svg",
  },
  openGraph: {
    title: "VirtuProse Solutions",
    description:
      "AI-inspired growth marketing, UI/UX, web apps, and automation built to scale brands 24/7.",
    url: "https://virtuprose.com",
    siteName: "VirtuProse Solutions",
    images: [
      {
        url: "/assets/vps-icon.svg",
        width: 512,
        height: 512,
        alt: "VirtuProse Halo Icon",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} antialiased`}>
        <div className="app-shell">
          <SiteNav />
          <main className="app-content">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}

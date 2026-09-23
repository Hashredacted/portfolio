import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-henna-tau-91.vercel.app"),
  title: "Mohammad Afnan Mirza — AI & Full-Stack Developer",
  description:
    "AI and full-stack developer building AI automation, computer vision systems, APIs, SaaS platforms, dashboards, and business web applications.",
  openGraph: {
    title: "Mohammad Afnan Mirza — AI & Full-Stack Developer",
    description:
      "AI and full-stack developer building AI automation, computer vision systems, APIs, SaaS platforms, dashboards, and business web applications.",
    type: "website",
    url: "https://portfolio-henna-tau-91.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Afnan Mirza — AI & Full-Stack Developer",
    description:
      "AI and full-stack developer building AI automation, computer vision systems, APIs, SaaS platforms, dashboards, and business web applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}

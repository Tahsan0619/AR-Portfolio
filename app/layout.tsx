import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { Toaster } from "react-hot-toast";

import Header from "@/components/Header";
import Nav from "@/components/Nav";
import TopLeftImg from "@/components/TopLeftImg";

import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora-family",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Alex Rivera | Portfolio",
  description:
    "Alex Rivera is a Full-stack web developer with 10+ years of experience.",
  keywords: [
    "react",
    "next",
    "nextjs",
    "html",
    "css",
    "javascript",
    "js",
    "modern-ui",
    "modern-ux",
    "portfolio",
    "framer-motion",
    "react-hot-toast",
    "resend",
    "3d-website",
    "particle-effect",
  ],
  authors: [{ name: "Alex Rivera" }],
  other: {
    "theme-color": "#F59E0B",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full overflow-hidden">
      <body
        className={`${sora.variable} font-sora page bg-primary bg-site text-white bg-cover bg-center bg-no-repeat relative h-dvh min-h-dvh overflow-hidden`}
      >
        <TopLeftImg />
        <Nav />
        <Header />
        {children}
        <aside>
          <Toaster
            position="top-center"
            toastOptions={{
              style: {
                background: "#393a47",
                color: "#fff",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              },
            }}
          />
        </aside>
      </body>
    </html>
  );
}

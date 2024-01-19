import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Roboto as FontSans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";
import Script from "next/script";
import { AOSInit } from "@/components/AOS";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const fontSans = FontSans({
  subsets: ["cyrillic"],
  weight: ["100", "300", "400", "500", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-74K6K8ZJKR" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-74K6K8ZJKR');
        `}
      </Script>
      <AOSInit />

      <body className={cn("min-h-screen bg-background", fontSans.className)}>
        <Navbar />
        <BackToTop />
        {children}
      </body>
    </html>
  );
}

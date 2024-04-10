import "./globals.css";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { GoogleTagManager } from '@next/third-parties/google'
import { cn } from "@/lib/utils";
import MainNavBar from "@/components/main-nav";
import Footer from "@/components/footer";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title:
    "Acting Drivers, Acting Drivers in chenna,Driver job, Call Driver, Call Driver In Chennai",
  applicationName: "Keedriver",

  authors: [{ name: "keedriver", url: "https://keedriver.com" }],
  description:
    "We are concerntarting and giving more vacancies to driver job for various acting drivers and we are mainly covering areas for the drivers in chennai.",
  keywords: [
    "Acting Drivers",
    "Acting Drivers in chennai",
    "Driver job",
    "Call Driver",
    " Call Driver In Chennai",
  ],
  metadataBase: new URL("https://keedriver.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <main className=" relative overflow-hidden">
          <MainNavBar />
          {children}
          <Footer/>
        </main>
      </body>
      <GoogleTagManager gtmId=""/>
    </html>
  );
}

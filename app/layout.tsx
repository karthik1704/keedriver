import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto,Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import { cn } from "@/lib/utils";
import MainNavBar from "@/components/main-nav";
import Footer from "@/components/footer";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { API_URL } from "@/constants";
/*
export const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
*/

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})


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



export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          `min-h-screen bg-background ${inter.variable} font-sans antialiased`,

        )}
      >
         <MainNavBar  />
        <main className="min-h-[70vh]  md:min-h-[80vh] grid items-center relative overflow-hidden">
         
          {children}
          
        </main>
        <Footer />
        <Toaster position="top-right"  richColors />
        {/* <script
          defer
          src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places&callback=YOUR_CALLBACK_NAME"
        ></script> */}
      </body>

      <GoogleTagManager gtmId="" />
    </html>
  );
}

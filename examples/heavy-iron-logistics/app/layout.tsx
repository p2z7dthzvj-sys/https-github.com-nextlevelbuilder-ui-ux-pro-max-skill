import type { Metadata } from "next";
import { Bebas_Neue, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

const source = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-source",
});

export const metadata: Metadata = {
  title: "Heavy Iron Logistics — Heavy Haul & Oversized Freight | Mission, TX",
  description:
    "Heavy Iron Logistics moves oversized, overweight, and heavy machinery across the US, Canada, and Mexico. RGN, lowboy, and flatbed heavy-haul freight brokerage. FMCSA authorized.",
  openGraph: {
    title: "Heavy Iron Logistics — Heavy Haul & Oversized Freight",
    description:
      "Specialized transport for construction equipment, mining & oilfield gear, and industrial cranes across North America.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebas.variable} ${source.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

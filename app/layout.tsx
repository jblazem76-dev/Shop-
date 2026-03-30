import "./globals.css";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ctagronomy.com"),
  title: {
    default: "Central Turf Agronomy | Science-Led Turf Care Products & Programs",
    template: "%s | Central Turf Agronomy"
  },
  description: "Professional turf care products and seasonal programs built on soil science. Carbon Enhanced Formulations (CHO), foliar treatments, and agronomist-designed programs for golf courses, sports turf, and lawn care professionals. DeWitt, Iowa.",
  keywords: ["turf care", "lawn care products", "foliar treatment", "carbon enhanced formulations", "CHO", "golf course maintenance", "sports turf", "soil health", "Central Turf Agronomy", "DeWitt Iowa", "agronomist", "lawn fertilizer"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Central Turf Agronomy",
    url: "https://www.ctagronomy.com"
  },
  alternates: {
    canonical: "https://www.ctagronomy.com"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-ink">
        <Header />
        <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

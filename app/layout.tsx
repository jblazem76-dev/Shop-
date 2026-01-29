import "./globals.css";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Central Turf Agronomy",
  description: "Supplement Photosynthesis with calm, science-led turf inputs."
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

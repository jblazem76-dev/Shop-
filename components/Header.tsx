"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/programs", label: "Programs" },
  { href: "/science", label: "Science" },
  { href: "/resources", label: "Resources" },
  { href: "/dealer", label: "Dealer" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-mist bg-white/80 backdrop-blur sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 sm:py-5">
        <Link href="/" className="flex items-center gap-2 sm:gap-3">
          <Image src="/logo.png" alt="CTA Logo" width={40} height={40} style={{ width: 'auto', height: '40px' }} className="sm:h-12" />
          <span className="text-sm font-semibold tracking-tight text-ink sm:text-base">Central Turf Agronomy</span>
        </Link>
        
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-ink">
              {link.label}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full border border-ink px-4 py-2 text-xs font-semibold uppercase tracking-wide text-ink transition hover:border-pine hover:text-pine sm:inline-flex"
          >
            Request a Quote
          </Link>
          
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 text-ink md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {mobileMenuOpen && (
        <div className="border-t border-mist bg-white md:hidden">
          <nav className="flex flex-col px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-3 text-base font-medium text-slate transition hover:text-ink"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-4 inline-flex justify-center rounded-full bg-pine px-4 py-3 text-sm font-semibold text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Request a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

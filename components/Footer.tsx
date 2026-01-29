import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { href: "/products", label: "Products" },
  { href: "/programs", label: "Programs" },
  { href: "/science", label: "Science" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" }
];

export function Footer() {
  return (
    <footer className="border-t border-mist bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 text-sm text-slate sm:px-6 sm:py-10 md:flex-row md:items-start md:justify-between">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center gap-3 md:justify-start">
            <Image src="/logo.png" alt="CTA Logo" width={40} height={40} style={{ width: 'auto', height: '40px' }} />
            <p className="font-semibold text-ink">Central Turf Agronomy</p>
          </div>
          <p className="mt-3 max-w-sm mx-auto md:mx-0">
            Practical, science-led turf inputs designed for superintendents, turf managers,
            and landscape teams who need predictable outcomes.
          </p>
          <div className="mt-4 text-xs text-slate">
            <p>Phone: 563-210-1616</p>
            <p>Email: ctagronomy@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:justify-end">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-ink">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

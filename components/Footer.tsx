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
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-slate md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="CTA Logo" width={40} height={40} style={{ width: 'auto', height: '40px' }} />
            <p className="font-semibold text-ink">Central Turf Agronomy</p>
          </div>
          <p className="mt-2 max-w-sm">
            Practical, science-led turf inputs designed for superintendents, turf managers,
            and landscape teams who need predictable outcomes.
          </p>
          <div className="mt-4 text-xs text-slate">
            <p>Phone: (555) 123-4567</p>
            <p>Email: info@centralturf.com</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
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

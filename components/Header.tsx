import Link from "next/link";

const navLinks = [
  { href: "/products", label: "Products" },
  { href: "/programs", label: "Programs" },
  { href: "/science", label: "Science" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  return (
    <header className="border-b border-mist bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-base font-semibold tracking-tight text-ink">
          Central Turf Agronomy
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-ink">
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="rounded-full border border-ink px-4 py-2 text-xs font-semibold uppercase tracking-wide text-ink transition hover:border-pine hover:text-pine"
        >
          Request a Quote
        </Link>
      </div>
    </header>
  );
}

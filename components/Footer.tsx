import Link from "next/link";

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
          <p className="font-semibold text-ink">Central Turf Agronomy</p>
          <p className="mt-2 max-w-sm">
            Practical, science-led turf inputs designed for superintendents, turf managers,
            and landscape teams who need predictable outcomes.
          </p>
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

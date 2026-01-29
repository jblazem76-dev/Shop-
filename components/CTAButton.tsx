import Link from "next/link";
import type { ReactNode } from "react";

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

const styles = {
  primary:
    "inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-pine",
  secondary:
    "inline-flex items-center justify-center rounded-full border border-ink px-6 py-3 text-sm font-semibold text-ink transition hover:border-pine hover:text-pine"
};

export function CTAButton({ href, children, variant = "primary" }: CTAButtonProps) {
  return (
    <Link href={href} className={styles[variant]}>
      {children}
    </Link>
  );
}

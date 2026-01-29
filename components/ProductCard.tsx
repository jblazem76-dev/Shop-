import Link from "next/link";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="rounded-3xl border border-mist bg-white p-6 shadow-sm transition hover:shadow-md">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate">
        {product.category}
      </p>
      <h3 className="mt-3 text-xl font-semibold text-ink">{product.name}</h3>
      <p className="mt-3 text-sm text-slate">{product.primaryBenefit}</p>
      <Link
        href={`/products/${product.slug}`}
        className="mt-6 inline-flex text-sm font-semibold text-pine"
      >
        View product
      </Link>
    </div>
  );
}

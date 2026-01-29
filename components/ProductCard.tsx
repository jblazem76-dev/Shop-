import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="relative rounded-3xl border border-mist bg-white p-6 shadow-sm transition hover:shadow-md">
      {product.choBadge && (
        <div className="absolute top-4 right-4">
          <Image
            src="/cho-badge.png"
            alt="Carbon Enhanced"
            width={48}
            height={48}
            className="w-10 h-10 sm:w-12 sm:h-12"
          />
        </div>
      )}
      <p className="text-xs font-semibold uppercase tracking-wide text-slate">
        {product.category}
      </p>
      <h3 className="mt-3 text-xl font-semibold text-ink pr-12">{product.name}</h3>
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

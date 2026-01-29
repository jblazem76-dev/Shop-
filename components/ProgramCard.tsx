import Link from "next/link";
import type { Program } from "@/data/programs";
import { products } from "@/data/products";

export function ProgramCard({ program }: { program: Program }) {
  const recommendedProductData = program.recommendedProducts
    .map((slug) => products.find((p) => p.slug === slug))
    .filter(Boolean);

  return (
    <div className="rounded-3xl border border-mist bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-ink">{program.name}</h3>
      <div className="mt-4 space-y-3 text-sm text-slate">
        <p>
          <span className="font-semibold text-ink">Problem:</span> {program.problem}
        </p>
        <p>
          <span className="font-semibold text-ink">Solution:</span> {program.solution}
        </p>
        <p>
          <span className="font-semibold text-ink">Why bundled:</span> {program.whyBundled}
        </p>
        <p>
          <span className="font-semibold text-ink">When to use:</span> {program.timing}
        </p>
      </div>
      {recommendedProductData.length > 0 && (
        <div className="mt-6 border-t border-mist pt-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate">Recommended Products</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {recommendedProductData.map((product) => (
              <Link
                key={product!.slug}
                href={`/products/${product!.slug}`}
                className="rounded-full bg-pine/10 px-3 py-1.5 text-xs font-medium text-pine transition hover:bg-pine/20"
              >
                {product!.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

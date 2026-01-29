"use client";

import { useMemo, useState } from "react";
import { ProductGrid } from "@/components/ProductGrid";
import type { Product } from "@/data/products";

export function ProductsClient({ products }: { products: Product[] }) {
  const categories = useMemo(() => {
    const set = new Set(products.map((product) => product.category).filter(Boolean));
    return ["All", ...Array.from(set)];
  }, [products]);

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") {
      return products;
    }
    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory, products]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition ${
              activeCategory === category
                ? "bg-ink text-white"
                : "border border-mist text-slate hover:border-ink hover:text-ink"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <ProductGrid products={filteredProducts} />
    </div>
  );
}

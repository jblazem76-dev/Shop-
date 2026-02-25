import type { Metadata } from "next";
import { ProductsClient } from "@/app/products/ProductsClient";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Turf Care Products",
  description: "Explore 12 professional turf care products including foliar treatments, soil conditioners, micronutrients, and Carbon Enhanced Formulations. Application rates and technical details for golf courses, sports turf, and lawn care."
};

export default function ProductsPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-4xl font-semibold text-ink">All Products</h1>
        <p className="max-w-2xl text-slate">
          Explore CTA inputs by category. Each product includes a clear benefit statement, 
          application summary, and the science behind it.
        </p>
      </div>
      <ProductsClient products={products} />
    </div>
  );
}

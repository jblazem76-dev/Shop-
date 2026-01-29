import { ProductsClient } from "@/app/products/ProductsClient";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-4xl font-semibold text-ink">All Products</h1>
        <p className="max-w-2xl text-slate">
          Explore CTA inputs by category. Once the catalog files are connected, each product will include
          a clear benefit statement, application summary, and the science behind it.
        </p>
      </div>
      <ProductsClient products={products} />
    </div>
  );
}

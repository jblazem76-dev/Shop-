import { CTAButton } from "@/components/CTAButton";
import { products } from "@/data/products";

type ProductPageProps = {
  params: { slug: string };
};

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-semibold text-ink">Product details coming soon</h1>
        <p className="max-w-xl text-slate">
          The CTA catalog files are not connected yet. Once available, each product page will include
          benefit-driven language, application guidance, and who it is best for.
        </p>
        <CTAButton href="/products" variant="secondary">
          Back to products
        </CTAButton>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate">
          {product.category}
        </p>
        <h1 className="text-4xl font-semibold text-ink">{product.name}</h1>
        <p className="max-w-2xl text-lg text-slate">{product.primaryBenefit}</p>
      </div>

      <section className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-ink">What it does</h2>
            <p className="mt-3 text-slate">{product.description}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-ink">How it works</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate">
              {product.howItWorks.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-ink">Application summary</h3>
            <p className="mt-3 text-sm text-slate">{product.applicationSummary}</p>
          </div>
        </div>
        <div className="rounded-3xl bg-mist p-6">
          <h3 className="text-xl font-semibold text-ink">Who it&apos;s for</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate">
            {product.idealFor.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

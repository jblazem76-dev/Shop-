import { CTAButton } from "@/components/CTAButton";
import { ProductGrid } from "@/components/ProductGrid";
import { products } from "@/data/products";

const steps = [
  {
    title: "Feed the Plant",
    description:
      "Target photosynthesis with efficient foliar support so the plant produces more energy from the light it already receives."
  },
  {
    title: "Condition the Soil",
    description:
      "Build soil structure and oxygen movement so roots can exchange water, air, and nutrients without stress."
  },
  {
    title: "Manage Soil Moisture",
    description:
      "Keep moisture even in the root zone to reduce swings that interrupt growth or invite disease pressure."
  }
];

export default function HomePage() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="space-y-24">
      <section className="space-y-8">
        <div className="flex flex-col gap-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate">
            Central Turf Agronomy
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-ink md:text-6xl">
            Supplement Photosynthesis.
          </h1>
          <p className="max-w-2xl text-lg text-slate">
            CTA pairs calm, science-led inputs with clear guidance so turf teams can build
            consistent plant energy without overcorrecting.
          </p>
          <div className="flex flex-wrap gap-4">
            <CTAButton href="/products">Explore Products</CTAButton>
            <CTAButton href="/contact" variant="secondary">
              Request a Quote
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="space-y-10">
        <div>
          <h2 className="text-3xl font-semibold text-ink">The CTA 3-Step Method</h2>
          <p className="mt-4 max-w-2xl text-slate">
            A simple framework that keeps decisions tight and predictable. Each step is designed
            to support the next.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.title} className="rounded-3xl bg-mist p-6">
              <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-3 text-sm text-slate">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-10">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold text-ink">Featured Products</h2>
            <p className="mt-3 max-w-xl text-slate">
              A focused set of CTA essentials. Product details will populate once the catalog is loaded.
            </p>
          </div>
          <CTAButton href="/products" variant="secondary">
            View all products
          </CTAButton>
        </div>
        <ProductGrid products={featuredProducts} />
      </section>

      <section className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div className="rounded-3xl border border-mist p-8">
          <h2 className="text-3xl font-semibold text-ink">Seasonal Program Spotlight</h2>
          <p className="mt-4 text-slate">
            Programs are built to reduce decision fatigue. They bundle compatible inputs so
            seasonal goals stay aligned from the root zone to the leaf surface.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-slate">
            <li>Problem solved: stress-driven decline in energy production.</li>
            <li>Why together: coordinated timing improves consistency across crews and sites.</li>
            <li>Result: steadier performance without over-application.</li>
          </ul>
        </div>
        <div className="rounded-3xl bg-pine p-8 text-white">
          <h3 className="text-2xl font-semibold">Science, simplified.</h3>
          <p className="mt-4 text-sm text-white/80">
            CTA focuses on the carbon story. When photosynthesis is supported, the plant has more
            energy to allocate to roots, color, and recovery.
          </p>
          <div className="mt-6 space-y-4 text-sm text-white/80">
            <div>
              <p className="font-semibold text-white">Carbon Advantage (CHO)</p>
              <p>Carbon, hydrogen, and oxygen form the base of plant energy. CTA centers inputs here.</p>
            </div>
            <div>
              <p className="font-semibold text-white">Photosynthesis vs Respiration</p>
              <p>Balanced energy in equals energy out. The goal is to keep the net positive.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

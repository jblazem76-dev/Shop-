import Image from "next/image";
import { CTAButton } from "@/components/CTAButton";
import { ProductGrid } from "@/components/ProductGrid";
import { products } from "@/data/products";

const steps = [
  {
    title: "Feed the Plant",
    description:
      "Target photosynthesis with efficient foliar support so the plant produces more energy from the light it already receives.",
    image: "/earth.png"
  },
  {
    title: "Condition the Soil",
    description:
      "Build soil structure and oxygen movement so roots can exchange water, air, and nutrients without stress.",
    image: "/plant.png"
  },
  {
    title: "Manage Soil Moisture",
    description:
      "Keep moisture even in the root zone to reduce swings that interrupt growth or invite disease pressure.",
    image: "/water.png"
  }
];

export default function HomePage() {
  const featuredProduct = products.find((p) => p.featured);
  const highlightSlugs = ["efficiensi", "c-color-n", "c-starter"];
  const otherProducts = highlightSlugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter((p): p is typeof products[number] => p !== undefined);

  return (
    <div className="space-y-16 sm:space-y-24">
      <section className="space-y-8">
        <div className="flex flex-col gap-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate">
            Central Turf Agronomy
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-6xl">
            HIGH Performance. MAX Returns.
          </h1>
          <p className="max-w-2xl text-lg text-slate">
            Predictable performance starts with CTA.
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
              <div className="mb-4 flex justify-center">
                <Image
                  src={step.image}
                  alt={step.title}
                  width={200}
                  height={100}
                  className="h-24 w-auto object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-3 text-sm text-slate">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {featuredProduct && (
        <section className="space-y-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate">Featured Product</p>
            <h2 className="mt-2 text-3xl font-semibold text-ink">{featuredProduct.name}</h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100 p-8">
              <p className="text-lg font-medium text-ink">{featuredProduct.primaryBenefit}</p>
              <p className="mt-4 text-slate">{featuredProduct.description}</p>
              <div className="mt-6">
                <CTAButton href={`/products/${featuredProduct.slug}`}>
                  Learn More
                </CTAButton>
              </div>
            </div>
            <div className="rounded-3xl border border-mist p-8">
              <h3 className="text-xl font-semibold text-ink">Key Features</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate">
                {featuredProduct.keyFeatures.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      <section className="space-y-10">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold text-ink">More Products</h2>
            <p className="mt-3 max-w-xl text-slate">
              A focused set of CTA essentials designed for consistent, science-led turf management.
            </p>
          </div>
          <CTAButton href="/products" variant="secondary">
            View All Products
          </CTAButton>
        </div>
        <ProductGrid products={otherProducts} />
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
          <div className="mt-6">
            <CTAButton href="/programs">View All Programs</CTAButton>
          </div>
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

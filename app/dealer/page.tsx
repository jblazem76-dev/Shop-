import { CTAButton } from "@/components/CTAButton";

const benefits = [
  {
    title: "Soil Calculator Technology",
    description:
      "Convert any soil test into precise product recommendations. No guesswork. Pure agronomy."
  },
  {
    title: "Dual System Advantage",
    description:
      "Complete foliar and granular programs. Most competitors focus on one or the other."
  },
  {
    title: "Agronomist-Built",
    description:
      "Founded by Brent Smith. Products formulated on soil science, not marketing trends."
  },
  {
    title: "Training & Support",
    description:
      "Professional certification. Technical guidance. Seasonal programming frameworks."
  }
];

const partners = [
  "Lawn care professionals",
  "Landscape maintenance teams",
  "Turf managers",
  "Golf course superintendents",
  "Sports field managers",
  "Agronomic consultants"
];

const offerings = [
  {
    title: "Access to Soil Calculator (in development)",
    description:
      "Proprietary platform that translates soil test data into exact CTA product recommendations and application schedules."
  },
  {
    title: "Complete Product Lineup",
    description:
      "9 foliar products + 7 granular products designed to work as an integrated system."
  },
  {
    title: "Professional Training",
    description:
      "6-module certification covering soil science fundamentals, calculator use, and seasonal programming."
  },
  {
    title: "Marketing Resources",
    description:
      "Proven content, before/after templates, and technical materials to support client conversations."
  },
  {
    title: "Ongoing Support",
    description:
      "Direct access to agronomist expertise. Seasonal program guidance. Partner community."
  }
];

export default function DealerPage() {
  return (
    <div className="space-y-16 sm:space-y-24">
      <section className="space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate">
          Dealer Program
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl">
          Partner With CTA
        </h1>
        <p className="max-w-2xl text-lg text-slate">
          Science-led nutrition programs for professionals who build their business on
          predictable results.
        </p>
      </section>

      <section className="space-y-10">
        <h2 className="text-3xl font-semibold text-ink">Why CTA Partners Stand Out</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {benefits.map((item) => (
            <div key={item.title} className="rounded-3xl bg-mist p-6">
              <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 text-sm text-slate">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div className="rounded-3xl bg-pine p-8 text-white">
          <h2 className="text-2xl font-semibold">Who We Work With</h2>
          <ul className="mt-6 space-y-3 text-sm text-white/80">
            {partners.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-mist p-8">
          <h2 className="text-2xl font-semibold text-ink">The Approach</h2>
          <ul className="mt-6 space-y-3 text-sm text-slate">
            <li>Problem solved: generic programs that ignore soil test reality.</li>
            <li>Why together: calculator + products + training = consistency at scale.</li>
            <li>Result: differentiated service backed by agronomic precision.</li>
          </ul>
        </div>
      </section>

      <section className="space-y-10">
        <h2 className="text-3xl font-semibold text-ink">What Partners Receive</h2>
        <div className="space-y-6">
          {offerings.map((item) => (
            <div key={item.title} className="rounded-3xl border border-mist p-6">
              <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 text-sm text-slate">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-gradient-to-br from-green-50 to-green-100 p-8 sm:p-12">
        <h2 className="text-3xl font-semibold text-ink">Ready to Learn More?</h2>
        <div className="mt-6 space-y-2 text-slate">
          <p className="text-lg font-medium text-ink">Contact Brent Smith</p>
          <p className="text-sm">Founder & Agronomist</p>
          <p className="text-sm">Phone: 563-210-1616</p>
          <p className="text-sm">Email: ctagronomy@gmail.com</p>
        </div>
        <div className="mt-6">
          <CTAButton href="/contact">Get in Touch</CTAButton>
        </div>
      </section>
    </div>
  );
}

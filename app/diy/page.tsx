import Image from "next/image";
import { CTAButton } from "@/components/CTAButton";

const steps = [
  {
    step: "Step 1 of 3",
    season: "Spring",
    emoji: "🌱",
    timing: "April / May",
    formula: "28-0-8 — 3 Month Feed",
    details: [
      "Pre-Emergent for Crabgrass Control",
      "Acelepryn for Insects & Grubs Included"
    ],
    price: "$89",
    unit: "/ 50 lb bag",
    border: "border-green-500"
  },
  {
    step: "Step 2 of 3",
    season: "Summer",
    emoji: "☀️",
    timing: "June / July",
    formula: "28-3-10 — 3 Month Feed",
    details: [
      "Balanced summer fertilizer blend",
      "Heat & stress resilience support"
    ],
    price: "$49",
    unit: "/ 50 lb bag",
    border: "border-yellow-500"
  },
  {
    step: "Step 3 of 3",
    season: "Fall",
    emoji: "🍂",
    timing: "September / October",
    formula: "11-2-9 Organic",
    details: [
      "Balanced organic fertilizer for rooting",
      "Soil conditioners — prepares for winter"
    ],
    price: "$79",
    unit: "/ 50 lb bag",
    border: "border-orange-500"
  }
];

export default function DIYPage() {
  return (
    <div className="space-y-12 sm:space-y-16">
      <section className="relative left-1/2 right-1/2 -mx-[50vw] -mt-8 w-screen overflow-hidden bg-gray-900 px-6 py-12 sm:-mt-16 sm:px-10 sm:py-20">
        <div className="absolute inset-0">
          <Image
            src="/hero-grass-bg.jpg"
            alt=""
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/90" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
            Professional Results · Simple Steps
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            DIY Lawn Care Program
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
            A complete, science-backed seasonal program for serious DIY homeowners who demand
            professional-grade results.
          </p>
        </div>
      </section>

      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">Your Best Lawn Starts Here</h2>
          <p className="mx-auto mt-3 max-w-xl text-slate">Three simple steps. Three seasonal applications. One professional-grade lawn.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((item) => (
            <div key={item.season} className={`rounded-3xl border-2 ${item.border} bg-gray-900 p-6 text-white`}>
              <p className="text-xs font-semibold uppercase tracking-wide text-green-400">
                {item.step}
              </p>
              <h3 className="mt-2 text-3xl font-bold">
                {item.emoji} {item.season}
              </h3>
              <p className="text-sm text-white/60">{item.timing}</p>
              <p className="mt-4 text-base font-semibold text-white">{item.formula}</p>
              <ul className="mt-3 space-y-1 text-sm text-white/70">
                {item.details.map((d) => (
                  <li key={d}>• {d}</li>
                ))}
              </ul>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-3xl font-bold text-yellow-400">{item.price}</span>
                <span className="text-sm text-white/50">{item.unit}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={`rounded-3xl border-2 border-purple-500 bg-gray-900 p-6 text-white`}>
        <p className="text-xs font-semibold uppercase tracking-wide text-purple-400">Add-On</p>
        <h3 className="mt-2 text-2xl font-bold">🌿 Weed Control</h3>
        <p className="mt-1 text-sm text-white/60">Broadleaf Spray — 3-Way Herbicide</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-base font-semibold text-white">3-Way Herbicide</p>
            <ul className="mt-3 space-y-1 text-sm text-white/70">
              <li>• 1 Gallon — treats up to 20,000 sq ft</li>
              <li>• Targets broadleaf weeds effectively</li>
            </ul>
          </div>
          <div className="flex items-center justify-end">
            <div>
              <span className="text-3xl font-bold text-yellow-400">$79</span>
              <span className="ml-2 text-sm text-white/50">/ gallon</span>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl bg-gradient-to-br from-green-800 to-green-900 p-8 sm:p-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-green-300">
              ★ Complete Package Value
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white">Full Season Program</h2>
            <p className="mt-3 text-sm text-white/70">
              All 3 seasonal fertilizers + Broadleaf Spray · Treats up to 12,000 sq ft of turf
            </p>
          </div>
          <div className="text-center sm:text-right">
            <p className="text-xs font-semibold uppercase tracking-wide text-green-300">
              Package Total
            </p>
            <p className="text-6xl font-bold text-yellow-400">$296</p>
            <p className="mt-1 text-sm text-white/70">Delivered to your door</p>
            <p className="text-sm text-white/70">Covers up to 12,000 sq ft</p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl bg-green-500 p-6 text-center">
        <p className="text-xl font-bold text-white">
          🚚 FREE DELIVERY within 30 Miles of DeWitt, Iowa
        </p>
      </section>

      <section className="rounded-3xl bg-gradient-to-br from-green-50 to-green-100 p-8 text-center">
        <h2 className="text-2xl font-semibold text-ink sm:text-3xl">Ready to Order?</h2>
        <p className="mx-auto mt-3 max-w-lg text-sm text-slate">
          Fill out our order form and we'll confirm your request and schedule delivery.
        </p>
        <div className="mt-6">
          <a
            href="/order"
            className="inline-flex rounded-full bg-pine px-8 py-3 text-sm font-semibold text-white transition hover:bg-pine/90"
          >
            Go to Order Form
          </a>
        </div>
      </section>

      <section className="rounded-3xl bg-gray-900 p-8 text-white sm:p-12">
        <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
        <p className="mt-4 text-white/70">
          Call or Text Brent Smith, or Isaac Smith to schedule:
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 p-4">
            <p className="text-lg font-semibold text-green-400">Brent Smith</p>
            <p className="text-sm text-white/70">Phone: 563-210-1616</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-4">
            <p className="text-lg font-semibold text-green-400">Isaac Smith</p>
            <p className="text-sm text-white/70">Phone: 563-340-3205</p>
          </div>
        </div>
        <div className="mt-4 space-y-1 text-sm text-white/70">
          <p>Email: ctagronomy@gmail.com</p>
          <p>Website: www.ctagronomy.com</p>
        </div>
        <div className="mt-6">
          <CTAButton href="/contact">Contact Us</CTAButton>
        </div>
        <p className="mt-8 text-center text-xs uppercase tracking-wide text-white/40">
          Agronomist Formulated · Science Backed · Professional Grade
        </p>
      </section>
    </div>
  );
}

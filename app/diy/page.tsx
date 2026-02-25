import { CTAButton } from "@/components/CTAButton";

const steps = [
  {
    step: "Step 1 of 3",
    season: "Spring",
    timing: "April / May",
    formula: "28-0-8 — 3 Month Feed",
    details: [
      "Pre-Emergent for Crabgrass Control",
      "Acelepryn for Insects & Grubs Included"
    ],
    price: "$89",
    unit: "/ 50 lb bag",
    accent: "from-green-600 to-green-700"
  },
  {
    step: "Step 2 of 3",
    season: "Summer",
    timing: "June / July",
    formula: "28-3-10 — 3 Month Feed",
    details: [
      "Balanced summer fertilizer blend",
      "Heat & stress resilience support"
    ],
    price: "$49",
    unit: "/ 50 lb bag",
    accent: "from-amber-500 to-amber-600"
  },
  {
    step: "Step 3 of 3",
    season: "Fall",
    timing: "September / October",
    formula: "11-2-9 Organic",
    details: [
      "Balanced organic fertilizer for rooting",
      "Soil conditioners — prepares for winter"
    ],
    price: "$79",
    unit: "/ 50 lb bag",
    accent: "from-orange-500 to-orange-600"
  }
];

export default function DIYPage() {
  return (
    <div className="space-y-16 sm:space-y-24">
      <section className="space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate">
          Professional Results · Simple Steps
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl">
          DIY Lawn Care Program
        </h1>
        <p className="max-w-2xl text-lg text-slate">
          A complete, science-backed seasonal program for serious DIY homeowners who demand
          professional-grade results.
        </p>
      </section>

      <section className="space-y-10">
        <h2 className="text-3xl font-semibold text-ink">Your Best Lawn Starts Here</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((item) => (
            <div key={item.season} className="rounded-3xl border border-mist p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate">
                {item.step}
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-ink">{item.season}</h3>
              <p className="text-sm text-slate">{item.timing}</p>
              <p className="mt-4 text-base font-semibold text-ink">{item.formula}</p>
              <ul className="mt-3 space-y-1 text-sm text-slate">
                {item.details.map((d) => (
                  <li key={d}>• {d}</li>
                ))}
              </ul>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-2xl font-bold text-pine">{item.price}</span>
                <span className="text-sm text-slate">{item.unit}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-mist p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate">Add-On</p>
        <h3 className="mt-2 text-2xl font-semibold text-ink">Weed Control</h3>
        <p className="mt-1 text-sm text-slate">Broadleaf Spray — 3-Way Herbicide</p>
        <p className="mt-4 text-base font-semibold text-ink">3-Way Herbicide</p>
        <ul className="mt-3 space-y-1 text-sm text-slate">
          <li>• 1 Gallon — treats up to 20,000 sq ft</li>
          <li>• Targets broadleaf weeds effectively</li>
        </ul>
        <div className="mt-6 flex items-baseline gap-2">
          <span className="text-2xl font-bold text-pine">$79</span>
          <span className="text-sm text-slate">/ gallon</span>
        </div>
      </section>

      <section className="rounded-3xl bg-gradient-to-br from-green-50 to-green-100 p-8 sm:p-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate">
              Complete Package Value
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-ink">Full Season Program</h2>
            <p className="mt-3 text-sm text-slate">
              All 3 seasonal fertilizers + Broadleaf Spray · Treats up to 12,000 sq ft of turf
            </p>
          </div>
          <div className="text-center sm:text-right">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate">
              Package Total
            </p>
            <p className="text-5xl font-bold text-pine">$296</p>
            <p className="mt-1 text-sm text-slate">Delivered to your door</p>
            <p className="text-sm text-slate">Covers up to 12,000 sq ft</p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl bg-pine p-8 text-center text-white">
        <p className="text-lg font-semibold">
          FREE DELIVERY within 30 Miles of DeWitt, Iowa
        </p>
      </section>

      <section className="rounded-3xl border border-mist p-8 sm:p-12">
        <h2 className="text-3xl font-semibold text-ink">Ready to Get Started?</h2>
        <p className="mt-4 text-slate">
          Call or Text Brent Smith, or Isaac Smith to schedule:
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div>
            <p className="text-lg font-medium text-ink">Brent Smith</p>
            <p className="text-sm text-slate">Phone: 563-210-1616</p>
          </div>
          <div>
            <p className="text-lg font-medium text-ink">Isaac Smith</p>
            <p className="text-sm text-slate">Phone: 563-340-3205</p>
          </div>
        </div>
        <div className="mt-4 space-y-1 text-sm text-slate">
          <p>Email: ctagronomy@gmail.com</p>
          <p>Website: www.ctagronomy.com</p>
        </div>
        <div className="mt-6">
          <CTAButton href="/contact">Contact Us</CTAButton>
        </div>
        <p className="mt-8 text-center text-xs uppercase tracking-wide text-slate">
          Agronomist Formulated · Science Backed · Professional Grade
        </p>
      </section>
    </div>
  );
}

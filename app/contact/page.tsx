import { CTAButton } from "@/components/CTAButton";

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-4xl font-semibold text-ink">Request a Quote</h1>
        <p className="max-w-2xl text-slate">
          Contact CTA when you need program guidance, custom timing, or volume pricing. If you already
          know the products you need, online ordering will be available soon.
        </p>
      </div>

      <div className="rounded-3xl border border-mist p-8">
        <h2 className="text-2xl font-semibold text-ink">How we can help</h2>
        <ul className="mt-4 space-y-3 text-sm text-slate">
          <li>• Build a seasonal plan for your turf conditions and traffic demands.</li>
          <li>• Match CTA inputs to your current fertility and moisture strategy.</li>
          <li>• Coordinate delivery timing across multiple sites.</li>
        </ul>
        <div className="mt-8">
          <CTAButton href="mailto:info@central-turf-agronomy.example">
            Request a Quote
          </CTAButton>
        </div>
      </div>
    </div>
  );
}

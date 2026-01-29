import { CTAButton } from "@/components/CTAButton";
import Image from "next/image";

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

      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-3xl border border-mist p-8">
          <h2 className="text-2xl font-semibold text-ink">How We Can Help</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate">
            <li>• Build a seasonal plan for your turf conditions and traffic demands.</li>
            <li>• Match CTA inputs to your current fertility and moisture strategy.</li>
            <li>• Coordinate delivery timing across multiple sites.</li>
          </ul>
          <div className="mt-8">
            <CTAButton href="mailto:ctagronomy@gmail.com">
              Request a Quote
            </CTAButton>
          </div>
        </div>

        <div className="rounded-3xl bg-mist p-8">
          <div className="flex items-center gap-4 mb-6">
            <Image src="/logo.png" alt="CTA Logo" width={64} height={64} style={{ width: 'auto', height: '64px' }} />
            <h2 className="text-2xl font-semibold text-ink">Contact Information</h2>
          </div>
          <div className="space-y-4 text-slate">
            <div>
              <p className="font-semibold text-ink">Contact</p>
              <p>Brent Smith</p>
            </div>
            <div>
              <p className="font-semibold text-ink">Phone</p>
              <p>563-210-1616</p>
            </div>
            <div>
              <p className="font-semibold text-ink">Email</p>
              <p>ctagronomy@gmail.com</p>
            </div>
            <div>
              <p className="font-semibold text-ink">Website</p>
              <p>www.ctagronomy.com</p>
            </div>
            <div>
              <p className="font-semibold text-ink">Address</p>
              <p>215 E 2nd. Street<br />Dewitt, IA 52742</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

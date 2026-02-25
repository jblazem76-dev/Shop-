import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources & Downloads",
  description: "Download the CTA product catalog, safety data sheets, and product labels. Access dealer program information and technical resources for turf care professionals."
};

export default function ResourcesPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-4xl font-semibold text-ink">Resources</h1>
        <p className="max-w-2xl text-slate">
          Download our product catalog and access important documents to keep your team 
          compliant and informed about CTA products.
        </p>
      </div>

      <div className="rounded-3xl bg-pine p-8 text-white">
        <h2 className="text-2xl font-semibold">Become a Dealer</h2>
        <p className="mt-3 text-sm text-white/80">
          Join the CTA dealer network and give your clients science-backed turf programs
          that deliver predictable results. Access exclusive tools, training, and support.
        </p>
        <Link
          href="/dealer"
          className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-pine transition hover:bg-white/90"
        >
          Learn More
        </Link>
      </div>

      <div className="rounded-3xl bg-gradient-to-br from-green-50 to-green-100 p-8">
        <h2 className="text-2xl font-semibold text-ink">Product Catalog</h2>
        <p className="mt-3 text-slate">
          Download our complete product catalog featuring all CTA turf care products, 
          application rates, and technical specifications.
        </p>
        <Link
          href="/CTA_Catalog.pdf"
          target="_blank"
          className="mt-6 inline-flex rounded-full bg-pine px-6 py-3 text-sm font-semibold text-white transition hover:bg-pine/90"
        >
          Download Catalog (PDF)
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {[
          { title: "Safety Data Sheets (SDS)", helper: "Download the latest SDS packets for proper handling and storage information." },
          { title: "Product Labels", helper: "Access current labels before ordering to review application details." }
        ].map((resource) => (
          <div key={resource.title} className="rounded-3xl border border-mist p-6">
            <h2 className="text-xl font-semibold text-ink">{resource.title}</h2>
            <p className="mt-3 text-sm text-slate">{resource.helper}</p>
            <button
              type="button"
              className="mt-6 inline-flex rounded-full border border-ink px-4 py-2 text-xs font-semibold uppercase tracking-wide text-ink"
            >
              Coming Soon
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

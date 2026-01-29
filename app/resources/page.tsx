export default function ResourcesPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-4xl font-semibold text-ink">Resources</h1>
        <p className="max-w-2xl text-slate">
          SDS and label documents keep your team compliant and informed. They also explain the proper
          handling, storage, and application details for every CTA product.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {[
          { title: "Safety Data Sheets (SDS)", helper: "Download the latest SDS packets." },
          { title: "Product Labels", helper: "Access current labels before ordering." }
        ].map((resource) => (
          <div key={resource.title} className="rounded-3xl border border-mist p-6">
            <h2 className="text-xl font-semibold text-ink">{resource.title}</h2>
            <p className="mt-3 text-sm text-slate">{resource.helper}</p>
            <button
              type="button"
              className="mt-6 inline-flex rounded-full border border-ink px-4 py-2 text-xs font-semibold uppercase tracking-wide text-ink"
            >
              Download (placeholder)
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

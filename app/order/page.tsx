"use client";

import { useState, useRef } from "react";

const diyItems = [
  { name: "Spring 28-0-8 (50 lb bag)", price: 89, featured: false },
  { name: "Summer 28-3-10 (50 lb bag)", price: 49, featured: false },
  { name: "Fall 11-2-9 Organic (50 lb bag)", price: 79, featured: false },
  { name: "Weed Control 3-Way Herbicide (1 gal)", price: 79, featured: false },
  { name: "Full Season Program (all 3 + spray)", price: 296, featured: true }
];

const FULL_APPLICATION_FEE = 150;
const SINGLE_APPLICATION_FEE = 50;

export default function OrderPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [diyQuantities, setDiyQuantities] = useState<Record<string, number>>({});
  const [applyFull, setApplyFull] = useState(false);
  const [singleAppCount, setSingleAppCount] = useState(0);
  const formRef = useRef<HTMLFormElement>(null);

  function validateAndScrollToFirst(): boolean {
    if (!formRef.current) return true;
    const fields = formRef.current.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("input[required], textarea[required]");
    for (const field of fields) {
      if (!field.value.trim() || !field.checkValidity()) {
        field.classList.add("!border-red-400", "!ring-1", "!ring-red-400");
        field.scrollIntoView({ behavior: "smooth", block: "center" });
        field.focus({ preventScroll: true });
        field.addEventListener("input", () => {
          field.classList.remove("!border-red-400", "!ring-1", "!ring-red-400");
        }, { once: true });
        return false;
      }
    }
    return true;
  }

  function updateQty(name: string, value: string) {
    const num = parseInt(value) || 0;
    setDiyQuantities((prev) => ({ ...prev, [name]: num }));
  }

  const productTotal = diyItems.reduce((sum, item) => {
    const qty = diyQuantities[item.name] || 0;
    return sum + item.price * qty;
  }, 0);

  const applicationTotal = applyFull
    ? FULL_APPLICATION_FEE
    : singleAppCount * SINGLE_APPLICATION_FEE;

  const orderTotal = productTotal + applicationTotal;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validateAndScrollToFirst()) return;
    setSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const items = diyItems
      .filter((p) => (diyQuantities[p.name] || 0) > 0)
      .map((p) => ({ name: p.name, price: `$${p.price}`, qty: diyQuantities[p.name] }));

    if (applyFull) {
      items.push({ name: "Apply Full Program For Me (up to 12,000 sq ft per application)", price: `$${FULL_APPLICATION_FEE}`, qty: 1 });
    } else if (singleAppCount > 0) {
      items.push({ name: "Apply Single Application For Me (up to 12,000 sq ft per application)", price: `$${SINGLE_APPLICATION_FEE}`, qty: singleAppCount });
    }

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          address: `${data.get("address")}, ${data.get("city")}, ${data.get("state")} ${data.get("zip")}`,
          email: data.get("email"),
          phone: data.get("phone"),
          items,
          delivery: data.get("delivery") || ""
        })
      });

      if (!res.ok) throw new Error("Failed to submit");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or call 563-210-1616.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center space-y-6 text-center">
        <div className="rounded-full bg-green-100 p-4">
          <svg className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-3xl font-semibold text-ink">Order Request Received</h2>
        <p className="max-w-md text-slate">
          We've received your order request and will follow up shortly to confirm
          pricing and delivery details. You can also reach us at 563-210-1616.
        </p>
        <button
          onClick={() => { setSubmitted(false); setDiyQuantities({}); setApplyFull(false); setSingleAppCount(0); }}
          className="rounded-full bg-pine px-6 py-3 text-sm font-semibold text-white transition hover:bg-pine/90"
        >
          Submit Another Order
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl space-y-12">
      <div className="space-y-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate">
          Central Turf Agronomy
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Order Request Form
        </h1>
        <p className="mx-auto max-w-xl text-slate">
          Fill out the form below and we'll follow up to confirm your order,
          pricing, and delivery details.
        </p>
      </div>

      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-10" noValidate>
        <section className="rounded-3xl border border-mist p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-ink">Contact Information</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="name" className="block text-sm font-medium text-ink">Full Name <span className="text-red-500">*</span></label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 w-full rounded-xl border border-mist bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-pine focus:ring-1 focus:ring-pine"
                placeholder="John Anderson"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="address" className="block text-sm font-medium text-ink">Street Address <span className="text-red-500">*</span></label>
              <input
                id="address"
                name="address"
                type="text"
                required
                className="mt-1 w-full rounded-xl border border-mist bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-pine focus:ring-1 focus:ring-pine"
                placeholder="742 Maple Drive"
              />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-ink">City <span className="text-red-500">*</span></label>
              <input
                id="city"
                name="city"
                type="text"
                required
                className="mt-1 w-full rounded-xl border border-mist bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-pine focus:ring-1 focus:ring-pine"
                placeholder="Davenport"
              />
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-ink">State <span className="text-red-500">*</span></label>
                <input
                  id="state"
                  name="state"
                  type="text"
                  required
                  className="mt-1 w-full rounded-xl border border-mist bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-pine focus:ring-1 focus:ring-pine"
                  placeholder="IA"
                />
              </div>
              <div>
                <label htmlFor="zip" className="block text-sm font-medium text-ink">Zip Code <span className="text-red-500">*</span></label>
                <input
                  id="zip"
                  name="zip"
                  type="text"
                  required
                  className="mt-1 w-full rounded-xl border border-mist bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-pine focus:ring-1 focus:ring-pine"
                  placeholder="52801"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-ink">Email <span className="text-red-500">*</span></label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-xl border border-mist bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-pine focus:ring-1 focus:ring-pine"
                placeholder="john.anderson@email.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-ink">Phone Number <span className="text-red-500">*</span></label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className="mt-1 w-full rounded-xl border border-mist bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-pine focus:ring-1 focus:ring-pine"
                placeholder="563-555-0147"
              />
            </div>
          </div>
        </section>

        <section className="rounded-3xl border-2 border-green-500 bg-gray-900 p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-white">DIY Lawn Care Products</h2>
          <p className="mt-1 text-sm text-white/60">Select individual steps or grab the full season package.</p>

          <div className="mt-8 relative rounded-2xl border-2 border-yellow-400 bg-gradient-to-br from-green-800 to-green-900 p-5 sm:p-6">
            <span className="absolute -top-3 right-4 rounded-full bg-yellow-400 px-4 py-1 text-xs font-bold uppercase tracking-wide text-gray-900">
              ★ Best Value
            </span>
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-lg font-bold text-white sm:text-xl">Full Season Program</p>
                <p className="text-sm text-white/70">All 3 seasonal fertilizers + Broadleaf Spray</p>
                <p className="mt-1 text-sm text-white/50">Treats up to 12,000 sq ft · Delivered to your door</p>
                <p className="mt-2 text-3xl font-bold text-yellow-400 sm:text-4xl">${diyItems.find(i => i.featured)!.price}</p>
              </div>
              <input
                type="number"
                min="0"
                value={diyQuantities["Full Season Program (all 3 + spray)"] || ""}
                onChange={(e) => updateQty("Full Season Program (all 3 + spray)", e.target.value)}
                className="w-20 rounded-lg border border-yellow-400/30 bg-white/10 px-3 py-3 text-center text-lg font-semibold text-white outline-none transition focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                placeholder="0"
              />
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-white/40">Or order individually</p>
            {diyItems.filter((item) => !item.featured).map((item) => (
              <div key={item.name} className="flex items-center justify-between gap-4 rounded-xl border border-white/10 px-4 py-3 transition hover:border-green-500/50">
                <div className="min-w-0">
                  <p className="text-sm font-medium text-white">{item.name}</p>
                  <p className="text-xs text-yellow-400">${item.price}</p>
                </div>
                <input
                  type="number"
                  min="0"
                  value={diyQuantities[item.name] || ""}
                  onChange={(e) => updateQty(item.name, e.target.value)}
                  className="w-20 rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-center text-sm text-white outline-none transition focus:border-green-400 focus:ring-1 focus:ring-green-400"
                  placeholder="0"
                />
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-white/40">Professional Application Add-Ons</p>

            <button
              type="button"
              onClick={() => { setApplyFull(!applyFull); if (!applyFull) setSingleAppCount(0); }}
              className={`w-full rounded-2xl border-2 p-5 text-left transition ${
                applyFull
                  ? "border-yellow-400 bg-gradient-to-br from-yellow-400/10 to-yellow-400/5"
                  : "border-white/10 hover:border-white/30"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-lg font-bold text-white">Apply Full Program For Me</p>
                    <span className="rounded-full bg-green-500 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                      Add-On
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-white/70">
                    We'll professionally apply all seasonal products for you — no work on your end.
                  </p>
                  <p className="mt-1 text-2xl font-bold text-yellow-400">$150 <span className="text-sm font-normal text-white/50">up to 12,000 sq ft per application</span></p>
                </div>
                <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border-2 transition ${
                  applyFull ? "border-yellow-400 bg-yellow-400" : "border-white/30"
                }`}>
                  {applyFull && (
                    <svg className="h-4 w-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </div>
            </button>

            <div className={`rounded-2xl border-2 p-5 transition ${
              singleAppCount > 0 && !applyFull
                ? "border-yellow-400 bg-gradient-to-br from-yellow-400/10 to-yellow-400/5"
                : applyFull
                  ? "border-white/5 opacity-40"
                  : "border-white/10"
            }`}>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-lg font-bold text-white">Apply Single Application For Me</p>
                    <span className="rounded-full bg-green-500 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                      Add-On
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-white/70">
                    Just need one season applied? Select how many individual applications you'd like us to handle.
                  </p>
                  <p className="mt-1 text-2xl font-bold text-yellow-400">$50<span className="text-sm font-normal text-white/50"> /application · up to 12,000 sq ft per application</span></p>
                </div>
                <input
                  type="number"
                  min="0"
                  max="4"
                  disabled={applyFull}
                  value={singleAppCount || ""}
                  onChange={(e) => setSingleAppCount(parseInt(e.target.value) || 0)}
                  className="w-20 rounded-lg border border-white/20 bg-white/10 px-3 py-3 text-center text-lg font-semibold text-white outline-none transition focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 disabled:opacity-30"
                  placeholder="0"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-mist p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-ink">Delivery Instructions</h2>
          <textarea
            name="delivery"
            rows={4}
            className="mt-4 w-full rounded-xl border border-mist bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-pine focus:ring-1 focus:ring-pine"
            placeholder="Any special delivery instructions, preferred dates, gate codes, etc."
          />
        </section>

        {orderTotal > 0 && (
          <section className="rounded-3xl border-2 border-pine bg-pine/5 p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-ink">Order Summary</h2>
            <div className="mt-4 space-y-2">
              {diyItems.map((item) => {
                const qty = diyQuantities[item.name] || 0;
                if (qty === 0) return null;
                return (
                  <div key={item.name} className="flex justify-between text-sm">
                    <span className="text-slate">{item.name} × {qty}</span>
                    <span className="font-medium text-ink">${item.price * qty}</span>
                  </div>
                );
              })}
              {applyFull && (
                <div className="flex justify-between text-sm">
                  <span className="text-slate">Apply Full Program For Me</span>
                  <span className="font-medium text-ink">${FULL_APPLICATION_FEE}</span>
                </div>
              )}
              {!applyFull && singleAppCount > 0 && (
                <div className="flex justify-between text-sm">
                  <span className="text-slate">Apply Single Application × {singleAppCount}</span>
                  <span className="font-medium text-ink">${SINGLE_APPLICATION_FEE * singleAppCount}</span>
                </div>
              )}
              <div className="mt-3 border-t border-mist pt-3">
                <div className="flex justify-between">
                  <span className="text-base font-semibold text-ink">Estimated Total</span>
                  <span className="text-2xl font-bold text-pine">${orderTotal}</span>
                </div>
              </div>
            </div>
          </section>
        )}

        <div className="text-center">
          <button
            type="submit"
            disabled={submitting}
            className="rounded-full bg-pine px-10 py-4 text-sm font-semibold text-white transition hover:bg-pine/90 disabled:opacity-50"
          >
            {submitting ? "Submitting..." : "Submit Order Request"}
          </button>
          <p className="mt-3 text-xs text-slate">
            We'll confirm availability and pricing via email or phone.
          </p>
        </div>
      </form>
    </div>
  );
}

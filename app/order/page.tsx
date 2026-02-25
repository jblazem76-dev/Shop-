"use client";

import { useState } from "react";

const productItems = [
  { name: "Phosphite Blue", category: "Foliar Treatment" },
  { name: "C-Color-N 20-2-5", category: "Color Enhancer" },
  { name: "C-Starter 3-18-18", category: "Growth & Rooting" },
  { name: "C-Strength-Micros", category: "Micronutrients" },
  { name: "C-Roots-Aminos 6-2-3", category: "Root Development" },
  { name: "C-Energy-Calcium", category: "Plant Health" },
  { name: "Humic", category: "Soil Health" },
  { name: "C-Soils 1-0-2", category: "Soil Conditioning" },
  { name: "Push-Hold+", category: "Wetting Agent" },
  { name: "Green Glo Max", category: "Color Enhancer" },
  { name: "EfficienSi", category: "Foliar Treatment" },
  { name: "Every Tank", category: "Tank Additive" }
];

const diyItems = [
  { name: "Spring 28-0-8 (50 lb bag)", price: "$89" },
  { name: "Summer 28-3-10 (50 lb bag)", price: "$49" },
  { name: "Fall 11-2-9 Organic (50 lb bag)", price: "$79" },
  { name: "Weed Control 3-Way Herbicide (1 gal)", price: "$79" },
  { name: "Full Season Program (all 3 + spray)", price: "$296" }
];

export default function OrderPage() {
  const [submitted, setSubmitted] = useState(false);
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [diyQuantities, setDiyQuantities] = useState<Record<string, number>>({});

  function updateQty(name: string, value: string, isDiy = false) {
    const num = parseInt(value) || 0;
    if (isDiy) {
      setDiyQuantities((prev) => ({ ...prev, [name]: num }));
    } else {
      setQuantities((prev) => ({ ...prev, [name]: num }));
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const orderLines: string[] = [];
    productItems.forEach((p) => {
      const qty = quantities[p.name] || 0;
      if (qty > 0) orderLines.push(`${p.name}: ${qty}`);
    });
    diyItems.forEach((p) => {
      const qty = diyQuantities[p.name] || 0;
      if (qty > 0) orderLines.push(`${p.name}: ${qty}`);
    });

    const subject = encodeURIComponent("CTA Order Request");
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nAddress: ${data.get("address")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone")}\n\nProducts:\n${orderLines.join("\n")}\n\nDelivery Instructions:\n${data.get("delivery")}`
    );

    window.location.href = `mailto:ctagronomy@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center space-y-6 text-center">
        <div className="rounded-full bg-green-100 p-4">
          <svg className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-3xl font-semibold text-ink">Order Request Sent</h2>
        <p className="max-w-md text-slate">
          Your email client should have opened with your order details. If it didn't,
          please email ctagronomy@gmail.com directly or call 563-210-1616.
        </p>
        <button
          onClick={() => setSubmitted(false)}
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

      <form onSubmit={handleSubmit} className="space-y-10">
        <section className="rounded-3xl border border-mist p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-ink">Contact Information</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="name" className="block text-sm font-medium text-ink">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 w-full rounded-xl border border-mist bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-pine focus:ring-1 focus:ring-pine"
                placeholder="Brent Smith"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="address" className="block text-sm font-medium text-ink">Address</label>
              <input
                id="address"
                name="address"
                type="text"
                required
                className="mt-1 w-full rounded-xl border border-mist bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-pine focus:ring-1 focus:ring-pine"
                placeholder="215 E 2nd Street, Dewitt, IA 52742"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-ink">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-xl border border-mist bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-pine focus:ring-1 focus:ring-pine"
                placeholder="email@example.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-ink">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className="mt-1 w-full rounded-xl border border-mist bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-pine focus:ring-1 focus:ring-pine"
                placeholder="563-210-1616"
              />
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-mist p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-ink">Professional Products</h2>
          <p className="mt-1 text-sm text-slate">Set a quantity for any products you'd like to order.</p>
          <div className="mt-6 space-y-4">
            {productItems.map((item) => (
              <div key={item.name} className="flex items-center justify-between gap-4 rounded-xl border border-mist px-4 py-3 transition hover:border-pine/30">
                <div className="min-w-0">
                  <p className="text-sm font-medium text-ink">{item.name}</p>
                  <p className="text-xs text-slate">{item.category}</p>
                </div>
                <input
                  type="number"
                  min="0"
                  value={quantities[item.name] || ""}
                  onChange={(e) => updateQty(item.name, e.target.value)}
                  className="w-20 rounded-lg border border-mist bg-white px-3 py-2 text-center text-sm text-ink outline-none transition focus:border-pine focus:ring-1 focus:ring-pine"
                  placeholder="0"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border-2 border-green-500 bg-gray-900 p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-white">DIY Lawn Care Products</h2>
          <p className="mt-1 text-sm text-white/60">Homeowner seasonal program products.</p>
          <div className="mt-6 space-y-4">
            {diyItems.map((item) => (
              <div key={item.name} className="flex items-center justify-between gap-4 rounded-xl border border-white/10 px-4 py-3 transition hover:border-green-500/50">
                <div className="min-w-0">
                  <p className="text-sm font-medium text-white">{item.name}</p>
                  <p className="text-xs text-yellow-400">{item.price}</p>
                </div>
                <input
                  type="number"
                  min="0"
                  value={diyQuantities[item.name] || ""}
                  onChange={(e) => updateQty(item.name, e.target.value, true)}
                  className="w-20 rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-center text-sm text-white outline-none transition focus:border-green-400 focus:ring-1 focus:ring-green-400"
                  placeholder="0"
                />
              </div>
            ))}
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

        <div className="text-center">
          <button
            type="submit"
            className="rounded-full bg-pine px-10 py-4 text-sm font-semibold text-white transition hover:bg-pine/90"
          >
            Submit Order Request
          </button>
          <p className="mt-3 text-xs text-slate">
            We'll confirm availability and pricing via email or phone.
          </p>
        </div>
      </form>
    </div>
  );
}

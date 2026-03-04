"use client";

import { useState } from "react";

type OrderItem = {
  name: string;
  price: string;
  qty: number;
};

type Order = {
  id: number;
  name: string;
  address: string;
  email: string;
  phone: string;
  items: OrderItem[];
  delivery_notes: string;
  created_at: string;
};

export default function AdminPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [key, setKey] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState("");

  async function fetchOrders() {
    setError("");
    try {
      const res = await fetch("/api/orders", {
        headers: { Authorization: `Bearer ${key}` }
      });
      if (!res.ok) {
        setError("Invalid admin key.");
        return;
      }
      const data = await res.json();
      setOrders(data.orders);
      setLoaded(true);
    } catch {
      setError("Failed to load orders.");
    }
  }

  if (!loaded) {
    return (
      <div className="mx-auto max-w-md space-y-6 py-20 text-center">
        <h1 className="text-2xl font-semibold text-ink">Admin — View Orders</h1>
        <p className="text-sm text-slate">Enter the admin key to view order submissions.</p>
        <input
          type="password"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          placeholder="Admin key"
          className="w-full rounded-xl border border-mist px-4 py-3 text-sm outline-none focus:border-pine focus:ring-1 focus:ring-pine"
        />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button
          onClick={fetchOrders}
          className="rounded-full bg-pine px-8 py-3 text-sm font-semibold text-white transition hover:bg-pine/90"
        >
          View Orders
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-ink">Order Submissions ({orders.length})</h1>
        <button
          onClick={() => { setLoaded(false); setOrders([]); }}
          className="rounded-full border border-mist px-4 py-2 text-sm text-slate transition hover:bg-gray-50"
        >
          Lock
        </button>
      </div>

      {orders.length === 0 ? (
        <p className="py-20 text-center text-slate">No orders yet.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="rounded-2xl border border-mist p-5 sm:p-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-lg font-semibold text-ink">{order.name}</p>
                  <p className="text-sm text-slate">{order.email} · {order.phone}</p>
                  <p className="text-sm text-slate">{order.address}</p>
                </div>
                <p className="text-xs text-slate">
                  {new Date(order.created_at).toLocaleString()}
                </p>
              </div>
              {order.items && order.items.length > 0 && (
                <div className="mt-4 space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate">Items</p>
                  {order.items.map((item, i) => (
                    <p key={i} className="text-sm text-ink">
                      {item.name} × {item.qty} — {item.price}
                    </p>
                  ))}
                </div>
              )}
              {order.delivery_notes && (
                <div className="mt-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate">Delivery Notes</p>
                  <p className="text-sm text-ink">{order.delivery_notes}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

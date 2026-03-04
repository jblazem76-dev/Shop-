import { NextRequest, NextResponse } from "next/server";
import { Pool } from "pg";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, address, email, phone, items, delivery } = body;

    if (!name || !address || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const safeItems = Array.isArray(items) ? items.slice(0, 20) : [];
    const safeDelivery = typeof delivery === "string" ? delivery.slice(0, 2000) : "";

    const result = await pool.query(
      `INSERT INTO orders (name, address, email, phone, items, delivery_notes)
       VALUES ($1, $2, $3, $4, $5::jsonb, $6)
       RETURNING id, created_at`,
      [name, address, email, phone, JSON.stringify(safeItems), safeDelivery]
    );

    return NextResponse.json({ success: true, orderId: result.rows[0].id });
  } catch (err) {
    console.error("Order submission error:", err);
    return NextResponse.json({ error: "Failed to submit order" }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  if (!authHeader || authHeader !== `Bearer ${process.env.ADMIN_KEY}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const result = await pool.query(
      "SELECT * FROM orders ORDER BY created_at DESC"
    );
    const orders = result.rows.map((row) => ({
      ...row,
      items: typeof row.items === "string" ? JSON.parse(row.items) : row.items
    }));
    return NextResponse.json({ orders });
  } catch (err) {
    console.error("Fetch orders error:", err);
    return NextResponse.json({ error: "Failed to fetch orders" }, { status: 500 });
  }
}

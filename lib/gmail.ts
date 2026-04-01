import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

type OrderItem = {
  name: string;
  price: string;
  qty: number;
};

type OrderDetails = {
  name: string;
  address: string;
  email: string;
  phone: string;
  items: OrderItem[];
  delivery: string;
  orderId: number;
};

export async function sendOrderNotification(order: OrderDetails) {
  const itemLines = order.items
    .map((item) => `  • ${item.name} × ${item.qty} — ${item.price}`)
    .join("\n");

  const body = [
    `New Order Request (#${order.orderId})`,
    `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
    ``,
    `Customer: ${order.name}`,
    `Email: ${order.email}`,
    `Phone: ${order.phone}`,
    `Address: ${order.address}`,
    ``,
    `Items:`,
    itemLines || "  (none selected)",
    ``,
    order.delivery ? `Delivery Notes:\n  ${order.delivery}` : "",
    ``,
    `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
    `This order has been saved to the CTA database.`,
    `View all orders at your site's /admin page.`,
  ].join("\n");

  await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to: "westinmediagroup@gmail.com",
    subject: `CTA Order Request #${order.orderId} — ${order.name}`,
    text: body,
  });
}

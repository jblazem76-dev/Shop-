import { google } from 'googleapis';

function getGmailClient() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error('Gmail credentials not configured. Set GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, and GOOGLE_REFRESH_TOKEN.');
  }

  const oauth2Client = new google.auth.OAuth2(clientId, clientSecret);
  oauth2Client.setCredentials({ refresh_token: refreshToken });

  return google.gmail({ version: 'v1', auth: oauth2Client });
}

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
  const gmail = getGmailClient();

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
    `View all orders at your site's /admin page.`
  ].join("\n");

  const to = "westinmediagroup@gmail.com";
  const subject = `CTA Order Request #${order.orderId} — ${order.name}`;

  const rawMessage = [
    `To: ${to}`,
    `Subject: ${subject}`,
    `Content-Type: text/plain; charset="UTF-8"`,
    ``,
    body
  ].join("\n");

  const encodedMessage = Buffer.from(rawMessage)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

  await gmail.users.messages.send({
    userId: "me",
    requestBody: {
      raw: encodedMessage
    }
  });
}

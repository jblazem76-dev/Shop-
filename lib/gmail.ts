import { google } from 'googleapis';

let connectionSettings: any;

async function getAccessToken() {
  if (connectionSettings && connectionSettings.settings.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    return connectionSettings.settings.access_token;
  }

  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY
    ? 'repl ' + process.env.REPL_IDENTITY
    : process.env.WEB_REPL_RENEWAL
    ? 'depl ' + process.env.WEB_REPL_RENEWAL
    : null;

  if (!xReplitToken) {
    throw new Error('X-Replit-Token not found for repl/depl');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=google-mail',
    {
      headers: {
        'Accept': 'application/json',
        'X-Replit-Token': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;

  if (!connectionSettings || !accessToken) {
    throw new Error('Gmail not connected');
  }
  return accessToken;
}

async function getUncachableGmailClient() {
  const accessToken = await getAccessToken();

  const oauth2Client = new google.auth.OAuth2();
  oauth2Client.setCredentials({
    access_token: accessToken
  });

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
  const gmail = await getUncachableGmailClient();

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

import { setDefaultResultOrder } from "dns";

export async function register() {
  // Azure Container Apps don't support IPv6 outbound — force IPv4 for all DNS lookups
  setDefaultResultOrder("ipv4first");
}

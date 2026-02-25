import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order Request Form",
  description: "Order CTA turf care products and DIY lawn care programs. Full Season Program, individual seasonal applications, and weed control. Free delivery within 30 miles of DeWitt, Iowa."
};

export default function OrderLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

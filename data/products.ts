export type Product = {
  slug: string;
  name: string;
  category: string;
  primaryBenefit: string;
  description: string;
  howItWorks: string[];
  applicationSummary: string;
  idealFor: string[];
};

/**
 * CTA product catalog data placeholder.
 * Populate this list with product catalog entries once the source documents are available.
 */
export const products: Product[] = [];

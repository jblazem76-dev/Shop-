export type Product = {
  slug: string;
  name: string;
  category: string;
  primaryBenefit: string;
  description: string;
  howItWorks: string[];
  applicationSummary: string;
  idealFor: string[];
  featured?: boolean;
};

export const products: Product[] = [
  {
    slug: "phosphate-blue",
    name: "Phosphate Blue",
    category: "Foliar Nutrition",
    primaryBenefit: "Enhances root development and energy transfer for stronger, more resilient turf.",
    description: "Phosphate Blue is CTA's flagship phosphorus solution, engineered to support rapid root establishment and sustained energy production. Its unique blue-tinted formulation provides visual confirmation of coverage while delivering highly available phosphorus directly to the plant.",
    howItWorks: [
      "Delivers phosphorus in a plant-available form that bypasses soil tie-up.",
      "Supports ATP production for cellular energy transfer.",
      "Promotes robust root growth during establishment and recovery phases.",
      "Blue tracer dye ensures uniform application and reduces overlap."
    ],
    applicationSummary: "Apply 2-4 oz per 1,000 sq ft every 14-21 days during active growth. Compatible with most tank mixes.",
    idealFor: ["Golf courses", "Sports turf", "Sod farms", "New installations"],
    featured: true
  },
  {
    slug: "carbon-boost",
    name: "Carbon Boost",
    category: "Soil Conditioning",
    primaryBenefit: "Increases soil carbon levels to improve microbial activity and nutrient cycling.",
    description: "Carbon Boost delivers readily available carbon sources that feed beneficial soil microbes. A healthy microbial population breaks down organic matter faster and makes nutrients more accessible to plant roots.",
    howItWorks: [
      "Provides simple and complex carbon chains for diverse microbial populations.",
      "Enhances cation exchange capacity over time.",
      "Improves soil structure and water infiltration.",
      "Reduces thatch accumulation through accelerated decomposition."
    ],
    applicationSummary: "Apply 4-6 oz per 1,000 sq ft monthly. Best results when soil temperatures exceed 55°F.",
    idealFor: ["High-traffic areas", "Compacted soils", "Renovation projects"]
  },
  {
    slug: "foliar-iron-plus",
    name: "Foliar Iron Plus",
    category: "Foliar Nutrition",
    primaryBenefit: "Delivers deep green color without excessive growth surge.",
    description: "Foliar Iron Plus combines chelated iron with micronutrients for rapid color response. The balanced formula promotes chlorophyll production without pushing unwanted vertical growth.",
    howItWorks: [
      "Chelated iron penetrates leaf tissue quickly for fast visual response.",
      "Manganese and zinc support enzyme function and stress tolerance.",
      "Low nitrogen content prevents flush growth.",
      "Stays in solution for consistent spray performance."
    ],
    applicationSummary: "Apply 2-3 oz per 1,000 sq ft every 7-14 days. Avoid application during heat stress.",
    idealFor: ["Golf greens", "Tees", "Fairways", "High-visibility areas"]
  },
  {
    slug: "moisture-manager",
    name: "Moisture Manager",
    category: "Soil Moisture",
    primaryBenefit: "Evens out soil moisture distribution to reduce wet and dry spots.",
    description: "Moisture Manager is a soil surfactant that improves water movement through the root zone. It helps sandy soils retain moisture longer and clay soils drain more efficiently.",
    howItWorks: [
      "Reduces surface tension so water penetrates hydrophobic layers.",
      "Redistributes moisture laterally for more uniform root zone conditions.",
      "Lasts 4-6 weeks per application depending on irrigation frequency.",
      "Non-phytotoxic at labeled rates."
    ],
    applicationSummary: "Apply 4-8 oz per 1,000 sq ft. Water in within 24 hours of application.",
    idealFor: ["Localized dry spots", "Sandy soils", "High-cut roughs", "Slopes"]
  },
  {
    slug: "root-zone-enhancer",
    name: "Root Zone Enhancer",
    category: "Soil Conditioning",
    primaryBenefit: "Stimulates deeper root growth for improved drought tolerance.",
    description: "Root Zone Enhancer combines humic acids with kelp extracts to create an environment where roots thrive. Deeper roots access water and nutrients that shallow-rooted turf cannot reach.",
    howItWorks: [
      "Humic acids chelate nutrients and improve their uptake efficiency.",
      "Kelp-derived cytokinins promote cell division in root tips.",
      "Improves soil aggregation around the root zone.",
      "Enhances stress recovery after aerification or heavy traffic."
    ],
    applicationSummary: "Apply 3-4 oz per 1,000 sq ft every 3-4 weeks during the growing season.",
    idealFor: ["Drought-prone sites", "Shallow root zones", "Post-aerification recovery"]
  },
  {
    slug: "stress-guard",
    name: "Stress Guard",
    category: "Plant Health",
    primaryBenefit: "Protects turf from heat, drought, and traffic stress.",
    description: "Stress Guard is a preventive treatment that primes the plant's natural defense systems. Applied before stress events, it helps turf maintain function when conditions turn challenging.",
    howItWorks: [
      "Triggers systemic acquired resistance pathways.",
      "Stabilizes cell membranes during temperature extremes.",
      "Maintains photosynthetic efficiency under moisture deficit.",
      "Reduces recovery time after stress events."
    ],
    applicationSummary: "Apply 2-4 oz per 1,000 sq ft 7-10 days before anticipated stress. Repeat every 14-21 days during stress periods.",
    idealFor: ["Summer stress management", "Tournament prep", "High-traffic events"]
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

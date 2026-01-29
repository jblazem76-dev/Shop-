export interface Product {
  slug: string;
  name: string;
  formula?: string;
  category: string;
  tagline: string;
  primaryBenefit: string;
  description: string;
  keyFeatures: string[];
  principleAgents?: string[];
  applicationRates?: string[];
  idealFor?: string[];
  featured?: boolean;
  choBadge?: boolean;
}

export const products: Product[] = [
  {
    slug: "phosphite-blue",
    name: "Phosphite Blue",
    category: "Foliar Treatment",
    tagline: "Boost Stress Tolerance",
    primaryBenefit: "Helps plants withstand heat, drought, and other stressors when applied during vulnerable periods",
    description: "Phosphite Blue is a highly concentrated, phosphite-based nutrient solution formulated for foliar use in turfgrass. Its unique blend of mono and di-potassium salts of phosphorous acid is rapidly absorbed through leaves or roots, swiftly correcting nutrient deficiencies while strengthening root systems and foliage. With 26% soluble potash (K2O), Phosphite Blue not only provides the essential potassium needed for robust growth and vigor but also helps plants withstand stress conditions—delivering lush, vibrant turf all season long.",
    keyFeatures: [
      "Withstand heat, drought, and other stressors when applied during vulnerable periods",
      "Foliar or root uptake ensures faster results and optimal nutrient delivery",
      "Aids in cellular division / strength with highly soluble potassium"
    ],
    principleAgents: [
      "Soluble Potash (K2O): 26.0%",
      "Derived from: Potassium phosphite"
    ],
    applicationRates: [
      "Cool Season: Apply 1.5 to 6 ounces per 1000 square feet and repeat every 7-14 days during times of stress",
      "Warm Season: Apply 3 to 8 ounces per 1000 square feet and repeat every 7-14 days during times of stress",
      "Fairways, Sports Turf, Sod & Lawns: Apply 1.5 to 6 ounces per 1000 sqft in a minimum of 50 gallons of water per acre"
    ],
    idealFor: ["Golf courses", "Sports turf", "Sod farms", "Lawns"]
  },
  {
    slug: "c-color-n",
    name: "C-Color-N",
    formula: "20-2-5",
    category: "Color Enhancer",
    tagline: "For Resilient & Vibrant Color",
    primaryBenefit: "Micronutrient enhanced nitrogen formulation for superior color and quick recovery from wear",
    description: "C-Color-N is a micronutrient-enhanced nitrogen formulation designed to deliver superior color and resilience. This advanced blend helps turf recover quickly from traffic, mechanical, and player wear, ensuring a lush and vibrant appearance. With 60% slow-release nitrogen, our product avoids growth surges, promoting consistent and healthy growth for optimal turf performance.",
    keyFeatures: [
      "Micronutrient enhanced nitrogen formulation for superior color",
      "Recover from traffic, mechanical, and player wear",
      "60% slow release to avoid growth surges"
    ],
    principleAgents: [
      "Total Nitrogen (N): 20.0%",
      "Available Phosphate (P2O5): 2.0%",
      "Soluble Potash (K2O): 5.0%",
      "Boron (B): 0.02%",
      "Iron (Fe): 0.20%",
      "Molybdenum (Mo): 0.0005%"
    ],
    applicationRates: [
      "Apply 1.5 – 9.0 ounces per 1000 square feet in sufficient water for coverage"
    ],
    idealFor: ["Golf courses", "Recreational surfaces", "College & high school fields", "Commercial landscaping"]
  },
  {
    slug: "c-starter",
    name: "C-Starter",
    formula: "3-18-18",
    category: "Growth & Rooting",
    tagline: "Highly Soluble P&K",
    primaryBenefit: "Initiate rooting with highly soluble phosphate, particularly beneficial under cool soil temperatures",
    description: "C-Starter 3-18-18 is a high availability foliar nutrient formulation of N-P-K with a low salt index. Designed to supplement standard fertility programs and rapidly correct or prevent nutritional deficiencies. C-Starter 3-18-18 increases plant growth, health, and root production. The phosphate in C-Starter 3-18-18 is all in the plant-available ortho phosphate form allowing for rapid uptake and utilization. This distinctive formulation enhances nutrient availability and allows for enhanced tank mix compatibility in hard water situations.",
    keyFeatures: [
      "Initiate rooting with highly soluble phosphate",
      "Particularly beneficial under cool soil temperatures",
      "Aids in cellular division / strength with highly soluble potassium"
    ],
    principleAgents: [
      "Total Nitrogen (N): 3.0%",
      "Available Phosphate (P2O5): 18.0%",
      "Soluble Potash (K2O): 18.0%"
    ],
    applicationRates: [
      "Apply 1.5 – 9.0 ounces per 1000 square feet in sufficient water for coverage"
    ],
    idealFor: ["Turfgrass", "Sod farms", "New installations"]
  },
  {
    slug: "c-strength-micros",
    name: "C-Strength-Micros",
    category: "Micronutrients",
    tagline: "Sugar Based Micros",
    primaryBenefit: "Excellent chlorophyll production to maximize photosynthesis and maintain dark green color without excessive top growth",
    description: "C-Strength-Micros is a liquid formulation of glucoheptonated (sugar-based) micronutrients commonly found to be low or deficient in turfgrass. C-Strength-Micros is formulated to deliver maximum nutrient absorption to prevent and cure micronutrient deficiencies and maximize color, photosynthetic activity and plant strength.",
    keyFeatures: [
      "Sugar based (glucoheptonate) micros for rapid foliar absorption",
      "Excellent chlorophyll production to maximize photosynthesis (rooting)",
      "Maintain dark green color without excessive top growth"
    ],
    principleAgents: [
      "Magnesium (Mg): 1.0%",
      "Boron (B): 0.02%",
      "Iron (Fe): 3.0%",
      "Manganese (Mn): 4.0%",
      "Zinc (Zn): 0.02%"
    ],
    applicationRates: [
      "Maintenance: Apply 3 to 6 ounces per 1000 square feet as needed",
      "For deficiencies: Apply 8 to 12 ounces per 1000 sq feet",
      "Applications can be made every 7 to 14 days as needed for desired results"
    ],
    idealFor: ["Golf courses", "Sports turf", "Premium lawns"],
    choBadge: true
  },
  {
    slug: "c-roots-aminos",
    name: "C-Roots-Aminos",
    formula: "6-2-3",
    category: "Root Development",
    tagline: "Drive Roots",
    primaryBenefit: "Enhance photosynthesis and glucose production to build deeper roots and mitigate stress",
    description: "C-Roots-Aminos is a 6-2-3 supplemental fertilizer enhanced with secondary metabolites and a proprietary bio stimulant package. C-Roots-Aminos 6-2-3 is designed to enhance stress resistance, and to increase and maintain roots in turfgrass.",
    keyFeatures: [
      "Enhance Photosynthesis and glucose production (Roots)",
      "Build Deeper Roots in Spring and Fall",
      "Maintain Roots in Summer",
      "Mitigate all forms of Stress"
    ],
    principleAgents: [
      "Total Nitrogen (N): 6.0%",
      "Available Phosphate (P2O): 2.0%",
      "Soluble Potash (K2O): 3.0%"
    ],
    applicationRates: [
      "Initial application: Apply as a foliar spray at 6.0-9.0 ounces per 1000 square feet",
      "Maintenance applications: Apply as a foliar spray at 3.0-6.0 ounces per 1000 square feet every 10-14 days",
      "Soil applications: Apply as a soil spray at 9.0-12.0 ounces per 1000 square feet every 15-30 days"
    ],
    idealFor: ["Golf courses", "Sports turf", "Sod farms"],
    choBadge: true
  },
  {
    slug: "c-energy-calcium",
    name: "C-Energy-Calcium",
    category: "Plant Health",
    tagline: "Build Cell Walls and Lower Heat Stress",
    primaryBenefit: "Lower respiration stress, build thick cell walls, and increase wear tolerance",
    description: "C-Energy-Calcium is a plant available liquid foliar nutritional formulation designed to correct or prevent deficiencies of calcium in turfgrass and ornamentals. C-Energy-Calcium is dual complexed and engineered for maximum tank mix compatibility and plant absorption. C-Energy-Calcium is especially beneficial during periods of rapid growth and heat-stress.",
    keyFeatures: [
      "Lower Respiration Stress",
      "Initiate Rooting in Spring and Fall",
      "Maintain Roots in Summer",
      "Build Thick Cell Walls",
      "Increase Wear Tolerance"
    ],
    principleAgents: [
      "Calcium (Ca): 10.0%",
      "Derived from: Calcium glucoheptonate"
    ],
    applicationRates: [
      "Greens and Tees: Apply 3 to 8 ounces per 1000 square feet, in enough water for thorough coverage",
      "Fairways: Apply 1.5-8.0 ounces per 1000 square feet, in sufficient water for coverage"
    ],
    idealFor: ["Golf courses", "Sports turf", "Ornamentals"],
    choBadge: true
  },
  {
    slug: "humic",
    name: "Humic",
    category: "Soil Health",
    tagline: "Highly Concentrated Carbon",
    primaryBenefit: "Feed microbes with high carbon humic and fulvic acids to improve soil nutrient availability",
    description: "Humic is useful on all soil types, giving added nutrient holding capacity in sandy soils, and opening pore space in heavy / clay soils, due to the strong negative electrical charge associated with Humic acids. The high carbon content in Humic is also extremely beneficial in feeding microbes, which further aids in nutrient cycling and oxygen production for increasing photosynthetic activity.",
    keyFeatures: [
      "Feed Microbes with High Carbon Humic and Fulvic Acids",
      "Increase Beneficial Microbial Activity",
      "Improve Soil Nutrient Availability and Cycling",
      "Improve Oxygen Evolution to Improve Photosynthesis",
      "Increase Nutrient Holding Capacity in Sandy Soils",
      "Increase Pore Space in Native/Clay Soils"
    ],
    principleAgents: [
      "Humic Acid: 20.0%",
      "Derived from: Leonardite Ore"
    ],
    applicationRates: [
      "Foliar Application: Mix 0.74-2.2 ounces per 1000 square feet in spray solution",
      "Turfgrass: Apply 1.5 to 3.0 ounces per 1,000 square feet monthly. Water in for best results"
    ],
    idealFor: ["All soil types", "Sandy soils", "Clay soils", "Golf courses"],
    choBadge: true
  },
  {
    slug: "c-soils",
    name: "C-Soils",
    formula: "1-0-2",
    category: "Soil Conditioning",
    tagline: "Total Soil Conditioner",
    primaryBenefit: "Enhance microbial proliferation and build stronger roots with improved nutrient cycling",
    description: "C-Soils-1-0-2 is enhanced with Amino Acids. Bio-Synergy containing carbon, plant sugars, fulvic, Humic acid, and silica. This formula not only nourishes the turf but also improves soil health, ensuring a lush, durable, and visually appealing surface for optimal performance.",
    keyFeatures: [
      "Enhance Microbial Proliferation",
      "Increase Nutrient Cycling / Availability",
      "Increase Oxygen Evolution for Photosynthesis",
      "Build Stronger Roots"
    ],
    principleAgents: [
      "Nitrogen (N): 1.0%",
      "Soluble Potash (K): 2.0%",
      "Derived from: Plant Sugars, Soy Protein Hydrolysate, Fulvic acid, Humic acid"
    ],
    applicationRates: [
      "Apply 3.0-6.0 ounces per 1000 square feet with sufficient water for coverage every 14-28 days"
    ],
    idealFor: ["Warm season grasses", "Cool season grasses", "Sod farms"],
    choBadge: true,
    featured: true
  },
  {
    slug: "push-hold-plus",
    name: "Push-Hold+",
    category: "Wetting Agent",
    tagline: "Your Best Secret Agent",
    primaryBenefit: "Combination wetting agent to push holding surfactants deeper into the soil profile",
    description: "Push-Hold+ is a 1/3 Penetrant, 2/3 Retention wetting agent to manage soil moisture and reduce LDS. The multi-chemistry design helps mitigate hydrophobic soils, ensure uniform hydration characteristics, and facilitate rapid rewetting. Push-Hold+ is designed for superior soil moisture management.",
    keyFeatures: [
      "Combination Wetting Agent to 'Push' the 'Holding' Surfactants Deeper into the Soil Profile",
      "Feed Microbes Carbon with Humic Acid Addition",
      "Add Holding Capacity to Sandy Soils",
      "Open Pore Space in Clay/Native Soils",
      "Increase Nutrient Availability and Cycling",
      "Increase Oxygen Evolution for Improved Photosynthesis"
    ],
    applicationRates: [
      "Apply as directed for soil moisture management"
    ],
    idealFor: ["Golf courses", "Sports turf", "Hydrophobic soils"],
    choBadge: true
  },
  {
    slug: "green-glo-max",
    name: "Green Glo Max",
    category: "Color Enhancer",
    tagline: "Elevate Your Turf to the Next Level",
    primaryBenefit: "Boost chlorophyll production for a richer, more vibrant green with enhanced root health",
    description: "Designed to boost chlorophyll production, it delivers a richer, more vibrant green. Enhanced root health ensures stronger, more resilient turf, while improved resource utilization means your turf thrives with less water and nutrients—saving you money and supporting sustainability. Perfect for high-traffic areas like golf courses and sports fields, it guarantees superior durability and visual appeal.",
    keyFeatures: [
      "Boosted Chlorophyll Production",
      "Enhanced Root Health",
      "Improved Resource Utilization",
      "Superior Turf Performance"
    ],
    principleAgents: [
      "Total Nitrogen (N): 7.00%",
      "Sulfur (S): 12.00%",
      "Copper (Cu): 0.500%",
      "Iron (Fe): 9.00%",
      "Magnesium (Mg): 4.00%",
      "Manganese (Mn): 2.00%",
      "Zinc (Zn): 2.00%"
    ],
    applicationRates: [
      "General application rate is 2-5 pounds of product per acre applied as foliar spray",
      "Additional applications can be made during growing season as needed"
    ],
    idealFor: ["Golf courses", "Sports fields", "High-traffic areas"]
  },
  {
    slug: "efficiensi",
    name: "EfficienSi",
    category: "Foliar Treatment",
    tagline: "Elevate Your Turf to the Next Level",
    primaryBenefit: "Maximize nutrient absorption and boost plant health with proprietary uptake technology",
    description: "EfficienSi is a proprietary blend of uptake and mobility compounds designed to maximize nutrient absorption and boost plant health. Whether you're applying herbicides, fungicides, growth regulators, or nutrients, EfficienSi ensures more of what your plants need gets to where it matters most.",
    keyFeatures: [
      "Boosted Chlorophyll Production",
      "Enhanced Root Health",
      "Improved Resource Utilization",
      "Superior Turf Performance"
    ],
    principleAgents: [
      "Silica: 10%",
      "Enhanced with EfficienSi Technology",
      "Derived from: Silica, Protein hydrolysates, Vegetal Extracts"
    ],
    applicationRates: [
      "Apply 4-8 oz per acre in minimum of 20 gallons of water",
      "Greens & Tees: 7-14 day intervals",
      "Fairways: 14-28 days",
      "Residential Lawns: 4-8 weeks",
      "Sports Turf: 2-4 weeks"
    ],
    idealFor: ["Golf courses", "Fairways", "Sports turf", "Residential lawns"]
  },
  {
    slug: "every-tank",
    name: "Every Tank",
    category: "Tank Additive",
    tagline: "Spray Tank Acidifier",
    primaryBenefit: "Increase tank mix compatibility and improve efficacy while lowering application rates",
    description: "Every Tank is a spray tank acidifier which corrects alkaline hydrolysis of pesticides and fertilizers, neutralizes bicarbonates (hard water) in the spray tank solution. Every Tank makes all products in the spray tank more efficient, and often lower application rates of tank mix partners can be applied with greater results.",
    keyFeatures: [
      "Increase Tank Mix Compatibility",
      "Lower Application Rates",
      "Lower Costs",
      "Less Chemicals into the Environment",
      "Improved Efficacy"
    ],
    principleAgents: [
      "Acidifiers: 20%",
      "Emulsifiers: 0.5%",
      "Color indicator: 1.0%",
      "Inert Ingredients: 78.5%"
    ],
    applicationRates: [
      "Add Every Tank into the spray tank prior to adding pesticides or fertilizers",
      "Typical rate: 4-8 ounces per 100 gallons of water",
      "Decreases water pH from 8.5 to 5.0 depending on water source"
    ],
    idealFor: ["All spray applications", "Hard water areas", "Tank mixing"]
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category);
}

export type Program = {
  slug: string;
  name: string;
  problem: string;
  solution: string;
  whyBundled: string;
  timing: string;
};

export const programs: Program[] = [
  {
    slug: "spring-start-up",
    name: "Spring Start-Up Program",
    problem:
      "Early-season turf often wakes up unevenly, with slow green-up and weak roots after winter dormancy.",
    solution:
      "Focus on gentle nutrition, soil activation, and consistent moisture to re-start growth without forcing it.",
    whyBundled:
      "Spring success relies on coordinated inputs. Nutrition, soil conditioning, and moisture management are designed to move together so the plant can respond steadily.",
    timing: "Use as soils warm and growth resumes in early spring."
  },
  {
    slug: "summer-stress",
    name: "Summer Stress Program",
    problem:
      "Heat and traffic pressure can reduce photosynthesis, leading to thinning and reduced recovery.",
    solution:
      "Support leaf efficiency and moisture balance while protecting the root zone from compaction and heat stress.",
    whyBundled:
      "Stress management works best when foliar support and soil care are aligned. Bundling keeps inputs balanced and easier to schedule.",
    timing: "Use as temperatures climb and sustained stress is expected."
  },
  {
    slug: "aeration-recovery",
    name: "Aeration Recovery Program",
    problem:
      "After aeration, turf can look thin while it tries to repair roots and canopy.",
    solution:
      "Provide efficient nutrient uptake and soil conditioning to speed recovery without excess growth surge.",
    whyBundled:
      "The most reliable recovery happens when soil and leaf nutrition are timed together to rebuild energy and density.",
    timing: "Use immediately after aeration and during the recovery window."
  },
  {
    slug: "color-builder",
    name: "Color Builder Program",
    problem:
      "Turf can look pale or uneven during seasonal transitions or heavy play periods.",
    solution:
      "Encourage stable chlorophyll production and balanced growth for consistent color without pushing too hard.",
    whyBundled:
      "Color improves when nutrition and soil conditions are balanced. Bundled inputs help maintain a clean, consistent look.",
    timing: "Use when consistent color is the priority or before visibility-sensitive events."
  }
];

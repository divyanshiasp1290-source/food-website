import chocolate from "@/assets/product-chocolate.jpg";
import snacks from "@/assets/product-snacks.jpg";
import confectionery from "@/assets/product-confectionery.jpg";
import pet from "@/assets/product-pet.jpg";
import healthy from "@/assets/product-healthy.jpg";
import ingredients from "@/assets/product-ingredients.jpg";
import heroFactory from "@/assets/hero-factory.jpg";
import aboutFactory from "@/assets/about-factory.jpg";
import aboutFactoryAlt from "@/assets/about-factory (1).jpg";
import innovationLab from "@/assets/innovation-lab.jpg";
import sustainability from "@/assets/sustainability.jpg";

// New, product/brand-specific images (placeholders)
import milkChocolate from "@/assets/product-milk-chocolate.svg";
import darkChocolate from "@/assets/product-dark-chocolate.svg";
import hazelnutChocolate from "@/assets/product-hazelnut-chocolate.svg";
import caramelChocolate from "@/assets/product-caramel-chocolate.svg";
import almondChocolate from "@/assets/product-almond-chocolate.svg";

import proteinBars from "@/assets/product-protein-bars.svg";
import granolaBars from "@/assets/product-granola-bars.svg";
import mixedNuts from "@/assets/product-mixed-nuts.svg";
import trailMix from "@/assets/product-trail-mix.svg";

import fruitGummies from "@/assets/product-fruit-gummies.svg";
import mintCandies from "@/assets/product-mint-candies.svg";

import dogFood from "@/assets/product-dog-food.svg";
import catFood from "@/assets/product-cat-food.svg";

import oats from "@/assets/product-oats.svg";
import breakfastCereals from "@/assets/product-breakfast-cereals.svg";

// Brand images
import brandAurea from "@/assets/brand-aurea-chocolate.svg";
import brandCocoaDreams from "@/assets/brand-cocoa-dreams.svg";
import brandHazelnut from "@/assets/brand-hazelnut-harmony.svg";
import brandNatureBoost from "@/assets/brand-nature-boost.svg";
import brandGoldenGrain from "@/assets/brand-golden-grain.svg";

export const CATEGORY_IMAGES: Record<string, string> = {
  Chocolate: chocolate,
  Snacks: snacks,
  Confectionery: confectionery,
  "Pet Nutrition": pet,
  "Healthy Foods": healthy,
  Ingredients: ingredients,
};

export const PRODUCT_IMAGES: Record<string, string> = {
  "milk-chocolate": milkChocolate,
  "dark-chocolate": darkChocolate,
  "hazelnut-chocolate": hazelnutChocolate,
  "caramel-chocolate": caramelChocolate,
  "almond-chocolate": almondChocolate,

  "protein-bars": proteinBars,
  "granola-bars": granolaBars,
  "mixed-nuts": mixedNuts,
  "trail-mix": trailMix,

  "fruit-gummies": fruitGummies,
  "mint-candies": mintCandies,
  "hard-candies": mintCandies,
  "chewy-candies": fruitGummies,

  "dog-food": dogFood,
  "cat-food": catFood,
  "pet-treats": dogFood,

  "oats": oats,
  "breakfast-cereals": breakfastCereals,
  "energy-bites": granolaBars,
  "healthy-snacks": granolaBars,

  "pure-essence": ingredients,
};

export const PRODUCT_GALLERY_IMAGES: Record<string, string[]> = {
  "milk-chocolate": [milkChocolate, chocolate, confectionery, ingredients],
  "dark-chocolate": [darkChocolate, chocolate, confectionery, ingredients],
  "hazelnut-chocolate": [hazelnutChocolate, chocolate, confectionery, ingredients],
  "caramel-chocolate": [caramelChocolate, chocolate, confectionery, ingredients],
  "almond-chocolate": [almondChocolate, chocolate, confectionery, ingredients],

  "protein-bars": [proteinBars, snacks, healthy, ingredients],
  "granola-bars": [granolaBars, healthy, snacks, ingredients],
  "mixed-nuts": [mixedNuts, snacks, ingredients, healthy],
  "trail-mix": [trailMix, snacks, healthy, ingredients],

  "fruit-gummies": [fruitGummies, confectionery, ingredients, sustainability],
  "mint-candies": [mintCandies, confectionery, ingredients, sustainability],
  "hard-candies": [mintCandies, confectionery, ingredients, sustainability],
  "chewy-candies": [fruitGummies, confectionery, ingredients, sustainability],

  "dog-food": [dogFood, pet, ingredients, healthy],
  "cat-food": [catFood, pet, ingredients, healthy],
  "pet-treats": [dogFood, pet, ingredients, snacks],

  "oats": [oats, healthy, ingredients, snacks],
  "breakfast-cereals": [breakfastCereals, healthy, ingredients, snacks],
  "energy-bites": [granolaBars, healthy, ingredients, sustainability],
  "healthy-snacks": [granolaBars, healthy, snacks, ingredients],

  "pure-essence": [ingredients, sustainability, healthy, snacks],
};

export const EXTRA_IMAGES = [heroFactory, aboutFactory, aboutFactoryAlt, innovationLab, sustainability];

export const CATEGORIES = [
  "Chocolate",
  "Snacks",
  "Confectionery",
  "Pet Nutrition",
  "Healthy Foods",
  "Ingredients",
] as const;

export type Category = (typeof CATEGORIES)[number];

export interface Brand {
  slug: string;
  name: string;
  category: Category;
  description: string;
  details: string;
  tagline: string;
  features: string[];
  image?: string;
  mission?: string;
  values?: string[];
  founded?: string;
  heritage?: string;
}

export interface Product {
  slug: string;
  name: string;
  category: Category;
  description: string;
  brand?: string;
}

export const BRANDS: Brand[] = [
  // Chocolate Brands
  {
    slug: "aurea-chocolate",
    name: "Auréa Chocolate",
    category: "Chocolate",
    tagline: "Silky and Sublime",
    description: "Premium chocolate crafted from sustainably sourced cocoa.",
    image: brandAurea,
    details:
      "For over 75 years, Auréa has been the symbol of chocolate excellence. Each bar is crafted with hand-selected cocoa beans from our partner farms, creating a smooth, unforgettable experience. From velvety milk chocolate to intense dark varieties, Auréa brings moments of pure joy to families worldwide.",
    mission:
      "To deliver moments of pure chocolate indulgence while supporting sustainable farming practices and local communities.",
    values: ["Quality", "Sustainability", "Craftsmanship", "Fair Trade", "Innovation"],
    founded: "1949",
    heritage:
      "Established in Belgium, Auréa has been perfecting the art of chocolate making for three generations.",
    features: [
      "100% sustainably sourced cocoa",
      "No artificial flavors",
      "Fair trade certified",
      "Melts-in-your-mouth texture",
    ],
  },
  {
    slug: "cocoa-dreams",
    name: "Cocoa Dreams",
    category: "Chocolate",
    tagline: "Indulgence with Purpose",
    description: "Artisanal chocolate with premium fillings.",
    image: brandCocoaDreams,
    details:
      "Cocoa Dreams brings together traditional chocolate-making with modern innovation. Our signature collection features exquisite flavor combinations created by award-winning chocolatiers.",
    mission:
      "To create memorable chocolate experiences that celebrate craftsmanship and award-winning flavor innovation.",
    values: ["Artistry", "Innovation", "Premium Quality", "Excellence", "Passion"],
    founded: "1985",
    heritage:
      "Born from a passion for chocolate, Cocoa Dreams combines heritage techniques with contemporary flavors.",
    features: [
      "Handmade fillings",
      "Organic cocoa butter",
      "Award-winning recipes",
      "Luxury packaging",
    ],
  },
  {
    slug: "hazelnut-harmony",
    name: "Hazelnut Harmony",
    category: "Chocolate",
    tagline: "A Match Made in Heaven",
    description: "Roasted Mediterranean hazelnuts in creamy chocolate.",
    image: brandHazelnut,
    details:
      "Experience the perfect balance of roasted hazelnut and smooth chocolate. Each piece is carefully crafted to deliver an authentic taste experience.",
    mission:
      "To celebrate the perfect harmony between premium Mediterranean hazelnuts and fine chocolate.",
    values: ["Tradition", "Quality", "Balance", "Authenticity", "Enjoyment"],
    founded: "1972",
    heritage:
      "A Mediterranean treasure, combining Italian hazelnut expertise with Belgian chocolate mastery.",
    features: [
      "Mediterranean hazelnuts",
      "Small-batch production",
      "Gluten-free option",
      "Rich hazelnut flavor",
    ],
  },

  // Snacks Brands
  {
    slug: "nature-boost",
    name: "Nature Boost",
    category: "Snacks",
    tagline: "Nutrition Meets Taste",
    description: "20g of plant protein in every elegantly wrapped bar.",
    image: brandNatureBoost,
    details:
      "Nature Boost combines functional nutrition with delicious taste. Our protein bars are made with real ingredients and provide sustained energy for active lifestyles.",
    mission:
      "To fuel active lifestyles with nutritious, delicious snacks that support wellness without compromise.",
    values: ["Health", "Nutrition", "Sustainability", "Active Living", "Transparency"],
    founded: "2015",
    heritage: "Created by nutritionists and athletes for athletes and wellness enthusiasts.",
    features: [
      "Plant-based protein",
      "20g protein per bar",
      "No artificial sweeteners",
      "Vegan friendly",
    ],
  },
  {
    slug: "golden-grain",
    name: "Golden Grain",
    category: "Snacks",
    tagline: "Pure, Simple, Wholesome",
    description: "Slow-baked oats, honey and toasted seeds.",
    image: brandGoldenGrain,
    details:
      "Golden Grain celebrates the simplicity of wholesome ingredients. Each granola bar is baked fresh daily with premium oats and golden honey.",
    mission:
      "To provide pure, wholesome nutrition through simple, natural ingredients and time-honored baking methods.",
    values: ["Purity", "Simplicity", "Wholesomeness", "Tradition", "Nourishment"],
    founded: "2008",
    heritage:
      "Inspired by Scandinavian baking traditions, Golden Grain brings artisanal granola to everyday snacking.",
    features: ["Slow-baked daily", "No added sugar", "High fiber content", "Naturally energizing"],
  },
  {
    slug: "nut-artisan",
    name: "Nut Artisan",
    category: "Snacks",
    tagline: "Hand-Selected Excellence",
    description: "Carefully roasted and seasoned nuts.",
    image: snacks,
    details:
      "Nut Artisan sources the finest nuts from around the world, roasting them in small batches to perfection.",
    mission:
      "To showcase the natural excellence of premium nuts through careful sourcing and masterful roasting.",
    values: ["Quality", "Craftsmanship", "Global Sourcing", "Purity", "Excellence"],
    founded: "2003",
    heritage:
      "From nut orchards to your table, Nut Artisan maintains complete control over every roast.",
    features: ["Hand-roasted", "Small batch", "Lightly salted", "No GMO"],
  },

  // Confectionery Brands
  {
    slug: "joy-gummies",
    name: "Joy Gummies",
    category: "Confectionery",
    tagline: "Naturally Delicious Fun",
    description: "Real fruit gummies, naturally coloured and flavoured.",
    image: confectionery,
    details:
      "Made from real fruit juice and pectin, Joy Gummies deliver authentic fruit flavors with vibrant natural colors.",
    mission:
      "To bring joy and natural flavor to confectionery through real fruit and clean ingredients.",
    values: ["Natural", "Joy", "Quality", "Transparency", "Health-Conscious"],
    founded: "2012",
    heritage:
      "Joy Gummies pioneered the real fruit gummy movement, proving that natural can be delicious.",
    features: ["Real fruit juice", "Natural colors", "No artificial flavors", "Low sugar option"],
  },
  {
    slug: "mint-essence",
    name: "Mint Essence",
    category: "Confectionery",
    tagline: "Crisp, Clean & Refreshing",
    description: "Premium peppermint candies with a cool finish.",
    image: confectionery,
    details:
      "Mint Essence brings a moment of pure refreshment. Crafted with natural peppermint oil, each candy provides a crisp, clean sensation.",
    mission: "To deliver pure refreshment through premium peppermint and natural ingredients.",
    values: ["Purity", "Refreshment", "Natural", "Heritage", "Simplicity"],
    founded: "1995",
    heritage:
      "A legacy of peppermint excellence, Mint Essence sources the finest oils from traditional peppermint farms.",
    features: [
      "Natural peppermint oil",
      "Cool sensation",
      "Sugar-free option",
      "Long lasting flavor",
    ],
  },

  // Pet Nutrition Brands
  {
    slug: "pawsitive-nutrition",
    name: "Pawsitive Nutrition",
    category: "Pet Nutrition",
    tagline: "Science Meets Love",
    description: "Complete nutrition for every life stage and breed.",
    image: pet,
    details:
      "Pawsitive Nutrition is backed by veterinary science and formulated by nutritionists who understand your pet's needs. Every formula is created to support health, vitality, and happiness.",
    mission:
      "To support pet health and happiness through scientifically-formulated, nutritionally-complete diets.",
    values: ["Pet Health", "Science", "Love", "Veterinary Excellence", "Happiness"],
    founded: "2010",
    heritage: "Founded by veterinarians dedicated to optimal pet nutrition.",
    features: ["Vet-formulated", "All life stages", "Breed-specific options", "Grain-free recipes"],
  },
  {
    slug: "feline-care",
    name: "Feline Care",
    category: "Pet Nutrition",
    tagline: "Nutrition Tailored for Cats",
    description: "Carefully balanced recipes for happy, healthy cats.",
    image: pet,
    details:
      "Feline Care recognizes that cats have unique nutritional needs. Our recipes are formulated by feline nutrition experts.",
    mission:
      "To provide cats with specialized nutrition that respects their unique biological needs.",
    values: ["Cat Health", "Specialization", "Expertise", "Care", "Wellness"],
    founded: "2009",
    heritage: "Developed by feline nutrition specialists with decades of combined experience.",
    features: ["Taurine-rich", "Hairball control", "Indoor cat formula", "Naturally balanced"],
  },
  {
    slug: "pet-treats-premium",
    name: "Premium Pet Treats",
    category: "Pet Nutrition",
    tagline: "Rewards Your Pet Deserves",
    description: "Wholesome rewards your pets will love.",
    image: pet,
    details:
      "Every treat is a moment of connection between you and your pet. Premium Pet Treats are made with natural ingredients and love.",
    mission:
      "To strengthen the bond between pets and their owners through wholesome, natural rewards.",
    values: ["Pet Love", "Natural", "Bond", "Wholesome", "Reward"],
    founded: "2014",
    heritage: "Created to celebrate the special moments between pets and their families.",
    features: [
      "Natural ingredients",
      "No artificial preservatives",
      "Long-lasting",
      "Vet-approved",
    ],
  },

  // Healthy Foods Brands
  {
    slug: "pure-harvest",
    name: "Pure Harvest",
    category: "Healthy Foods",
    tagline: "From Farm to Family",
    description: "Stone-rolled whole oats for a wholesome start.",
    image: healthy,
    details:
      "Pure Harvest connects you with wholesome foods sourced directly from sustainable farms. Every product tells a story of quality and care.",
    mission: "To connect families with pure, wholesome foods grown with care and sustainability.",
    values: ["Purity", "Sustainability", "Farms", "Family", "Wellness"],
    founded: "2006",
    heritage: "Rooted in commitment to sustainable farming and transparent supply chains.",
    features: ["Organic certified", "Stone-rolled", "No additives", "Whole grain"],
  },
  {
    slug: "wellness-grains",
    name: "Wellness Grains",
    category: "Healthy Foods",
    tagline: "Nourish Your Body",
    description: "Whole grain cereals with no refined sugar.",
    image: healthy,
    details:
      "Wellness Grains believes breakfast is the foundation of a great day. Our cereals are packed with whole grains and essential nutrients.",
    mission:
      "To empower families to start each day with nutritious, delicious whole grain cereals.",
    values: ["Nutrition", "Wellness", "Energy", "Family Health", "Quality"],
    founded: "2011",
    heritage: "Built on the belief that breakfast sets the tone for the entire day.",
    features: ["High fiber", "Low sugar", "Rich in nutrients", "Kid-approved"],
  },

  // Ingredients Brands
  {
    slug: "pure-essence",
    name: "Pure Essence",
    category: "Ingredients",
    tagline: "Quality Ingredients for Quality Cooking",
    description: "Premium cooking ingredients for professional results.",
    image: ingredients,
    details:
      "Pure Essence supplies ingredient companies and restaurants with the finest quality cocoa, vanilla, and spices.",
    mission:
      "To deliver premium, traceable ingredients that enable professional-quality cooking and baking.",
    values: ["Quality", "Professionalism", "Traceability", "Purity", "Excellence"],
    founded: "1998",
    heritage: "Trusted by chefs and ingredient companies worldwide for uncompromising quality.",
    features: ["Food-grade quality", "Traceable sourcing", "Bulk options", "Professional grade"],
  },
];

export const PRODUCTS: Product[] = [
  {
    slug: "milk-chocolate",
    name: "Milk Chocolate",
    category: "Chocolate",
    description: "Silky milk chocolate crafted from sustainably sourced cocoa.",
    brand: "Auréa Chocolate",
  },
  {
    slug: "dark-chocolate",
    name: "Dark Chocolate",
    category: "Chocolate",
    description: "Intense 70% dark chocolate with a smooth, lingering finish.",
    brand: "Auréa Chocolate",
  },
  {
    slug: "hazelnut-chocolate",
    name: "Hazelnut Chocolate",
    category: "Chocolate",
    description: "Roasted Mediterranean hazelnuts folded into creamy chocolate.",
    brand: "Hazelnut Harmony",
  },
  {
    slug: "caramel-chocolate",
    name: "Caramel Chocolate",
    category: "Chocolate",
    description: "Slow-cooked caramel layered in golden milk chocolate.",
    brand: "Cocoa Dreams",
  },
  {
    slug: "almond-chocolate",
    name: "Almond Chocolate",
    category: "Chocolate",
    description: "Whole roasted almonds in a delicate chocolate shell.",
    brand: "Auréa Chocolate",
  },

  {
    slug: "protein-bars",
    name: "Protein Bars",
    category: "Snacks",
    description: "20g of plant protein in every elegantly wrapped bar.",
    brand: "Nature Boost",
  },
  {
    slug: "granola-bars",
    name: "Granola Bars",
    category: "Snacks",
    description: "Slow-baked oats, honey and toasted seeds.",
    brand: "Golden Grain",
  },
  {
    slug: "mixed-nuts",
    name: "Mixed Nuts",
    category: "Snacks",
    description: "Hand-selected nuts, lightly roasted, lightly salted.",
    brand: "Nut Artisan",
  },
  {
    slug: "trail-mix",
    name: "Trail Mix",
    category: "Snacks",
    description: "Berries, nuts and dark chocolate for the long way home.",
    brand: "Nut Artisan",
  },

  {
    slug: "fruit-gummies",
    name: "Fruit Gummies",
    category: "Confectionery",
    description: "Real fruit gummies, naturally coloured and flavoured.",
    brand: "Joy Gummies",
  },
  {
    slug: "mint-candies",
    name: "Mint Candies",
    category: "Confectionery",
    description: "Crisp peppermint shells with a cool, clean finish.",
    brand: "Mint Essence",
  },
  {
    slug: "hard-candies",
    name: "Hard Candies",
    category: "Confectionery",
    description: "Classic boiled sweets in heritage fruit flavours.",
    brand: "Joy Gummies",
  },
  {
    slug: "chewy-candies",
    name: "Chewy Candies",
    category: "Confectionery",
    description: "Soft, slow-pulled chews with a gentle bite.",
    brand: "Mint Essence",
  },

  {
    slug: "oats",
    name: "Premium Oats",
    category: "Healthy Foods",
    description: "Stone-rolled whole oats for a wholesome start.",
    brand: "Pure Harvest",
  },
  {
    slug: "breakfast-cereals",
    name: "Breakfast Cereals",
    category: "Healthy Foods",
    description: "Whole grain cereals with no refined sugar.",
    brand: "Wellness Grains",
  },
  {
    slug: "energy-bites",
    name: "Energy Bites",
    category: "Healthy Foods",
    description: "Dates, oats and cocoa pressed into perfect bites.",
    brand: "Pure Harvest",
  },
  {
    slug: "healthy-snacks",
    name: "Healthy Snacks",
    category: "Healthy Foods",
    description: "Crunchy, satisfying, nutritionist-approved.",
    brand: "Wellness Grains",
  },

  {
    slug: "dog-food",
    name: "Dog Food",
    category: "Pet Nutrition",
    description: "Complete nutrition for every life stage and breed.",
    brand: "Pawsitive Nutrition",
  },
  {
    slug: "cat-food",
    name: "Cat Food",
    category: "Pet Nutrition",
    description: "Carefully balanced recipes for happy, healthy cats.",
    brand: "Feline Care",
  },
  {
    slug: "pet-treats",
    name: "Pet Treats",
    category: "Pet Nutrition",
    description: "Wholesome rewards your pets will love.",
    brand: "Premium Pet Treats",
  },
];

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getBrand(slug: string) {
  return BRANDS.find((b) => b.slug === slug);
}

export function getBrandsByCategory(category: Category) {
  return BRANDS.filter((b) => b.category === category);
}

export function getRelated(slug: string, n = 3) {
  const p = getProduct(slug);
  if (!p) return [];
  return PRODUCTS.filter((x) => x.category === p.category && x.slug !== slug).slice(0, n);
}

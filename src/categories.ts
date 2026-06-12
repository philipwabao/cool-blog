export const CATEGORIES = [
  {
    key: "business",
    title: "Business",
    blurb: "The business side of building.",
    description: "Notes on the business side of building.",
  },
  {
    key: "personal",
    title: "Personal",
    blurb: "The personal side of living.",
    description: "Notes on the personal side of living.",
  },
  {
    key: "technical",
    title: "Technical",
    blurb: "Code, models, and systems.",
    description: "Notes on code, models, and systems.",
  },
  {
    key: "product",
    title: "Product",
    blurb: "Products and the decisions behind them.",
    description: "Notes on products and the decisions behind them.",
  },
] as const;

export type CategoryKey = (typeof CATEGORIES)[number]["key"];
export type CategoryMeta = (typeof CATEGORIES)[number];

export const CATEGORY_KEYS = CATEGORIES.map((c) => c.key) as unknown as [
  CategoryKey,
  ...CategoryKey[],
];

export const HOMEPAGE_LIMIT = 4;

export const sectionNum = (i: number) => `§ ${String(i + 1).padStart(2, "0")}`;

export const categoryByKey = (key: CategoryKey): CategoryMeta =>
  CATEGORIES.find((c) => c.key === key)!;

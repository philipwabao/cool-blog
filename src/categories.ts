export const CATEGORIES = [
  { key: "business",  title: "Business",  description: "Posts on the business side of building." },
  { key: "personal",  title: "Personal",  description: "Posts on the personal side of living." },
  { key: "technical", title: "Technical", description: "Posts on code and systems." },
  { key: "product",   title: "Product",   description: "Posts on products and decisions." },
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

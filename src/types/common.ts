export type WineItemType = {
  id: number;
  name: string;
  description: string;
  country: string;
  stock: number;
  price: number;
  flavor: string;
  smell: string;
  category?: "red" | "white" | "rose" | "sparkling";
  reviews?: ReviewType[];
  sales_last_12_months: Last12MonthsSalesType;
  sales_last_month: LastMonthsSalesType;
  reviews_last_12_months: Last12MonthsReviewsType;
  reviews_last_month: LastMonthReviewsType;
};

export type ReviewType = { comment: string; rate: number; author: string };

export type Last12MonthsReviewsType = { month: string; rate: number }[];

export type LastMonthReviewsType = { day: string; rate: number | null }[];

export type Last12MonthsSalesType = { month: string; sales: number }[];

export type LastMonthsSalesType = { day: string; sales: number }[];

// models/iproducts.ts
export interface IProduct {
  id: number;
  name: string;
  quantity: number;
  price: number;
  img: string;
  categoryID: number;
  badge?: string;
  specs?: { label: string; value: string }[];
}
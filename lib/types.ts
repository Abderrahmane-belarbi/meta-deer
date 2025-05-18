export type ProductInput = {
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  imageUrl?: string;
  category: string;
  stock: number;
  featured?: boolean;
};

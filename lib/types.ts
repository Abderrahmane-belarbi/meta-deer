export type ProductInput = {
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  imageUrls?: string[];
  category: string;
  stock: number;
  featured?: boolean;
};

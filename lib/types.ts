export type ProductInput = {
  _id?: string;
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  imageUrls?: string[];
  category: string;
  stock: number;
  featured?: boolean;
};

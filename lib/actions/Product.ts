"use server";

import { Product } from "@/lib/db/models/Product";
import { connectToDatabase } from "@/lib/db";

type ProductInput = {

  title: string;
  price: number;
  discountPrice?: number;
  imageUrl?: string;
};

export async function createProduct(data: ProductInput) {
  const connected = await connectToDatabase();
  if (connected) console.log("db connected");
  const newProduct = await Product.create(data);
  console.log("newProduct:", newProduct);
}

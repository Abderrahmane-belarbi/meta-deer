"use server";

import { Product } from "@/lib/db/models/Product";
import { connectToDatabase } from "@/lib/db";
import { ProductInput } from "../types";

export async function createProduct(data: ProductInput) {
  const connected = await connectToDatabase();
  if (connected) console.log("db connected");
  const newProduct = await Product.create(data);
  console.log("newProduct:", newProduct);
}

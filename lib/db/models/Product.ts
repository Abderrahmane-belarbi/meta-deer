import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    discountPrice: { type: Number, required: false },
    imageUrl: { type: String, required: false },
    category: { type: String, required: true },
    stock: { type: Number, required: true },
    featured: { type: Boolean, required: false },
  },
  {
    timestamps: true, // ✅ this adds createdAt and updatedAt automatically
  }
);

export const Product = models.Product || model("Product", ProductSchema);

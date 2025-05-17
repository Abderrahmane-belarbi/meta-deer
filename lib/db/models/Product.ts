import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    discountPrice: { type: Number, required: false },
    imageUrl: String,
  },
  {
    timestamps: true, // ✅ this adds createdAt and updatedAt automatically
  }
);

export const Product = models.Product || model("Product", ProductSchema);

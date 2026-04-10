import { createSlice, createSelector } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { ProductType } from "../ProductType";
import type { RootState } from "./store";

type Category = ProductType["category"] | "All Categories";

interface CatalogState {
  products: ProductType[];
  selectedCategory: Category;
}

const initialState: CatalogState = {
  products: [
    { id: 1, name: "Smartphone", price: 699, category: "Electronics" },
    { id: 2, name: "Laptop", price: 1299, category: "Electronics" },
    { id: 3, name: "T-Shirt", price: 29, category: "Apparel" },
    { id: 4, name: "Coffee Maker", price: 99, category: "Home Goods" },
    { id: 5, name: "Jeans", price: 59, category: "Apparel" },
    { id: 6, name: "Headphones", price: 199, category: "Electronics" },
    { id: 7, name: "Blender", price: 49, category: "Home Goods" },
    { id: 8, name: "Jacket", price: 89, category: "Apparel" },
    { id: 9, name: "Tablet", price: 399, category: "Electronics" },
  ],
  selectedCategory: "All Categories",
};

const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<Category>) {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setCategory } = catalogSlice.actions;

export const selectAllProducts = (state: RootState) => state.catalog.products;
export const selectSelectedCategory = (state: RootState) =>
  state.catalog.selectedCategory;

export const selectFilteredProducts = createSelector(
  selectAllProducts,
  selectSelectedCategory,
  (products, category) =>
    category === "All Categories"
      ? products
      : products.filter((p) => p.category === category),
);

export default catalogSlice.reducer;

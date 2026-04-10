import { createSlice, createSelector } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { ProductType } from "../ProductType";
import type { RootState } from "./store";
import productsData from "../data/products.json";

type Category = ProductType["category"] | "All Categories";

interface CatalogState {
  products: ProductType[];
  selectedCategory: Category;
}

const initialState: CatalogState = {
  products: productsData as ProductType[],
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

import { createSlice, createSelector } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { ProductType } from "../ProductType";
import productsData from "../data/products.json";

type Category = ProductType["category"] | "All Categories";

interface ProductsState {
  items: ProductType[];
  selectedCategory: Category;
}

const initialState: ProductsState = {
  items: [...productsData] as ProductType[],
  selectedCategory: "All Categories",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSelectedCategory(state, action: PayloadAction<Category>) {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setSelectedCategory } = productsSlice.actions;

export const selectAllProducts = (state: { products: ProductsState }) =>
  state.products.items;

export const selectSelectedCategory = (state: { products: ProductsState }) =>
  state.products.selectedCategory;

export const selectFilteredProducts = createSelector(
  selectAllProducts,
  selectSelectedCategory,
  (items, category) =>
    category === "All Categories"
      ? items
      : items.filter((p) => p.category === category),
);

export default productsSlice.reducer;

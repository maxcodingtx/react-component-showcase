import { Provider } from "react-redux";
import { store } from "./store/store";
import { CategoryFilter, ProductList } from "./components/barrel";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import {
  setCategory,
  selectSelectedCategory,
  selectFilteredProducts,
} from "./store/catalogSlice";
import type { ProductType } from "./ProductType";

type AcceptedStrings = ProductType["category"] | "All Categories";

function CatalogContent() {
  const dispatch = useAppDispatch();
  const selectedCategory = useAppSelector(selectSelectedCategory);
  const filteredProducts = useAppSelector(selectFilteredProducts);

  const handleFilterChange = (category: AcceptedStrings) => {
    dispatch(setCategory(category));
  };

  return (
    <div className="p-4">
      <CategoryFilter
        categories={["All Categories", "Electronics", "Apparel", "Home Goods"]}
        selectedCategory={selectedCategory}
        onFilterChange={handleFilterChange}
      />
      {filteredProducts.length > 0 ? (
        <ProductList products={filteredProducts} />
      ) : (
        <p>No products found in this category.</p>
      )}
    </div>
  );
}

export default function ProductCatalogApp() {
  return (
    <Provider store={store}>
      <CatalogContent />
    </Provider>
  );
}

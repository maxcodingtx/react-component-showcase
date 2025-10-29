import type { ProductType } from "./ProductType";
import { useState } from "react";
import { CategoryFilter, ProductList } from "./components/barrel";

type AcceptedStrings = ProductType["category"] | "All Categories";

export default function ProductCatalogApp() {
  const products: ProductType[] = [
    { id: 1, name: "Smartphone", price: 699, category: "Electronics" },
    { id: 2, name: "Laptop", price: 1299, category: "Electronics" },
    { id: 3, name: "T-Shirt", price: 29, category: "Apparel" },
    { id: 4, name: "Coffee Maker", price: 99, category: "Home Goods" },
    { id: 5, name: "Jeans", price: 59, category: "Apparel" },
    { id: 6, name: "Headphones", price: 199, category: "Electronics" },
    { id: 7, name: "Blender", price: 49, category: "Home Goods" },
    { id: 8, name: "Jacket", price: 89, category: "Apparel" },
    { id: 9, name: "Tablet", price: 399, category: "Electronics" },
  ];

  const [selectedCategory, setSelectedCategory] =
    useState<AcceptedStrings>("All Categories");

  const handleFilterChange = (category: AcceptedStrings) => {
    setSelectedCategory(category);
  };

  const filteredProducts = products.filter((product) =>
    selectedCategory === "All Categories"
      ? true
      : product.category === selectedCategory,
  );

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

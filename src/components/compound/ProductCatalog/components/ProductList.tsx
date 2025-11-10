// Product List Component
// Takes one prop, an array of products, and displays them in a list format.

import { type ProductType } from "../ProductType";
import { ProductCard } from "./ProductCard";

interface ProductListProps {
  products: ProductType[];
}
export function ProductList({ products }: ProductListProps) {
  return (
    <ul className="container mx-auto block gap-4 md:grid md:grid-cols-2">
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}

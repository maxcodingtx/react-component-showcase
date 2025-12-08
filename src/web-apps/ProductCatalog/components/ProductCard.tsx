import type { ProductType } from "../ProductType";
import Button from "../../../common/Button";

type ProductCardProps = {
  product: ProductType;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="card card-md card-border bg-base-100 shadow-xl">
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        <p>Price: ${product.price}</p>
        <p>Category: {product.category}</p>
        <div className="card-actions justify-end">
          <Button className="btn btn-primary">Buy Now</Button>
        </div>
      </div>
    </div>
  );
}

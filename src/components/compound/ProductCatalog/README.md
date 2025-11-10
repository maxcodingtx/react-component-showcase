# Product Catalog Component

A complete product catalog application with category filtering, product listing, and dynamic data management.

## Technologies Used

- **React** - Component framework
- **TypeScript** - Type safety with custom ProductType interface
- **React Hooks** - useState for state management
- **Tailwind CSS** - Styling and layout
- **Custom Types** - Advanced TypeScript patterns

## Dependencies

- Custom ProductType interface (`./ProductType`)
- CategoryFilter component (`./components/CategoryFilter`)
- ProductList component (`./components/ProductList`)
- ProductCard component (`./components/ProductCard`)

## Features

- Product filtering by category
- Dynamic product catalog with sample data
- Category-based filtering (Electronics, Apparel, Home Goods)
- "All Categories" option to show all products
- Responsive product grid layout
- Type-safe category management
- No products found messaging

## Copy to Your Project

```bash
# Copy all component files
cp -r ProductCatalog/ your-project/src/components/

# No additional dependencies required (uses built-in React features)
```

## File Structure

```
ProductCatalog/
├── app.tsx              # Main catalog app
├── ProductType.ts       # TypeScript interfaces
└── components/
    ├── barrel.ts        # Component exports
    ├── CategoryFilter.tsx # Category filter component
    ├── ProductCard.tsx  # Individual product card
    └── ProductList.tsx  # Product grid container
```

## Usage

```tsx
import ProductCatalogApp from "./components/ProductCatalog/app";

function App() {
  return (
    <div>
      <ProductCatalogApp />
    </div>
  );
}
```

## Component Structure

- Modular component architecture
- Type-safe product management
- Filtering and search functionality
- Reusable product display components

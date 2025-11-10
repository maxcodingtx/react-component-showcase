# Font Weight Selector Component

A font weight selector component that allows users to choose different font weights and see a live preview of the selected weight.

## Dependencies

- Custom RadioButton component (`../common/RadioButton`)

## Features

- Radio button selection for font weights (200, 400, 600, 800)
- Live preview of selected font weight
- useReducer pattern for state management
- Type-safe font weight values

## Copy to Your Project

```bash
# Copy the component file
cp FontWeightSelector.tsx your-project/src/components/

# Note: You'll also need to copy the common RadioButton component
cp ../common/RadioButton.tsx your-project/src/components/common/
```

## Usage

```tsx
import FontWeightSelector from "./components/FontWeightSelector";

function App() {
  return (
    <div>
      <FontWeightSelector />
    </div>
  );
}
```

## Component Structure

- Single component file
- useReducer pattern for state management
- Type-safe font weight enumeration
- Live preview functionality

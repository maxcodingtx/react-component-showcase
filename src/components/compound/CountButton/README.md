# Count Button Component

A simple counter button component that tracks and displays the number of times it has been clicked.

## Dependencies

- Custom Button component (`../common/Button`)

## Features

- Click counter with state persistence
- Reusable button component

## Copy to Your Project

```bash
# Copy the component file
cp CountButton.tsx your-project/src/components/

# Note: You'll also need to copy the common Button component
cp ../common/Button.tsx your-project/src/components/common/
```

## Usage

```tsx
import CountButton from "./components/CountButton";

function App() {
  return (
    <div>
      <CountButton />
    </div>
  );
}
```

## Component Structure

- Single component file
- Minimal state management
- Self-contained click counting logic

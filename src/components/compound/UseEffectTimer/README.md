# UseEffect Timer Component

A timer component that demonstrates the useEffect hook for side effects, counting seconds that have passed since component mount.

## Features

- Real-time second counter
- Automatic cleanup with useEffect return function
- Clean, centered display
- Demonstrates proper useEffect usage patterns
- Memory leak prevention with cleanup

## Dependencies

- No external dependencies
- Uses native JavaScript `setInterval`

## Copy to Your Project

```bash
# Copy the component file
cp useEffectTimer.tsx your-project/src/components/

# No additional dependencies required
```

## Usage

```tsx
import Timer from "./components/useEffectTimer";

function App() {
  return (
    <div>
      <Timer />
    </div>
  );
}
```

## Component Structure

- Single component file
- useEffect with cleanup function
- setInterval for timer functionality
- Demonstrates React lifecycle management

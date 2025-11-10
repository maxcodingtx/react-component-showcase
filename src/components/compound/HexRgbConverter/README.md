# Hex RGB Converter Component

A color conversion tool that converts hexadecimal color values to RGB format with real-time preview and validation.

## Features

- Real-time hex to RGB conversion
- Color preview with live background updates
- Input validation for hex color codes
- Support for 3-digit and 6-digit hex codes
- Error handling for invalid hex values
- Clean, intuitive interface

## Dependencies

- Custom conversion utility (`./hexToRgb`)
- Custom test utility (`./testHex`)

## Copy to Your Project

```bash
# Copy all component files
cp -r HexRgbConverter/ your-project/src/components/

# No additional dependencies required
```

## File Structure

```
HexRgbConverter/
├── index.tsx          # Container component
├── HexRgbConverter.tsx # Main converter component
├── hexToRgb.ts        # Conversion utility
└── testHex.ts         # Test/validation utility
```

## Usage

```tsx
import HexRgbConverter from "./components/HexRgbConverter";

function App() {
  return (
    <div>
      <HexRgbConverter />
    </div>
  );
}
```

## Component Structure

- Modular utility functions
- Real-time color preview
- Input validation and error handling
- Mathematical color conversion algorithms

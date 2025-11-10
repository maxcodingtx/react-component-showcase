# BMI Calculator Component

A Body Mass Index (BMI) calculator component that allows users to input their weight and height to calculate their BMI.

## Features

- Input validation for weight and height
- Real-time BMI calculation
- Alert notification with BMI result
- Responsive design

## Dependencies

- Custom Input component (`../common/Input`)
- Custom Button component (`../common/Button`)

## Copy to Your Project

```bash
# Copy the component file
cp BMICalculator.tsx your-project/src/components/

# Note: You'll also need to copy or create the common Input and Button components
cp ../common/Input.tsx your-project/src/components/common/
cp ../common/Button.tsx your-project/src/components/common/
```

## Usage

```tsx
import BMICalculator from "./components/BMICalculator";

function App() {
  return (
    <div>
      <BMICalculator />
    </div>
  );
}
```

## Component Structure

- Single component file
- No external API dependencies
- Self-contained logic for BMI calculation

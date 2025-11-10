# Name Form Component

A simple name form component that captures first and last name inputs and displays the full name in real-time.

## Technologies Used

- **React** - Component framework
- **TypeScript** - Type safety
- **React Hooks** - useState for form state management
- **Tailwind CSS** - Styling and conditional rendering

## Dependencies

- Custom Input component (`../common/Input`)

## Features

- First name and last name input fields
- Real-time full name display
- Conditional rendering (shows name only when fields have values)
- Controlled components with state management
- Clean, minimal UI

## Copy to Your Project

```bash
# Copy the component file
cp NameForm.tsx your-project/src/components/

# Note: You'll also need to copy the common Input component
cp ../common/Input.tsx your-project/src/components/common/
```

## Usage

```tsx
import NameForm from "./components/NameForm";

function App() {
  return (
    <div>
      <NameForm />
    </div>
  );
}
```

## Component Structure

- Single component file
- Object-based state management for form fields
- Conditional UI rendering
- Real-time display updates

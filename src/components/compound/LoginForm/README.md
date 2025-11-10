# Login Form Component

A basic login form component with username and password fields and form validation.

## Features

- Username and password input fields
- Form validation (required fields)
- Controlled components with state management
- Submit functionality with alert feedback
- Responsive design

## Dependencies

- Custom Input component (`../../common/Input`)
- Custom Button component (`../../common/Button`)

## Copy to Your Project

```bash
# Copy the component file
cp LoginForm.tsx your-project/src/components/

# Note: You'll also need to copy the common Input and Button components
cp ../common/Input.tsx your-project/src/components/common/
cp ../common/Button.tsx your-project/src/components/common/
```

## Usage

```tsx
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div>
      <LoginForm />
    </div>
  );
}
```

## Component Structure

- Single component file
- Form state management with useState
- Basic form validation
- Event handling for form submission

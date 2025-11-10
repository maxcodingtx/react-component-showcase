# Zod Register Form Component

A comprehensive registration form component with advanced form validation using Zod schema validation and React Hook Form.

## Technologies Used

- **React Hook Form** - Advanced form handling and validation
- **Zod** - Schema validation and type inference
- **@hookform/resolvers** - Integration between React Hook Form and Zod

## Features

- Multi-field registration form (firstName, lastName, email, phone, password, confirmPassword)
- Advanced schema validation with Zod
- Real-time form validation
- Password confirmation matching
- Email format validation
- Phone number validation
- Form submission handling
- Loading states during submission
- Error message display
- Form reset functionality

## Dependencies

- `react-hook-form` - Form state management
- `zod` - Schema validation
- `@hookform/resolvers/zod` - Zod resolver for React Hook Form
- Custom Input component (`../../common/Input`)

## Copy to Your Project

```bash
# Copy all component files
cp -r ZodRegisterForm/ your-project/src/components/

# Install required dependencies
npm install react-hook-form zod @hookform/resolvers

# Note: You'll also need to copy the common Input component
cp ../common/Input.tsx your-project/src/components/common/
```

## File Structure

```
ZodRegisterForm/
├── Form.tsx           # Main form component
├── registerSchema.ts  # Zod validation schema
└── submitRegister.ts  # Form submission logic
```

## Usage

```tsx
import ZodRegisterForm from "./components/ZodRegisterForm/Form";

function App() {
  return (
    <div>
      <ZodRegisterForm />
    </div>
  );
}
```

## Component Structure

- Modular design with separated concerns
- Schema-driven validation
- Type-safe form handling
- Reusable validation patterns

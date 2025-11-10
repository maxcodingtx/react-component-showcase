# Blog Post Container Component

A blog post generator component that fetches random blog posts from an external API with loading states and error handling.

## Features

- Random blog post fetching
- Loading states with spinner animation
- Error handling for failed requests
- Responsive design with centered layout
- Simulated delay for better UX demonstration
- Clean article display format

## Dependencies

- `react-spinners` - Loading spinner components
- Custom Button component (`../../common/Button`)
- Custom fetch utility (`./fetchBlogPost`)

## Copy to Your Project

```bash
# Copy all component files
cp -r BlogPostContainer/ your-project/src/components/

# Install required dependencies
npm install react-spinners

# Note: You'll also need to copy the common Button component
cp ../common/Button.tsx your-project/src/components/common/
```

## File Structure

```
BlogPostContainer/
├── BlogPostContainer.tsx  # Main component
└── fetchBlogPost.ts       # API fetch utility
```

## Usage

```tsx
import BlogPostContainer from "./components/BlogPostContainer/BlogPostContainer";

function App() {
  return (
    <div>
      <BlogPostContainer />
    </div>
  );
}
```

## Component Structure

- Async data fetching
- Loading state management
- Error boundary patterns
- Modular API utilities

# Movie Explorer Component

A comprehensive movie browsing application with favorites management, search functionality, and detailed movie pages using React Context and React Router.

## Technologies Used

- **React Router** - Client-side routing (`react-router`)
- **React Context API** - Global state management for favorites
- **React Hooks** - useState, useEffect, useContext, useParams
- **LocalStorage** - Persistent favorites storage

## Dependencies

- `react-router` - Modern React routing
- `daisyui` - UI component library
- `tailwindcss` - CSS framework
- Custom movie data (`./data/movies.json`)

### Core Functionality

- Movie browsing and search
- Favorites management with persistent storage
- Individual movie detail pages
- Real-time favorites count in navigation
- Responsive design with DaisyUI components

### UI/UX Features

- Search functionality (title, description, year)
- Add/remove favorites with visual feedback
- Navigation with favorites counter
- Movie cards with ratings and descriptions
- Detailed movie pages with actions
- Loading states and error handling

## Copy to Your Project

```bash
# Copy all component files
cp -r MovieExplorer/ your-project/src/components/

# Install required dependencies
npm install react-router daisyui tailwindcss

# Configure Tailwind and DaisyUI in your project
# Add to tailwind.config.js:
# plugins: [require("daisyui")]
```

## File Structure

```
MovieExplorer/
├── main.tsx              # Main app with routing and context
├── App.tsx               # Home page with movie list
├── Favorites.tsx         # Favorites page
├── movie/
│   └── id.tsx           # Individual movie detail page
├── components/
│   ├── barrel.ts        # Component exports
│   ├── MovieCard.tsx    # Individual movie card
│   ├── MovieList.tsx    # Movie grid container
│   ├── Navbar.tsx       # Navigation with favorites count
│   ├── SearchBar.tsx    # Search input component
│   └── FavoriteButton.tsx # Favorite toggle button
└── data/
    └── movies.json      # Sample movie data
```

## Usage

```tsx
import { MovieExplorerMain } from "./components/MovieExplorer/main";

function App() {
  return (
    <div>
      <MovieExplorerMain />
    </div>
  );
}
```

### Routing Structure

- `/` - Main movie browsing page
- `/favorites` - User's favorite movies
- `/movie/:id` - Individual movie details

## Key Learning Concepts

- **React Context API** for global state
- **Custom Hooks** for reusable logic
- **React Router** for SPA navigation
- **TypeScript** for type safety
- **Component Composition** patterns
- **State Persistence** strategies

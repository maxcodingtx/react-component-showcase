import {
  BMICalculator,
  CountButton,
  FontWeightSelector,
  LoginForm,
  NameForm,
  UseEffectTimer,
  BlogPostContainer,
  HexRgbConverter,
  NavbarApp,
  ZodRegisterForm,
} from "../components/compound/barrel";

import {
  BusinessApp,
  MacBookApp,
  MovieExplorer,
  ProductCatalog,
  RecipeVault,
  TechConferenceApp,
} from "../web-apps/barrel";

import { BrowserRouter, Routes, Route } from "react-router";

export default function ComponentShowcase() {
  const myComponents = [
    {
      id: "bmi-calculator",
      name: "BMI Calculator",
      component: <BMICalculator />,
    },
    { id: "count-button", name: "Count Button", component: <CountButton /> },
    {
      id: "font-weight-selector",
      name: "Font Weight Selector",
      component: <FontWeightSelector />,
    },
    { id: "login-form", name: "Login Form", component: <LoginForm /> },
    { id: "name-form", name: "Name Form", component: <NameForm /> },
    {
      id: "use-effect-timer",
      name: "UseEffect Timer",
      component: <UseEffectTimer />,
    },
    {
      id: "blog-post-container",
      name: "Blog Post Container",
      component: <BlogPostContainer />,
    },
    {
      id: "hex-rgb-converter",
      name: "Hex RGB Converter",
      component: <HexRgbConverter />,
    },
    { id: "navbar-app", name: "Navbar App", component: <NavbarApp /> },
    {
      id: "zod-register-form",
      name: "Zod Register Form",
      component: <ZodRegisterForm />,
    },
  ];

  const myWebApps = [
    {
      id: "business-app",
      name: "Business App",
      component: <BusinessApp />,
    },
    { id: "macbook-app", name: "MacBook App", component: <MacBookApp /> },
    {
      id: "movie-explorer",
      name: "Movie Explorer",
      component: <MovieExplorer />,
    },
    {
      id: "product-catalog",
      name: "Product Catalog",
      component: <ProductCatalog />,
    },
    { id: "recipe-vault", name: "Recipe Vault", component: <RecipeVault /> },
    {
      id: "tech-conference-app",
      name: "Tech Conference App",
      component: <TechConferenceApp />,
    },
  ];

  return (
    <BrowserRouter>
      <div className="">
        <nav className="bg-primary sticky top-0 z-10 shadow-lg">
          <ul className="flex flex-wrap gap-4 overflow-x-auto p-4">
            {myComponents.map(({ id, name }) => (
              <li key={id}>
                <a href={`/${id}`} className="text-base hover:underline">
                  {name}
                </a>
              </li>
            ))}
            {myWebApps.map(({ id, name }) => (
              <li key={id}>
                <a href={`/${id}`} className="text-base hover:underline">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <Routes>
        {myComponents.map(({ id, component }) => (
          <Route key={id} path={`/${id}`} element={component} />
        ))}
        {myWebApps.map(({ id, component }) => (
          <Route key={id} path={`/${id}`} element={component} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

import {
  BMICalculator,
  CountButton,
  FontWeightSelector,
  LoginForm,
  NameForm,
  UseEffectTimer,
  BlogPostContainer,
  HexRgbConverter,
  ZodRegisterForm,
} from "../components/compound/barrel";

import {
  BusinessApp,
  MacBookApp,
  // MovieExplorer,
  ProductCatalog,
  // RecipeVault,
  TechConferenceApp,
} from "../web-apps/barrel";

// Navbar app imports
import ShowcaseNavBar from "../components/compound/Navbar/ShowcaseNavbar";
import AboutPage from "../components/compound/Navbar/pages/about";
import ContactPage from "../components/compound/Navbar/pages/contact";
import HomePage from "../components/compound/Navbar/pages/home";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

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
      id: "product-catalog",
      name: "Product Catalog",
      component: <ProductCatalog />,
    },
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
          <ul className="flex flex-wrap gap-4 overflow-x-auto p-4 *:text-base *:hover:underline">
            <Link to="/" className="text-accent font-bold">
              Home
            </Link>
            {myComponents.map(({ id, name }) => (
              <li key={id}>
                <Link to={`/${id}`}>{name}</Link>
              </li>
            ))}
            {myWebApps.map(({ id, name }) => (
              <li key={id}>
                <Link to={`/${id}`}>{name}</Link>
              </li>
            ))}
            <Link to={`/navbar-app/pages/home`}>Navbar App</Link>
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
        <Route path="/" Component={null}></Route>
        {/* NavBar routing with nested layout so NavBar persists across pages */}
        <Route
          path="/navbar-app/*"
          element={<ShowcaseNavBar WebsiteName="Test Name" />}
        >
          <Route path="pages/about" element={<AboutPage />} />
          <Route
            path="pages/contact"
            element={
              <ContactPage
                ContactMethodInfo={[
                  "000-000-0000",
                  "example@gmail.com",
                  "123 abc Street",
                  "@websiteSOCIAL",
                ]}
                ContactMethods={["Phone", "Email", "Address", "Twitter"]}
              />
            }
          />
          <Route path="pages/home" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

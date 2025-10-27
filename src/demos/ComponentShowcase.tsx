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

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="sticky top-0 z-10 bg-white shadow-lg">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <h1 className="mb-6 text-3xl font-bold text-gray-900">
            Component Showcase
          </h1>
          <nav
            className="flex flex-wrap gap-4"
            role="navigation"
            aria-label="Component sections"
          >
            {myComponents.map(({ id, name }) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-blue-600 transition-colors hover:text-blue-800 hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById(id)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {name}
              </a>
            ))}
          </nav>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl space-y-12 px-4">
        {myComponents.map(({ id, name, component }) => (
          <section
            key={id}
            id={id}
            className="rounded-lg bg-white p-6 shadow-xl"
          >
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              {name}
            </h2>
            {component}
          </section>
        ))}
      </div>
    </div>
  );
}

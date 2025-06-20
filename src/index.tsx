import { BrowserRouter, Routes, Route } from "react-router";
import NavigationBar from "./components/React-Navbar/navbar";
import AboutPage from "./components/React-Navbar/pages/about";
import ContactPage from "./components/React-Navbar/pages/contact";
import HomePage from "./components/React-Navbar/pages/home";

function App() {
  return (
    <body className="bg-gradient-to-r from-indigo-400 to-cyan-400">
      <BrowserRouter>
        <NavigationBar WebsiteName="Test Name" />
        <Routes>
          <Route path="/pages/about" element={<AboutPage />} />
          <Route
            path="/pages/contact"
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
          <Route path="/pages/home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </body>
  );
}

export default App;

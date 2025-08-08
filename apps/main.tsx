// import { scan } from "react-scan";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MacBookApp from "./web-apps/MacBook-app/App";
// scan({ enabled: true });

import "./index.css";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MacBookApp />
  </StrictMode>,
);

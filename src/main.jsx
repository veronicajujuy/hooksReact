import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HooksApp from "./HooksApp.jsx";
import FormApp from "./FormApp.jsx";
import FetchApp from "./FetchApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FetchApp />
  </StrictMode>
);

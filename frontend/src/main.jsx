import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoutes from "./pages/AppRoutes";
import { CategoryProvider } from "./context/CategoryContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Add provider */}
    <CategoryProvider>
      <AppRoutes />
    </CategoryProvider>
  </StrictMode>
);

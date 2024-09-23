import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ThemeProvider from "./context/ThemeContext.jsx";
import { TaskProvider } from "./context/TaskApi.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <TaskProvider>
        <App />
      </TaskProvider>
    </ThemeProvider>
  </StrictMode>
);

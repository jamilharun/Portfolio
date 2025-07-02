import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import AppRouter from "./app/router";
import { DarkModeProvider } from "./utils/context/darkmode/DarkModeProvider";
// import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <DarkModeProvider>
        <AppRouter />
      </DarkModeProvider>
    </BrowserRouter>
  </StrictMode>
);

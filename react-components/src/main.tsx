import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/home/page";
import SidebarPage from "./pages/sidebar/page";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sidebar" element={<SidebarPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

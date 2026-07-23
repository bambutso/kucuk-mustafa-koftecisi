import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/700.css";
import "@fontsource/cormorant-garamond/500-italic.css";
import "@fontsource/cormorant-garamond/600-italic.css";
import "@fontsource-variable/inter";
import "./styles/global.css";

import App from "./App";
import { LanguageProvider } from "./i18n";
import { sunucuMenusunuYukle } from "./store/menuStore";

/* Yayınlanmış menüyü sunucudan çek. Beklemeden çizeriz: gelirse menü
   kendini günceller, gelmezse koddaki menüyle çalışmaya devam eder. */
void sunucuMenusunuYukle();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
);

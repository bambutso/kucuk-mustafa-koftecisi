import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// GitHub Pages proje sitesi altyolu: <kullanici>.github.io/kucuk-mustafa-koftecisi/
// Özel alan adına geçilirse base "/" yapılmalıdır.
export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  base: command === "build" ? "/kucuk-mustafa-koftecisi/" : "/",
}));

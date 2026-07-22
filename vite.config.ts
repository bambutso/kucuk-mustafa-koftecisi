import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Site kendi alan adının kökünden servis edilir (Güzel Hosting → public_html).
// Alt yol altında yayın gerekirse base'i komut satırından geçir, örneğin
// GitHub Pages için: npm run build -- --base=/kucuk-mustafa-koftecisi/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/",
});

import { Outlet, ScrollRestoration } from "react-router-dom";
import { useContent } from "../../i18n";
import { SeoHead } from "../../i18n/SeoHead";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Layout() {
  const content = useContent();
  return (
    <div className="relative overflow-x-clip">
      <a
        href="#icerik"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:bg-ember focus:px-4 focus:py-2 focus:font-sans focus:text-sm focus:font-semibold focus:text-coal"
      >
        {content.ui.nav.skipToContent}
      </a>
      <div aria-hidden className="grain-overlay" />
      <Navbar />
      <main id="icerik">
        <Outlet />
      </main>
      <Footer />
      <LanguageSwitcher />
      <SeoHead />
      <ScrollRestoration />
    </div>
  );
}

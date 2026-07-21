import { useEffect, useState, type ReactNode } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Clock, Menu as MenuIcon, Phone, X } from "lucide-react";
import { restaurant } from "../../data/restaurant";
import { buttonVariants } from "../ui/Button";
import { Container } from "../ui/Container";
import { cn } from "../../utils/cn";

export const NAV_LINKS = [
  { to: "/", label: "Ana Sayfa" },
  { to: "/hikayemiz", label: "Hikayemiz" },
  { to: "/mekan", label: "Mekân" },
  { to: "/menu", label: "Menü" },
  { to: "/galeri", label: "Galeri" },
  { to: "/iletisim", label: "İletişim" },
] as const;

function NavItem({ to, children }: { to: string; children: ReactNode }) {
  return (
    <NavLink
      to={to}
      end={to === "/"}
      className={({ isActive }) =>
        cn(
          "relative whitespace-nowrap px-2.5 py-2 font-sans text-sm transition-colors xl:px-3",
          isActive ? "text-ember" : "text-cream/75 hover:text-cream",
        )
      }
    >
      {({ isActive }) => (
        <>
          {children}
          {isActive && (
            <span
              aria-hidden
              className="kor-line absolute inset-x-2.5 -bottom-0.5"
            />
          )}
        </>
      )}
    </NavLink>
  );
}

function Brand() {
  return (
    <Link to="/" className="group shrink-0 leading-none" aria-label="Ana sayfa">
      <span className="block whitespace-nowrap font-display text-lg font-semibold tracking-wide text-cream transition-colors group-hover:text-copper md:text-2xl">
        Küçük Mustafa
      </span>
      <span className="mt-1 block whitespace-nowrap font-sans text-[0.5rem] font-semibold uppercase tracking-[0.3em] text-copper md:text-[0.55rem] md:tracking-[0.4em]">
        Köftecisi · 1939
      </span>
    </Link>
  );
}

/** Tam ekran mobil menü çekmecesi */
function MobileDrawer({ onClose }: { onClose: () => void }) {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label="Gezinme menüsü"
      className="fixed inset-0 z-[60] flex flex-col bg-coal pt-[env(safe-area-inset-top)]"
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={reduceMotion ? undefined : { opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <Container className="flex h-16 items-center justify-between">
        <Brand />
        <button
          type="button"
          onClick={onClose}
          aria-label="Menüyü kapat"
          className="p-2 text-cream/70 transition-colors hover:text-ember"
        >
          <X className="h-6 w-6" />
        </button>
      </Container>

      <nav
        aria-label="Mobil gezinme"
        className="flex flex-1 flex-col justify-center px-8"
      >
        {NAV_LINKS.map((link, i) => (
          <motion.div
            key={link.to}
            initial={reduceMotion ? false : { opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.06 + i * 0.05, duration: 0.35 }}
          >
            <NavLink
              to={link.to}
              end={link.to === "/"}
              onClick={onClose}
              className={({ isActive }) =>
                cn(
                  "block border-b border-cream/10 py-4 font-display text-3xl font-semibold transition-colors",
                  isActive ? "text-ember" : "text-cream hover:text-copper",
                )
              }
            >
              {link.label}
            </NavLink>
          </motion.div>
        ))}
      </nav>

      <div className="px-8 pb-[calc(2.5rem+env(safe-area-inset-bottom))]">
        <Link
          to="/rezervasyon"
          onClick={onClose}
          className={cn(buttonVariants({ size: "lg" }), "w-full")}
        >
          Rezervasyon
        </Link>
        <a
          href={restaurant.phone.href}
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "mt-3 w-full",
          )}
        >
          <Phone aria-hidden className="h-4 w-4" />
          {restaurant.phone.display}
        </a>
        <p className="mt-5 flex items-center justify-center gap-2 text-xs text-cream/45">
          <Clock aria-hidden className="h-3.5 w-3.5" />
          {restaurant.hours.days} · {restaurant.hours.open} –{" "}
          {restaurant.hours.close}
        </p>
      </div>
    </motion.div>
  );
}

/** Yapışkan üst çubuk: sayfa kaydıkça saydamdan kömür karasına koyulaşır. */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Eşik, çubuğun tamamen görünümden çıktığı nokta: absolute → fixed geçişi
    // ekranda zıplama yaratmasın diye.
    const onScroll = () => setScrolled(window.scrollY > 96);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setDrawerOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* iOS 26 Safari, üst kenara tutturulmuş (fixed) eleman ekrandayken içeriği
          adres çubuğunun arkasına uzatmayı bırakıp düz renk panele düşüyor —
          WebKit kısıtı, çözümü yok. Bu yüzden mobilde çubuk hep absolute'tur
          (sayfayla kayar, cam akışı bozulmaz); yalnızca lg+ ekranlarda kaydırma
          sonrası fixed olarak geri süzülür. Zemin/blur absolute alt katmandadır. */}
      <header
        className={cn(
          "inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)]",
          scrolled
            ? "absolute lg:fixed lg:motion-safe:animate-[nav-drop_0.45s_ease]"
            : "absolute",
        )}
      >
        <div
          aria-hidden
          className={cn(
            "absolute inset-0 border-b transition-all duration-500",
            scrolled
              ? "border-cream/10 bg-coal/90 backdrop-blur-md"
              : "border-transparent bg-transparent",
          )}
        />
        <Container className="relative flex h-16 items-center justify-between md:h-20">
          <Brand />

          {/* Masaüstü */}
          <nav
            aria-label="Ana gezinme"
            className="hidden items-center lg:flex"
          >
            {NAV_LINKS.map((link) => (
              <NavItem key={link.to} to={link.to}>
                {link.label}
              </NavItem>
            ))}
            <a
              href={restaurant.phone.href}
              aria-label={`Telefon: ${restaurant.phone.display}`}
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "ml-3",
              )}
            >
              <Phone aria-hidden className="h-3.5 w-3.5" />
              <span className="hidden xl:inline">
                {restaurant.phone.display}
              </span>
            </a>
            <Link
              to="/rezervasyon"
              className={cn(buttonVariants({ size: "sm" }), "ml-2")}
            >
              Rezervasyon
            </Link>
          </nav>

          {/* Mobil */}
          <div className="flex items-center gap-1 lg:hidden">
            <a
              href={restaurant.phone.href}
              aria-label={`Telefon: ${restaurant.phone.display}`}
              className={buttonVariants({ variant: "outline", size: "sm" })}
            >
              <Phone aria-hidden className="h-3.5 w-3.5" />
            </a>
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              aria-label="Menüyü aç"
              aria-expanded={drawerOpen}
              className="p-2 text-cream/80 transition-colors hover:text-ember"
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </Container>
      </header>

      <AnimatePresence>
        {drawerOpen && <MobileDrawer onClose={() => setDrawerOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

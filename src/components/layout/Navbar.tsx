import { useEffect, useState, type ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";
import { Phone } from "lucide-react";
import { restaurant } from "../../data/restaurant";
import { buttonVariants } from "../ui/Button";
import { Container } from "../ui/Container";
import { cn } from "../../utils/cn";

function NavItem({ to, children }: { to: string; children: ReactNode }) {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        cn(
          "relative whitespace-nowrap px-2.5 py-2 font-sans text-sm transition-colors sm:px-3",
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
              className="kor-line absolute inset-x-3 -bottom-0.5"
            />
          )}
        </>
      )}
    </NavLink>
  );
}

/** Yapışkan üst çubuk: sayfa kaydıkça saydamdan kömür karasına koyulaşır. */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-cream/10 bg-coal/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="group shrink-0 leading-none" aria-label="Ana sayfa">
          <span className="block whitespace-nowrap font-display text-lg font-semibold tracking-wide text-cream transition-colors group-hover:text-copper md:text-2xl">
            Küçük Mustafa
          </span>
          <span className="mt-1 block whitespace-nowrap font-sans text-[0.5rem] font-semibold uppercase tracking-[0.3em] text-copper md:text-[0.55rem] md:tracking-[0.4em]">
            Köftecisi · 1939
          </span>
        </Link>

        <nav aria-label="Ana gezinme" className="flex items-center gap-0 sm:gap-2">
          <NavItem to="/">Ana Sayfa</NavItem>
          <NavItem to="/menu">Menü</NavItem>
          <a
            href={restaurant.phone.href}
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "ml-2 sm:ml-3",
            )}
          >
            <Phone aria-hidden className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">{restaurant.phone.display}</span>
            <span className="sm:hidden">Ara</span>
          </a>
        </nav>
      </Container>
    </header>
  );
}

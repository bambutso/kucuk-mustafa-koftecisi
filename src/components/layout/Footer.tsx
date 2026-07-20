import { Link } from "react-router-dom";
import {
  Armchair,
  Check,
  Clock,
  ExternalLink,
  MapPin,
  Phone,
} from "lucide-react";
import { restaurant } from "../../data/restaurant";
import { Container } from "../ui/Container";
import { Stamp } from "../ui/Stamp";

const FOOTER_LINKS = [
  { to: "/", label: "Ana Sayfa" },
  { to: "/hikayemiz", label: "Hikayemiz" },
  { to: "/mekan", label: "Mekân" },
  { to: "/menu", label: "Menü" },
  { to: "/galeri", label: "Galeri" },
  { to: "/iletisim", label: "İletişim" },
  { to: "/rezervasyon", label: "Rezervasyon" },
] as const;

function ColumnTitle({ children }: { children: string }) {
  return <h3 className="eyebrow mb-5">{children}</h3>;
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-coal">
      <div aria-hidden className="kor-line kor-line--live" />
      <Container className="py-14 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Marka */}
          <div>
            <p className="font-display text-2xl font-semibold text-cream">
              Küçük Mustafa
            </p>
            <p className="mt-1 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.4em] text-copper">
              Köftecisi · 1939
            </p>
            <p className="mt-5 max-w-xs font-display text-lg italic leading-snug text-cream/60">
              “{restaurant.slogan}”
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href={restaurant.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-sans text-xs text-cream/60 transition-colors hover:text-ember"
              >
                Instagram
                <ExternalLink aria-hidden className="h-3.5 w-3.5" />
              </a>
              <a
                href={restaurant.socials.tripadvisor}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-sans text-xs text-cream/60 transition-colors hover:text-ember"
              >
                TripAdvisor
                <ExternalLink aria-hidden className="h-3.5 w-3.5" />
              </a>
            </div>
            <Stamp className="mt-8 h-24 w-24 opacity-80" />
          </div>

          {/* Adres */}
          <div>
            <ColumnTitle>Adres</ColumnTitle>
            <address className="not-italic">
              <p className="flex gap-2.5 text-sm leading-relaxed text-cream/70">
                <MapPin aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-copper" />
                <span>
                  {restaurant.address.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                  <span className="mt-1 block text-cream/45">
                    {restaurant.address.landmark}
                  </span>
                </span>
              </p>
              <p className="mt-4 flex items-center gap-2.5 text-sm text-cream/70">
                <Phone aria-hidden className="h-4 w-4 shrink-0 text-copper" />
                <a
                  href={restaurant.phone.href}
                  className="transition-colors hover:text-ember"
                >
                  {restaurant.phone.display}
                </a>
              </p>
            </address>
          </div>

          {/* Saatler */}
          <div>
            <ColumnTitle>Çalışma Saatleri</ColumnTitle>
            <p className="flex gap-2.5 text-sm leading-relaxed text-cream/70">
              <Clock aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-copper" />
              <span>
                <span className="block">{restaurant.hours.days}</span>
                <span className="block font-semibold text-cream">
                  {restaurant.hours.open} – {restaurant.hours.close}
                </span>
              </span>
            </p>
            <p className="mt-4 flex gap-2.5 text-sm leading-relaxed text-cream/70">
              <Armchair aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-copper" />
              <span>
                {restaurant.capacity.tables} masa ·{" "}
                {restaurant.capacity.seats} sandalye
              </span>
            </p>
          </div>

          {/* Hizmetler */}
          <div>
            <ColumnTitle>Hizmetler</ColumnTitle>
            <ul className="space-y-2.5">
              {restaurant.services.map((service) => (
                <li
                  key={service}
                  className="flex items-center gap-2.5 text-sm text-cream/70"
                >
                  <Check aria-hidden className="h-4 w-4 shrink-0 text-ember" />
                  {service}
                </li>
              ))}
            </ul>
            <Link
              to="/rezervasyon"
              className="mt-6 inline-block font-sans text-sm font-semibold text-copper transition-colors hover:text-ember"
            >
              Rezervasyon →
            </Link>
          </div>
        </div>
      </Container>

      {/* Sayfa bağlantıları */}
      <div className="border-t border-cream/10 py-5">
        <Container>
          <nav
            aria-label="Alt gezinme"
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
          >
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="font-sans text-xs text-cream/50 transition-colors hover:text-ember"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </Container>
      </div>

      <div className="border-t border-cream/10 py-5">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-cream/40 sm:flex-row">
          <p>
            © {year} {restaurant.name} — {restaurant.city}
          </p>
          <div className="flex items-center gap-5">
            <p className="font-display text-sm italic text-cream/50">
              1939'dan beri, aynı közde.
            </p>
            <Link
              to="/yonetim"
              className="text-[0.65rem] uppercase tracking-[0.15em] text-cream/25 transition-colors hover:text-cream/60"
            >
              Yönetim
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}

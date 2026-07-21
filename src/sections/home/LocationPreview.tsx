import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { restaurant } from "../../data/restaurant";
import { useContent } from "../../i18n";
import { Container } from "../../components/ui/Container";
import { Reveal } from "../../components/ui/Reveal";
import { buttonVariants } from "../../components/ui/Button";
import { cn } from "../../utils/cn";

export function LocationPreview() {
  const content = useContent();
  const ui = content.ui.location;
  return (
    <section className="bg-coal py-24 md:py-32" aria-label={ui.eyebrow}>
      <Container className="grid gap-10 lg:grid-cols-2">
        {/* Bilgi kartı */}
        <Reveal className="flex flex-col justify-center bg-coffee p-8 sm:p-12">
          <p className="eyebrow">{ui.eyebrow}</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.05] text-cream">
            {ui.title}
          </h2>

          <div className="mt-8 space-y-5 text-sm leading-relaxed text-cream/70">
            <p className="flex gap-3">
              <MapPin aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-copper" />
              <span>
                {restaurant.address.lines.join(", ")}
                <span className="mt-0.5 block text-cream/45">
                  {restaurant.address.landmark}
                </span>
              </span>
            </p>
            <p className="flex items-center gap-3">
              <Clock aria-hidden className="h-4 w-4 shrink-0 text-copper" />
              <span>
                {content.hoursDays},{" "}
                <strong className="font-semibold text-cream">
                  {restaurant.hours.open} – {restaurant.hours.close}
                </strong>
              </span>
            </p>
            <p className="flex items-center gap-3">
              <Phone aria-hidden className="h-4 w-4 shrink-0 text-copper" />
              <a
                href={restaurant.phone.href}
                className="transition-colors hover:text-ember"
              >
                {restaurant.phone.display}
              </a>
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={restaurant.address.directionsUrl}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({})}
            >
              <Navigation aria-hidden className="h-4 w-4" />
              {content.ui.common.directions}
            </a>
            <a
              href={restaurant.phone.href}
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              {content.ui.common.callUs}
            </a>
          </div>
        </Reveal>

        {/* Harita önizleme — koyu temaya uyarlanmış */}
        <Reveal delay={0.12} className="archive-frame">
          <iframe
            title={ui.mapTitle}
            src={restaurant.address.embedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="h-full min-h-[340px] w-full border-0 [filter:grayscale(1)_invert(0.9)_contrast(0.85)_sepia(0.2)_brightness(0.9)]"
          />
        </Reveal>
      </Container>
    </section>
  );
}

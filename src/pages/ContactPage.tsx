import {
  Clock,
  ExternalLink,
  MapPin,
  Navigation,
  Phone,
} from "lucide-react";
import { restaurant } from "../data/restaurant";
import { useContent } from "../i18n";
import { usePageMeta } from "../hooks/usePageMeta";
import { PageHeader } from "../components/ui/PageHeader";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { buttonVariants } from "../components/ui/Button";
import { cn } from "../utils/cn";

export default function ContactPage() {
  const content = useContent();
  const ui = content.ui.contact;
  usePageMeta(ui.docTitle, ui.docDesc);

  return (
    <>
      {/* Eski cephe fotoğrafı kaldırıldı — başlık düz koyu zeminde. */}
      <PageHeader
        eyebrow={ui.eyebrow}
        title={ui.title}
        lead={ui.lead}
      />

      <div className="bg-charcoal py-16 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          {/* İletişim kartları */}
          <div className="flex flex-col gap-5">
            <Reveal>
              <div className="border border-earth/30 bg-coffee p-7">
                <p className="eyebrow">{ui.phoneTitle}</p>
                <a
                  href={restaurant.phone.href}
                  className="mt-3 block font-display text-4xl font-semibold text-cream transition-colors hover:text-ember"
                >
                  {restaurant.phone.display}
                </a>
                <p className="mt-2 text-sm text-cream/55">{ui.phoneNote}</p>
                <a
                  href={restaurant.phone.href}
                  className={cn(buttonVariants({ size: "sm" }), "mt-5")}
                >
                  <Phone aria-hidden className="h-3.5 w-3.5" />
                  {content.ui.common.callNow}
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="border border-earth/30 bg-coffee p-7">
                <p className="eyebrow">{ui.addressTitle}</p>
                <address className="mt-3 text-sm not-italic leading-relaxed text-cream/70">
                  {restaurant.address.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                  <span className="mt-1 block text-cream/45">
                    {restaurant.address.landmark}
                  </span>
                </address>
                <a
                  href={restaurant.address.directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "sm" }),
                    "mt-5",
                  )}
                >
                  <Navigation aria-hidden className="h-3.5 w-3.5" />
                  {content.ui.common.directions}
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="border border-earth/30 bg-coffee p-7">
                <p className="eyebrow">{ui.hoursTitle}</p>
                <p className="mt-3 flex items-center gap-2.5 text-sm text-cream/70">
                  <Clock aria-hidden className="h-4 w-4 text-copper" />
                  {content.hoursDays},{" "}
                  <strong className="font-semibold text-cream">
                    {restaurant.hours.open} – {restaurant.hours.close}
                  </strong>
                </p>
                <p className="mt-2 text-xs text-cream/45">{ui.hoursNote}</p>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="border border-earth/30 bg-coffee p-7">
                <p className="eyebrow">{ui.socialTitle}</p>
                <div className="mt-3 flex flex-col gap-2.5">
                  <a
                    href={restaurant.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-cream/70 transition-colors hover:text-ember"
                  >
                    Instagram — @kucukmustafakoftecisi1939
                    <ExternalLink aria-hidden className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href={restaurant.socials.tripadvisor}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-cream/70 transition-colors hover:text-ember"
                  >
                    TripAdvisor — {restaurant.rating.score}/5 ·{" "}
                    {restaurant.rating.count} {ui.reviewsWord}
                    <ExternalLink aria-hidden className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Harita */}
          <Reveal delay={0.1} className="archive-frame min-h-[420px] lg:min-h-full">
            <iframe
              title={ui.mapTitle}
              src={restaurant.address.embedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="h-full min-h-[420px] w-full border-0 [filter:grayscale(1)_invert(0.9)_contrast(0.85)_sepia(0.2)_brightness(0.9)]"
            />
          </Reveal>
        </Container>

        <Container className="mt-10">
          <p className="flex items-start gap-2.5 text-xs leading-relaxed text-cream/40">
            <MapPin aria-hidden className="mt-0.5 h-3.5 w-3.5 shrink-0" />
            {ui.parkingNote}
          </p>
        </Container>
      </div>
    </>
  );
}

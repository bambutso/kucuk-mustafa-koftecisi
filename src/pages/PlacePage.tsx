import type { ComponentType } from "react";
import { Link } from "react-router-dom";
import {
  Armchair,
  Clock,
  Flame,
  HandPlatter,
  MapPin,
  ShoppingBag,
  Store,
  Wine,
} from "lucide-react";
import { igImages, images, placePage, restaurant } from "../data/restaurant";
import { usePageMeta } from "../hooks/usePageMeta";
import { PageHeader } from "../components/ui/PageHeader";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import { ImageWithFallback } from "../components/ui/ImageWithFallback";
import { buttonVariants } from "../components/ui/Button";
import { cn } from "../utils/cn";

const serviceIcons: Record<string, ComponentType<{ className?: string }>> = {
  yerinde: HandPlatter,
  paket: ShoppingBag,
  gelal: Store,
  alkollu: Wine,
};

export default function PlacePage() {
  usePageMeta(
    "Mekân — Küçük Mustafa Köftecisi | Kasaplar Arası, Kırklareli",
    "16 masa, 75 sandalye, meşe kömürlü ocak. Şevket Dingiloğlu Parkı karşısında, haftanın 7 günü 09:00–03:00.",
  );

  return (
    <>
      <PageHeader
        eyebrow="Mekân"
        title="Önü bakkaldı, arkası hep köfteci"
        lead={placePage.lead}
        image={images.storefront}
      />

      {/* Salon + Ocak */}
      <div className="bg-charcoal py-20 md:py-28">
        <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow={placePage.salon.title}
              title="On altı masa, yetmiş beş sandalye"
              lead={placePage.salon.text}
            />
            <dl className="mt-8 flex gap-10">
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-cream/45">
                  Masa
                </dt>
                <dd className="mt-1 font-display text-4xl font-semibold text-copper">
                  {restaurant.capacity.tables}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-cream/45">
                  Sandalye
                </dt>
                <dd className="mt-1 font-display text-4xl font-semibold text-copper">
                  {restaurant.capacity.seats}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-cream/45">
                  Açık
                </dt>
                <dd className="mt-1 font-display text-4xl font-semibold text-copper">
                  7<span className="text-xl">/gün</span>
                </dd>
              </div>
            </dl>
          </Reveal>
          <Reveal delay={0.12}>
            <figure className="archive-frame -rotate-1">
              <ImageWithFallback
                src={igImages.salonBordo}
                alt="Yenilenen salon: bordo kadife koltuklar, ahşap lambri duvarlar"
                fallbackLabel="Yenilenen salon"
                loading="lazy"
                className="aspect-[3/2] w-full object-cover"
              />
              <figcaption className="pt-2.5 text-center font-sans text-[0.65rem] uppercase tracking-[0.25em] text-cream/45">
                Yenilenen salonumuz
              </figcaption>
            </figure>
          </Reveal>
        </Container>
      </div>

      <div className="bg-coal py-20 md:py-28">
        <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal delay={0.12} className="order-2 lg:order-1">
            <figure className="archive-frame rotate-1">
              <ImageWithFallback
                src={images.ustaGrill}
                alt="Usta, meşe kömürünün korunda köfteleri pişirirken"
                fallbackLabel="Ocak başında usta"
                loading="lazy"
                className="aspect-[3/2] w-full object-cover"
              />
              <figcaption className="pt-2.5 text-center font-sans text-[0.65rem] uppercase tracking-[0.25em] text-cream/45">
                Meşe kömürü, döküm ızgara
              </figcaption>
            </figure>
          </Reveal>
          <Reveal className="order-1 lg:order-2">
            <p className="eyebrow">
              <Flame aria-hidden className="mr-2 inline h-3.5 w-3.5" />
              {placePage.ocak.title}
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.05] text-cream md:text-5xl">
              Salonun kalbi arkada atar
            </h2>
            <p className="mt-5 text-base leading-relaxed text-cream/65 md:text-lg">
              {placePage.ocak.text}
            </p>
          </Reveal>
        </Container>
      </div>

      {/* Özel organizasyon & toplu yemek */}
      <div className="bg-charcoal py-20 md:py-28">
        <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="Organizasyon"
              title={placePage.organizasyon.title}
              lead={placePage.organizasyon.text}
            />
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link to="/rezervasyon" className={buttonVariants({})}>
                Rezervasyon Yap
              </Link>
              <a
                href={restaurant.phone.href}
                className={cn(buttonVariants({ variant: "outline" }))}
              >
                {restaurant.phone.display}
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <figure className="archive-frame rotate-1">
              <ImageWithFallback
                src={igImages.organizasyon}
                alt="Toplu yemek için kurulmuş uzun masa, pencere kenarında"
                fallbackLabel="Organizasyon masası"
                loading="lazy"
                className="aspect-[3/2] w-full object-cover"
              />
              <figcaption className="pt-2.5 text-center font-sans text-[0.65rem] uppercase tracking-[0.25em] text-cream/45">
                Toplu yemek için kurulan sofra
              </figcaption>
            </figure>
          </Reveal>
        </Container>
      </div>

      {/* Hizmetler */}
      <div className="bg-coal py-20 md:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Hizmetler"
              title="Nasıl isterseniz"
            />
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {placePage.services.map((service, i) => {
              const Icon = serviceIcons[service.id] ?? HandPlatter;
              return (
                <Reveal key={service.id} delay={i * 0.08}>
                  <article className="group h-full border border-earth/30 bg-coffee p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-copper/50 hover:shadow-[0_18px_40px_-18px_rgba(217,119,47,0.35)]">
                    <Icon
                      aria-hidden
                      className="h-7 w-7 text-copper transition-colors duration-300 group-hover:text-ember"
                    />
                    <h3 className="mt-5 font-display text-2xl font-semibold text-cream">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-cream/60">
                      {service.text}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </div>

      {/* Pratik bilgi + CTA */}
      <div className="bg-charcoal py-20 md:py-24">
        <Container className="flex flex-col items-center gap-8 text-center">
          <Reveal>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-cream/70">
              <span className="inline-flex items-center gap-2">
                <MapPin aria-hidden className="h-4 w-4 text-copper" />
                {restaurant.address.lines[1]}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock aria-hidden className="h-4 w-4 text-copper" />
                {restaurant.hours.open} – {restaurant.hours.close}
              </span>
              <span className="inline-flex items-center gap-2">
                <Armchair aria-hidden className="h-4 w-4 text-copper" />
                {restaurant.capacity.seats} kişilik salon
              </span>
            </div>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link to="/rezervasyon" className={buttonVariants({})}>
                Rezervasyon Yap
              </Link>
              <Link
                to="/galeri"
                className={cn(buttonVariants({ variant: "outline" }))}
              >
                Galeriye Bakın
              </Link>
            </div>
          </Reveal>
        </Container>
      </div>
    </>
  );
}

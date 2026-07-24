import { Link } from "react-router-dom";
import { Container } from "../../components/ui/Container";
import { Reveal } from "../../components/ui/Reveal";
import { ImageWithFallback } from "../../components/ui/ImageWithFallback";

/**
 * Ana sayfa — Atatürk & hardaliye bölümü.
 *
 * Atatürk'ün, Trakya'nın yöresel içeceği hardaliye için söylediği rivayet edilen
 * söz + portre (NÖTR yer tutucu). Gerçek portre işletme tarafından eklenecek:
 * public/gallery/ataturk-placeholder.svg yerine gerçek görseli koyun.
 */
const PORTRE = `${import.meta.env.BASE_URL}gallery/ataturk-hardaliye.webp`;

export function AtaturkHardaliye() {
  return (
    <section className="bg-charcoal py-20 md:py-28" aria-label="Atatürk ve hardaliye">
      <Container className="flex flex-col items-center gap-10 text-center md:flex-row md:justify-center md:gap-16 md:text-left">
        <Reveal>
          <figure className="archive-frame w-44 shrink-0 sm:w-52">
            <ImageWithFallback
              src={PORTRE}
              alt="Mustafa Kemal Atatürk"
              fallbackLabel="Atatürk portresi"
              loading="lazy"
              className="aspect-[3/4] w-full object-cover"
            />
          </figure>
        </Reveal>

        <Reveal delay={0.1} className="max-w-xl">
          <p className="eyebrow">Millî İçeceğimiz — Hardaliye</p>
          <blockquote className="mt-5 font-display text-2xl italic leading-snug text-cream sm:text-3xl">
            “Bunu millî içeceğimiz hâline getirin.”
          </blockquote>
          <p className="mt-3 text-xs uppercase tracking-[0.3em] text-copper">
            Mustafa Kemal Atatürk
          </p>
          <p className="mt-1.5 font-display text-sm tracking-[0.25em] text-cream/50">
            1881 – 193<span aria-label="sonsuz" className="text-copper">∞</span>
          </p>
          <p className="mt-6 text-sm leading-relaxed text-cream/60">
            Trakya'nın asırlık üzüm içeceği hardaliye, soframızın yöresel
            değerlerinden biridir; menümüzde de yerini alır.
          </p>
          <Link
            to="/menu"
            className="mt-4 inline-flex items-center gap-2 font-sans text-sm font-semibold text-ember transition-colors hover:text-copper"
          >
            Menüde gör →
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}

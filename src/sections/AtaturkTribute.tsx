import { useContent } from "../i18n";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { ImageWithFallback } from "../components/ui/ImageWithFallback";

/**
 * Atatürk'e saygı bölümü — sade ve ölçülü.
 *
 * Portre için nötr yer tutucu kullanılır; gerçek görsel işletme tarafından
 * eklenecek. Değiştirmek için: public/gallery/ataturk-placeholder.svg yerine
 * gerçek portreyi koyun ya da aşağıdaki PORTRE yolunu güncelleyin.
 */
const PORTRE = `${import.meta.env.BASE_URL}gallery/ataturk.webp`;

export function AtaturkTribute() {
  const { ataturk } = useContent();
  return (
    <section className="bg-coal py-16 md:py-20" aria-label="Atatürk'e saygı">
      <Container className="flex flex-col items-center gap-9 text-center sm:flex-row sm:justify-center sm:gap-14 sm:text-left">
        <Reveal>
          <figure className="archive-frame w-40 shrink-0 sm:w-44">
            <ImageWithFallback
              src={PORTRE}
              alt="Mustafa Kemal Atatürk"
              fallbackLabel="Atatürk portresi"
              loading="lazy"
              className="aspect-[3/4] w-full object-cover"
            />
          </figure>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="kor-line mx-auto w-16 sm:mx-0" />
          <blockquote className="mt-5 font-display text-2xl italic leading-snug text-cream sm:text-3xl">
            “{ataturk.kirklareliQuote}”
          </blockquote>
          <p className="mt-3 text-xs uppercase tracking-[0.3em] text-copper">
            Mustafa Kemal Atatürk
          </p>
          <p className="mt-1.5 font-display text-sm tracking-[0.25em] text-cream/50">
            1881 – 193<span aria-label="sonsuz" className="text-copper">∞</span>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

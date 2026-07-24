import { useContent } from "../../i18n";
import { Container } from "../../components/ui/Container";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { Reveal } from "../../components/ui/Reveal";
import { ImageWithFallback } from "../../components/ui/ImageWithFallback";

export function Story() {
  const content = useContent();
  const { story } = content;
  const ui = content.ui.homeStory;
  return (
    <section className="relative bg-coal py-24 md:py-32" aria-label={ui.eyebrow}>
      <Container>
        <Reveal>
          <SectionHeading eyebrow={ui.eyebrow} title={ui.title} />
        </Reveal>

        <div className="mt-16 grid gap-16 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          {/* Bölümler */}
          <ol className="relative space-y-12 border-l border-earth/40 pl-8 sm:pl-10">
            {story.chapters.map((chapter, i) => (
              <li key={chapter.year} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-8 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-ember shadow-[0_0_10px_rgba(217,119,47,0.8)] sm:-left-10"
                />
                <Reveal delay={i * 0.08}>
                  <p className="font-display text-3xl font-semibold text-copper sm:text-4xl">
                    {chapter.year}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-cream sm:text-2xl">
                    {chapter.title}
                  </h3>
                  <p className="mt-3 max-w-prose text-sm leading-relaxed text-cream/65 sm:text-base">
                    {chapter.text}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>

          {/* İşletmenin gerçek kareleri (salon + dükkân cephesi). */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <Reveal delay={0.1}>
              <figure className="archive-frame rotate-1">
                <ImageWithFallback
                  src={`${import.meta.env.BASE_URL}gallery/hikaye-1.webp`}
                  alt="Küçük Mustafa Köftecisi salonu — bordo koltuklar, kurulu masalar"
                  fallbackLabel="Salon"
                  loading="lazy"
                  className="aspect-[3/2] w-full object-cover"
                />
              </figure>
            </Reveal>
            <Reveal delay={0.22}>
              <figure className="archive-frame -mt-6 ml-10 -rotate-1 sm:ml-16">
                <ImageWithFallback
                  src={`${import.meta.env.BASE_URL}gallery/hikaye-2.webp`}
                  alt="Küçük Mustafa Köftecisi dükkân cephesi ve ışıklı tabelası"
                  fallbackLabel="Dükkân cephesi"
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover"
                />
              </figure>
            </Reveal>
          </div>
        </div>

        {/* Duygusal bağ — alıntı */}
        <Reveal className="mx-auto mt-24 max-w-2xl text-center">
          <div className="kor-line kor-line--live mx-auto w-24" />
          <blockquote className="mt-8 font-display text-3xl italic leading-tight text-cream sm:text-4xl">
            “{story.pullQuote}”
          </blockquote>
          <p className="mt-4 text-xs uppercase tracking-[0.3em] text-cream/40">
            {ui.quoteSub}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

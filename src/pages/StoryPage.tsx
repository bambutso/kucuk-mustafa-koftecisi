import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { images, story, storyPage } from "../data/restaurant";
import { usePageMeta } from "../hooks/usePageMeta";
import { PageHeader } from "../components/ui/PageHeader";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { ImageWithFallback } from "../components/ui/ImageWithFallback";
import { Stamp } from "../components/ui/Stamp";
import { buttonVariants } from "../components/ui/Button";
import { cn } from "../utils/cn";

/** Bölüm aralarına serpiştirilen gerçek kareler */
const chapterFigures: Record<
  string,
  { src: string; alt: string; caption: string } | undefined
> = {
  "1939": {
    src: images.storefront,
    alt: "Küçük Mustafa Köftecisi'nin 1939 tabelalı dükkân cephesi",
    caption: "Aynı kapı, aynı tabela — Kasaplar Arası",
  },
  bugun: {
    src: images.ustaGrill,
    alt: "Usta, meşe kömürünün korunda köfteleri pişirirken",
    caption: "Köz başında usta",
  },
};

export default function StoryPage() {
  usePageMeta(
    "Hikayemiz — Küçük Mustafa Köftecisi | 1935'ten Bugüne",
    "Mustafa Akkul'un 1935'teki seyyar arabasından bugüne: Kayacan ustalar, Ergin Kalınoğlu ve hiç sönmeyen bir köz. Kırklareli'nin köfte hafızası.",
  );

  return (
    <>
      <PageHeader
        eyebrow="Hikayemiz"
        title="Bir közün seksen yılı aşkın nöbeti"
        lead={storyPage.lead}
        image={images.heroFire}
      />

      <div className="bg-charcoal py-20 md:py-28">
        <Container className="max-w-4xl">
          {storyPage.chapters.map((chapter) => {
            const figure = chapterFigures[chapter.id];
            return (
              <article
                key={chapter.id}
                className={cn(
                  "relative border-l border-earth/40 pb-16 pl-8 last:pb-0 sm:pl-12",
                )}
              >
                <span
                  aria-hidden
                  className="absolute -left-1 top-1.5 h-2 w-2 rounded-full bg-ember shadow-[0_0_10px_rgba(217,119,47,0.8)]"
                />
                <Reveal>
                  <p className="font-display text-4xl font-semibold text-copper sm:text-5xl">
                    {chapter.year}
                  </p>
                  <h2 className="mt-3 font-display text-2xl font-semibold text-cream sm:text-3xl">
                    {chapter.title}
                  </h2>
                  <div className="mt-5 space-y-4">
                    {chapter.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph.slice(0, 32)}
                        className="max-w-prose text-base leading-relaxed text-cream/70"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </Reveal>

                {figure && (
                  <Reveal delay={0.15}>
                    <figure className="archive-frame mt-8 max-w-md rotate-1">
                      <ImageWithFallback
                        src={figure.src}
                        alt={figure.alt}
                        fallbackLabel={figure.caption}
                        loading="lazy"
                        className="aspect-[3/2] w-full object-cover"
                      />
                      <figcaption className="pt-2.5 text-center font-sans text-[0.65rem] uppercase tracking-[0.25em] text-cream/45">
                        {figure.caption}
                      </figcaption>
                    </figure>
                  </Reveal>
                )}
              </article>
            );
          })}
        </Container>
      </div>

      {/* Kapanış: alıntı + davet */}
      <div className="bg-coal py-20 md:py-28">
        <Container className="flex max-w-3xl flex-col items-center text-center">
          <Reveal>
            <Stamp className="mx-auto h-28 w-28 opacity-80" />
            <blockquote className="mt-10 font-display text-3xl italic leading-tight text-cream sm:text-4xl">
              “{story.pullQuote}”
            </blockquote>
            <p className="mt-4 text-xs uppercase tracking-[0.3em] text-cream/40">
              Kırklareli'nde birçok kişinin ortak cümlesi
            </p>
            <p className="mx-auto mt-10 max-w-xl text-base leading-relaxed text-cream/65">
              Hikâyenin gerisi sayfalara sığmaz; közün başında anlatılır.
              Sofrada yeriniz hazır.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link to="/rezervasyon" className={buttonVariants({})}>
                Rezervasyon Yap
              </Link>
              <Link
                to="/mekan"
                className={cn(buttonVariants({ variant: "outline" }))}
              >
                Mekânı Tanıyın
                <ArrowRight aria-hidden className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </div>
    </>
  );
}

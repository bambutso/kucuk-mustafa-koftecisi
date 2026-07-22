import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { images } from "../data/restaurant";
import { useContent } from "../i18n";
import { usePageMeta } from "../hooks/usePageMeta";
import { PageHeader } from "../components/ui/PageHeader";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { ImageWithFallback } from "../components/ui/ImageWithFallback";
import { Stamp } from "../components/ui/Stamp";
import { buttonVariants } from "../components/ui/Button";
import { cn } from "../utils/cn";

export default function StoryPage() {
  const content = useContent();
  const ui = content.ui.storyPage;
  const { storyPage, story } = content;
  usePageMeta(ui.docTitle, ui.docDesc);

  /** Bölüm aralarına serpiştirilen gerçek kareler */
  const chapterFigures: Record<
    string,
    { src: string; alt: string; caption: string } | undefined
  > = {
    "1939": {
      src: images.storefront,
      alt: ui.captionShop,
      caption: ui.captionShop,
    },
    bugun: {
      src: images.ustaGrill,
      alt: ui.captionUsta,
      caption: ui.captionUsta,
    },
  };

  return (
    <>
      <PageHeader
        eyebrow={ui.eyebrow}
        title={ui.title}
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
                        /* Anlatı içindeki arşiv karesi: max-w-md (448px) */
                        sizes="(min-width: 640px) 448px, calc(100vw - 2.5rem)"
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
              {ui.quoteSub}
            </p>
            <p className="mx-auto mt-10 max-w-xl text-base leading-relaxed text-cream/65">
              {ui.closing}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link to="/rezervasyon" className={buttonVariants({})}>
                {content.ui.common.reserve}
              </Link>
              <Link
                to="/mekan"
                className={cn(buttonVariants({ variant: "outline" }))}
              >
                {ui.ctaPlace}
                <ArrowRight aria-hidden className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </div>
    </>
  );
}

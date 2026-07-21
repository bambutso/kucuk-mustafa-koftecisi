import { Award, ExternalLink, Star } from "lucide-react";
import { restaurant } from "../../data/restaurant";
import { useContent, useLang } from "../../i18n";
import { Container } from "../../components/ui/Container";
import { Reveal } from "../../components/ui/Reveal";
import { Badge } from "../../components/ui/Badge";

function Stars({
  score,
  outOf,
  ariaLabel,
}: {
  score: number;
  outOf: number;
  ariaLabel: string;
}) {
  const percent = (score / outOf) * 100;
  return (
    <div className="relative inline-flex" role="img" aria-label={ariaLabel}>
      <div aria-hidden className="flex gap-1 text-cream/15">
        {Array.from({ length: outOf }, (_, i) => (
          <Star key={i} className="h-5 w-5 fill-current" strokeWidth={0} />
        ))}
      </div>
      <div
        aria-hidden
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${percent}%` }}
      >
        <div className="flex gap-1 text-ember">
          {Array.from({ length: outOf }, (_, i) => (
            <Star key={i} className="h-5 w-5 shrink-0 fill-current" strokeWidth={0} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function Reviews() {
  const { rating, socials } = restaurant;
  const content = useContent();
  const { locale } = useLang();
  const ui = content.ui.reviews;

  return (
    <section className="bg-charcoal py-24 md:py-32" aria-label={ui.eyebrow}>
      <Container className="grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        {/* Gerçek puan verisi */}
        <Reveal>
          <p className="eyebrow">{ui.eyebrow}</p>
          <div className="mt-6 flex items-end gap-4">
            <p className="font-display text-8xl font-semibold leading-none text-cream">
              {rating.score.toLocaleString(locale)}
            </p>
            <div className="pb-2">
              <Stars
                score={rating.score}
                outOf={rating.outOf}
                ariaLabel={ui.starsAria(rating.score, rating.outOf)}
              />
              <p className="mt-2 text-sm text-cream/55">
                {rating.count} {ui.reviewsWord} · {rating.source}
              </p>
            </div>
          </div>
          <p className="mt-6 font-display text-2xl italic text-cream/85">
            {ui.rankLine(rating.rank, rating.totalInCity)}{" "}
            <span className="not-italic font-semibold text-ember">
              {rating.rank}.
            </span>
          </p>
          <Badge variant="ember" className="mt-5">
            <Award aria-hidden className="h-3.5 w-3.5" />
            {rating.award}
          </Badge>
          <div className="mt-8">
            <a
              href={socials.tripadvisor}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-copper transition-colors hover:text-ember"
            >
              {ui.ourPage(rating.source)}
              <ExternalLink aria-hidden className="h-4 w-4" />
            </a>
          </div>
        </Reveal>

        {/* Temsilî yorum kartları */}
        <div>
          <div className="grid gap-5 sm:grid-cols-1">
            {content.sampleReviews.map((review, i) => (
              <Reveal key={review.context} delay={i * 0.1}>
                <figure className="border-l-2 border-copper/60 bg-coffee/60 p-6 transition-colors duration-300 hover:bg-coffee">
                  <blockquote className="font-display text-xl italic leading-snug text-cream/90">
                    “{review.quote}”
                  </blockquote>
                  <figcaption className="mt-3 text-[0.65rem] uppercase tracking-[0.25em] text-cream/40">
                    {review.context}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <p className="mt-6 text-xs leading-relaxed text-cream/40">
              {content.reviewsDisclaimer}
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

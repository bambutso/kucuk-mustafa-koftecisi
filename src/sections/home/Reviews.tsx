import { Award, ExternalLink, PenLine, Star } from "lucide-react";
import {
  googleReviews,
  restaurant,
  tripadvisorReviews,
} from "../../data/restaurant";
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

/** Google'ın çok renkli "G" harfi — marka rengiyle çizilmez, özgün hâliyle durur. */
function GoogleMark({ className }: { className?: string }) {
  return (
    <svg aria-hidden focusable="false" viewBox="0 0 48 48" className={className}>
      <path
        fill="#4285F4"
        d="M45.1 24.5c0-1.6-.1-2.8-.4-4H24v7.3h12.1c-.2 2-1.6 5-4.5 7l6.9 5.4c4.1-3.8 6.6-9.4 6.6-15.7z"
      />
      <path
        fill="#34A853"
        d="M24 46c5.9 0 10.9-2 14.5-5.3l-6.9-5.4c-1.9 1.3-4.4 2.2-7.6 2.2-5.8 0-10.7-3.8-12.5-9.1l-7.1 5.5C8.1 41.1 15.4 46 24 46z"
      />
      <path
        fill="#FBBC05"
        d="M11.5 28.4c-.5-1.4-.7-2.9-.7-4.4s.3-3 .7-4.4l-7.1-5.5C2.9 17 2 20.4 2 24s.9 7 2.4 9.9l7.1-5.5z"
      />
      <path
        fill="#EA4335"
        d="M24 10.2c4.1 0 6.9 1.8 8.5 3.3l6.2-6C34.9 4 29.9 2 24 2 15.4 2 8.1 6.9 4.4 14.1l7.1 5.5C13.3 14.3 18.2 10.2 24 10.2z"
      />
    </svg>
  );
}

export function Reviews() {
  const { rating, googleRating, socials, reviewLinks } = restaurant;
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

          {/* Google: TripAdvisor bloğuyla aynı kolonda, daha küçük ölçekte */}
          <div className="mt-10 border-t border-earth/30 pt-8">
            <p className="flex items-center gap-2.5 eyebrow !mt-0">
              <GoogleMark className="h-4 w-4 shrink-0" />
              {ui.googleEyebrow}
            </p>
            <div className="mt-5 flex items-end gap-4">
              <p className="font-display text-5xl font-semibold leading-none text-cream">
                {googleRating.score.toLocaleString(locale)}
              </p>
              <div className="pb-1">
                <Stars
                  score={googleRating.score}
                  outOf={googleRating.outOf}
                  ariaLabel={ui.starsAria(
                    googleRating.score,
                    googleRating.outOf,
                  )}
                />
                <p className="mt-2 text-sm text-cream/55">
                  {googleRating.count.toLocaleString(locale)} {ui.reviewsWord} ·{" "}
                  {googleRating.source}
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-cream/60">
              {ui.googleLine}
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              <a
                href={socials.google}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-copper transition-colors hover:text-ember"
              >
                {ui.ourPage(googleRating.source)}
                <ExternalLink aria-hidden className="h-4 w-4" />
              </a>
              <a
                href={reviewLinks.google}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-cream/60 transition-colors hover:text-ember"
              >
                <PenLine aria-hidden className="h-4 w-4" />
                {ui.writeReview}
              </a>
            </div>
          </div>
        </Reveal>

        {/* TripAdvisor'daki gerçek yorumlar */}
        <div>
          <div className="grid gap-5 sm:grid-cols-1">
            {tripadvisorReviews.map((review, i) => {
              const text = content.tripadvisorReviews[review.id];
              return (
                <Reveal key={review.id} delay={i * 0.1}>
                  <figure className="border-l-2 border-copper/60 bg-coffee/60 p-6 transition-colors duration-300 hover:bg-coffee">
                    <blockquote className="font-display text-xl italic leading-snug text-cream/90">
                      “{text?.quote}”
                    </blockquote>
                    <figcaption className="mt-3 flex flex-wrap items-center gap-3 text-[0.65rem] uppercase tracking-[0.25em] text-cream/40">
                      {text?.title}
                      <Stars
                        score={review.stars}
                        outOf={rating.outOf}
                        ariaLabel={ui.starsAria(review.stars, rating.outOf)}
                      />
                    </figcaption>
                  </figure>
                </Reveal>
              );
            })}
          </div>
          {/* Google'daki gerçek müşteri yorumları */}
          <Reveal delay={0.25}>
            <div className="mt-6 border-t border-earth/30 pt-6">
              <p className="flex items-center gap-2.5 eyebrow !mt-0">
                <GoogleMark className="h-4 w-4 shrink-0" />
                {ui.googleEyebrow}
              </p>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                {googleReviews.map((review) => (
                  <figure
                    key={review.id}
                    className="border-l-2 border-copper/40 bg-coffee/40 p-5 transition-colors duration-300 hover:bg-coffee/70"
                  >
                    <blockquote className="font-display text-base italic leading-snug text-cream/85">
                      “{content.googleReviews[review.id]?.quote}”
                    </blockquote>
                    <figcaption className="mt-3 flex flex-wrap items-center gap-2 text-[0.65rem] uppercase tracking-[0.2em] text-cream/40">
                      {review.author}
                      <Stars
                        score={review.stars}
                        outOf={googleRating.outOf}
                        ariaLabel={ui.starsAria(
                          review.stars,
                          googleRating.outOf,
                        )}
                      />
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </Reveal>

        </div>
      </Container>
    </section>
  );
}

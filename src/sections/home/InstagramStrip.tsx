import { ExternalLink } from "lucide-react";
import { instagramStrip, restaurant } from "../../data/restaurant";
import { useContent } from "../../i18n";
import { Container } from "../../components/ui/Container";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { Reveal } from "../../components/ui/Reveal";
import { ImageWithFallback } from "../../components/ui/ImageWithFallback";
import { buttonVariants } from "../../components/ui/Button";
import { cn } from "../../utils/cn";

/** İşletmenin kendi Instagram karelerinden oluşan şerit (v2) */
export function InstagramStrip() {
  const ui = useContent().ui.instagram;
  return (
    <section className="bg-charcoal py-24 md:py-32" aria-label={ui.title}>
      <Container>
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="@kucukmustafakoftecisi1939"
            title={ui.title}
            lead={ui.lead}
          />
          <a
            href={restaurant.socials.instagram}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: "outline", size: "sm" }), "shrink-0")}
          >
            {ui.follow}
            <ExternalLink aria-hidden className="h-3.5 w-3.5" />
          </a>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
          {instagramStrip.map((post, i) => (
            <Reveal key={post.image} delay={Math.min(i * 0.06, 0.3)}>
              <a
                href={post.href}
                target="_blank"
                rel="noreferrer"
                className="group relative block overflow-hidden border border-earth/30 transition-colors hover:border-copper/60"
                aria-label={`Instagram gönderisi: ${post.alt}`}
              >
                <ImageWithFallback
                  src={post.image}
                  alt={post.alt}
                  fallbackLabel="Instagram karesi"
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 flex items-end bg-gradient-to-t from-coal/80 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  <span className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-cream">
                    {ui.openPost}
                    <ExternalLink className="h-3 w-3" />
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

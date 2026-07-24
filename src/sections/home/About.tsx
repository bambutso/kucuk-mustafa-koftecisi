import type { ComponentType } from "react";
import { Heart, Leaf, ShieldCheck } from "lucide-react";
import { useContent } from "../../i18n";
import { Container } from "../../components/ui/Container";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { Reveal } from "../../components/ui/Reveal";

/** Kart id'si → ikon. i18n'de yalnızca metin çevrilir; ikon burada durur. */
const cardIcons: Record<string, ComponentType<{ className?: string }>> = {
  icerik: Leaf,
  hijyen: ShieldCheck,
  memnuniyet: Heart,
};

/** Ana sayfa — "Hakkımızda": kalite, doğal yağ ve hijyen vurgusu + 3 vurgu kartı. */
export function About() {
  const { about } = useContent();

  return (
    <section className="bg-charcoal py-24 md:py-32" aria-label={about.eyebrow}>
      <Container>
        {/* Önceki (marka/tarif) bölümünden ayıran kor hattı */}
        <Reveal className="mb-16 flex justify-center">
          <div className="kor-line w-24" />
        </Reveal>

        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <Reveal>
            <SectionHeading eyebrow={about.eyebrow} title={about.title} />
          </Reveal>

          <Reveal delay={0.1} className="space-y-4">
            {about.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="max-w-prose text-sm leading-relaxed text-cream/70 sm:text-base"
              >
                {paragraph}
              </p>
            ))}
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-3">
          {about.cards.map((card, i) => {
            const Icon = cardIcons[card.id] ?? Leaf;
            return (
              <Reveal key={card.id} delay={i * 0.09}>
                <article className="group h-full border border-earth/30 bg-coffee p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-copper/50 hover:shadow-[0_18px_40px_-18px_rgba(217,119,47,0.35)]">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-copper/30 bg-charcoal/50">
                    <Icon
                      aria-hidden
                      className="h-6 w-6 text-copper transition-colors duration-300 group-hover:text-ember"
                    />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-cream">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/60">
                    {card.text}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

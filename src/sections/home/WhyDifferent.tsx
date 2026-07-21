import type { ComponentType } from "react";
import { Beef, Flame, HandPlatter, Wheat } from "lucide-react";
import { useContent } from "../../i18n";
import { Container } from "../../components/ui/Container";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { Reveal } from "../../components/ui/Reveal";

const icons: Record<string, ComponentType<{ className?: string }>> = {
  et: Beef,
  harc: Wheat,
  ates: Flame,
  sunum: HandPlatter,
};

export function WhyDifferent() {
  const content = useContent();
  const ui = content.ui.why;
  return (
    <section className="bg-charcoal py-24 md:py-32" aria-label={ui.title}>
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow={ui.eyebrow}
            title={ui.title}
            lead={ui.lead}
          />
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {content.features.map((feature, i) => {
            const Icon = icons[feature.id] ?? Flame;
            return (
              <Reveal key={feature.id} delay={i * 0.08}>
                <article className="group h-full border border-earth/30 bg-coffee p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-copper/50 hover:shadow-[0_18px_40px_-18px_rgba(217,119,47,0.35)]">
                  <Icon
                    aria-hidden
                    className="h-7 w-7 text-copper transition-colors duration-300 group-hover:text-ember"
                  />
                  <p className="eyebrow mt-6 text-[0.6rem]">{feature.kicker}</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-cream">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/60">
                    {feature.text}
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

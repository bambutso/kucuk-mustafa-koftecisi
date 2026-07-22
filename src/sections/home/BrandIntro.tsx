import { restaurant, shopAge } from "../../data/restaurant";
import { useContent } from "../../i18n";
import { Container } from "../../components/ui/Container";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { Reveal } from "../../components/ui/Reveal";

export function BrandIntro() {
  const content = useContent();
  const stats = [
    { value: String(shopAge()), label: content.ui.stats.years },
    { value: "4", label: content.ui.stats.generations },
    { value: "225 g", label: content.ui.stats.portion },
  ];

  return (
    <section className="bg-charcoal py-24 md:py-32" aria-label={content.manifesto.eyebrow}>
      <Container className="grid items-start gap-14 md:grid-cols-[1.5fr_1fr]">
        <Reveal>
          <SectionHeading
            eyebrow={content.manifesto.eyebrow}
            title={content.manifesto.title}
            lead={content.manifesto.text}
          />
        </Reveal>

        <div className="flex flex-row justify-between gap-6 border-l-0 md:flex-col md:justify-start md:border-l md:border-earth/40 md:pl-10">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={0.1 + i * 0.12}>
              <p className="font-display text-4xl font-semibold text-copper sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-1.5 text-xs uppercase tracking-[0.18em] text-cream/50 sm:text-sm sm:tracking-[0.14em]">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
      <span className="sr-only">{restaurant.slogan}</span>
    </section>
  );
}

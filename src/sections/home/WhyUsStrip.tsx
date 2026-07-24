import type { ComponentType } from "react";
import { BadgeCheck, Ban, Droplet, Sparkles } from "lucide-react";
import { useContent } from "../../i18n";
import { Container } from "../../components/ui/Container";
import { Reveal } from "../../components/ui/Reveal";

/** Rozet id'si → ikon. i18n'de yalnızca metin çevrilir. */
const badgeIcons: Record<string, ComponentType<{ className?: string }>> = {
  yag: Droplet,
  palm: Ban,
  hijyen: Sparkles,
  secki: BadgeCheck,
};

/**
 * Ana sayfa — "Neden Biz" şeridi.
 * Doğal yağ ve hijyen vurgusunu kısa rozetlerle öne çıkaran, sıcak (kahve)
 * zeminli ince bir bant. Hakkımızda bölümünün özeti gibi çalışır.
 */
export function WhyUsStrip() {
  const { whyUs } = useContent();

  return (
    <section className="bg-coffee py-12 md:py-14" aria-label={whyUs.eyebrow}>
      <Container>
        <Reveal className="flex flex-col items-center text-center">
          <p className="eyebrow">{whyUs.eyebrow}</p>
        </Reveal>

        <div className="mt-8 grid gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-earth/30">
          {whyUs.items.map((item, i) => {
            const Icon = badgeIcons[item.id] ?? BadgeCheck;
            return (
              <Reveal key={item.id} delay={i * 0.07}>
                <div className="flex items-center gap-3.5 lg:justify-center lg:px-5">
                  <Icon aria-hidden className="h-6 w-6 shrink-0 text-ember" />
                  <p className="text-sm font-medium leading-snug text-cream/85">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

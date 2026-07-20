import { useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useMenu } from "../../store/menuStore";
import { images } from "../../data/restaurant";
import { Container } from "../../components/ui/Container";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { Reveal } from "../../components/ui/Reveal";
import { ImageWithFallback } from "../../components/ui/ImageWithFallback";
import { formatPrice } from "../../utils/format";

export function Signature() {
  const { categories } = useMenu();

  /** Menü verisinden şef önerileri — ürün bilgisi tek kaynaktan gelir. */
  const signatureItems = useMemo(
    () =>
      categories.flatMap((category) =>
        category.items
          .filter((item) => item.tags?.includes("sef-onerisi"))
          .map((item) => ({ ...item, category: category.title })),
      ),
    [categories],
  );

  return (
    <section className="bg-coal py-24 md:py-32" aria-label="İmza ürünler">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="İmza Ürünler"
            title="Ocaktan çıkanların en bilinenleri"
            lead="Fiyatlar örnek menüdendir; güncel liste için işletmeye danışın."
          />
        </Reveal>

        <div className="mt-14 grid items-stretch gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          {/* Başrolde: gerçek köfte tabağı */}
          <Reveal className="group relative overflow-hidden">
            <ImageWithFallback
              src={images.koftePlate}
              alt="Porsiyon köfte: sekiz köfte, közlenmiş biber, domates ve piyazlık soğan"
              fallbackLabel="Porsiyon köfte"
              loading="lazy"
              className="warm-photo h-full min-h-[300px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-coal/85 via-transparent to-transparent"
            />
            <p className="absolute bottom-5 left-6 font-display text-xl italic text-cream">
              250 gram, 8 köfte — 1939'dan beri aynı tabak.
            </p>
          </Reveal>

          {/* Şef önerileri listesi */}
          <div className="flex flex-col justify-center divide-y divide-earth/30">
            {signatureItems.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.1} className="py-6 first:pt-0 last:pb-0">
                <p className="eyebrow text-[0.6rem]">{item.category}</p>
                <div className="mt-2 flex items-baseline">
                  <h3 className="font-display text-2xl font-semibold text-cream">
                    {item.name}
                  </h3>
                  <span aria-hidden className="price-leader" />
                  <span className="font-display text-xl font-semibold text-copper">
                    {formatPrice(item.price)}
                  </span>
                </div>
                {item.unit && (
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-cream/40">
                    {item.unit}
                  </p>
                )}
                <p className="mt-2.5 max-w-md text-sm leading-relaxed text-cream/60">
                  {item.description}
                </p>
              </Reveal>
            ))}
            <Reveal delay={0.35} className="pt-7">
              <Link
                to="/menu"
                className="group inline-flex items-center gap-2 font-sans text-sm font-semibold text-ember transition-colors hover:text-copper"
              >
                Menünün tamamını gör
                <ArrowRight
                  aria-hidden
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

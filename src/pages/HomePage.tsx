import { usePageMeta } from "../hooks/usePageMeta";
import { useContent } from "../i18n";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { Hero } from "../sections/home/Hero";
import { BrandIntro } from "../sections/home/BrandIntro";
import { About } from "../sections/home/About";
import { AtaturkHardaliye } from "../sections/home/AtaturkHardaliye";
import { Story } from "../sections/home/Story";
import { WhyDifferent } from "../sections/home/WhyDifferent";
import { WhyUsStrip } from "../sections/home/WhyUsStrip";
import { Signature } from "../sections/home/Signature";
import { InstagramStrip } from "../sections/home/InstagramStrip";
import { Reviews } from "../sections/home/Reviews";
import { LocationPreview } from "../sections/home/LocationPreview";

export default function HomePage() {
  const ui = useContent().ui.home;
  usePageMeta(ui.docTitle, ui.docDesc);

  return (
    <>
      <Hero />

      {/* Kırklareli — Atatürk sözü (giriş): Kırklareli Türk Ocağı ziyaretinden. */}
      <section className="bg-coal py-12 text-center" aria-label="Atatürk sözü">
        <Container>
          <Reveal>
            <div className="kor-line mx-auto mb-6 w-16" />
            <blockquote className="mx-auto max-w-2xl font-display text-xl italic leading-snug text-cream/90 sm:text-2xl">
              “Kırklareli Türk Ocağında çok kıymetli arkadaşlarla geçirdiğim
              zamanın hatırasını ölmez hislerle saklayacağım.”
            </blockquote>
            <p className="mt-4 text-xs uppercase tracking-[0.3em] text-copper">
              Mustafa Kemal Atatürk
            </p>
            <p className="mt-1.5 font-display text-sm tracking-[0.25em] text-cream/50">
              1881 – 193<span aria-label="sonsuz" className="text-copper">∞</span>
            </p>
          </Reveal>
        </Container>
      </section>

      <BrandIntro />
      <About />
      <Story />
      <WhyDifferent />
      <WhyUsStrip />
      <Signature />
      <InstagramStrip />
      <AtaturkHardaliye />
      <Reviews />
      <LocationPreview />
    </>
  );
}

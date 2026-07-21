import { igImages, restaurant } from "../../data/restaurant";
import { useContent } from "../../i18n";
import { Container } from "../../components/ui/Container";
import { Reveal } from "../../components/ui/Reveal";

export function MenuHeader() {
  const content = useContent();
  const ui = content.ui.menuPage;
  return (
    <header className="relative overflow-hidden bg-coal pb-14 pt-32 md:pb-20 md:pt-44">
      {/* Fon: lamba ışığında logo işlemeli menü föyü (işletme arşivi) */}
      <div aria-hidden className="absolute inset-0">
        <img
          src={igImages.menuFoyu}
          alt=""
          className="h-full w-full object-cover object-[center_35%] opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-coal via-coal/80 to-coal/50" />
      </div>

      <Container className="relative z-10">
        <Reveal>
          <p className="eyebrow">{restaurant.name}</p>
          <h1 className="mt-4 font-display text-5xl font-semibold leading-none text-cream md:text-7xl">
            {ui.heading}
          </h1>
          <div className="kor-line kor-line--live mt-7 w-32" />
          <p className="mt-7 max-w-lg font-display text-xl italic text-cream/75">
            {ui.tagline}
          </p>
          <p className="mt-4 max-w-lg text-xs leading-relaxed text-cream/45">
            {content.menuNote}
          </p>
        </Reveal>
      </Container>
    </header>
  );
}

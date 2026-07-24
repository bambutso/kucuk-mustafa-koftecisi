import { usePageMeta } from "../hooks/usePageMeta";
import { useContent } from "../i18n";
import { Hero } from "../sections/home/Hero";
import { BrandIntro } from "../sections/home/BrandIntro";
import { About } from "../sections/home/About";
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
      <BrandIntro />
      <About />
      <Story />
      <WhyDifferent />
      <WhyUsStrip />
      <Signature />
      <InstagramStrip />
      <Reviews />
      <LocationPreview />
    </>
  );
}

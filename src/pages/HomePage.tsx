import { usePageMeta } from "../hooks/usePageMeta";
import { useContent } from "../i18n";
import { Hero } from "../sections/home/Hero";
import { BrandIntro } from "../sections/home/BrandIntro";
import { Story } from "../sections/home/Story";
import { WhyDifferent } from "../sections/home/WhyDifferent";
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
      <Story />
      <WhyDifferent />
      <Signature />
      <InstagramStrip />
      <Reviews />
      <LocationPreview />
    </>
  );
}

import { usePageMeta } from "../hooks/usePageMeta";
import { Hero } from "../sections/home/Hero";
import { BrandIntro } from "../sections/home/BrandIntro";
import { Story } from "../sections/home/Story";
import { WhyDifferent } from "../sections/home/WhyDifferent";
import { Signature } from "../sections/home/Signature";
import { Reviews } from "../sections/home/Reviews";
import { LocationPreview } from "../sections/home/LocationPreview";

export default function HomePage() {
  usePageMeta(
    "Küçük Mustafa Köftecisi — 1939'dan Beri | Kırklareli",
    "1939'dan günümüze yaşayan efsane. Meşe kömürünün korunda, dört kuşaktır aynı usulle pişen Kırklareli köftesi.",
  );

  return (
    <>
      <Hero />
      <BrandIntro />
      <Story />
      <WhyDifferent />
      <Signature />
      <Reviews />
      <LocationPreview />
    </>
  );
}

import type { ReactNode } from "react";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { gallerySrcSet } from "../../utils/images";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  lead?: ReactNode;
  /** Arka planda iyice karartılmış atmosfer görseli */
  image?: string;
  children?: ReactNode;
}

/** İç sayfaların ortak açılışı: eyebrow + büyük serif başlık + kor hattı. */
export function PageHeader({
  eyebrow,
  title,
  lead,
  image,
  children,
}: PageHeaderProps) {
  return (
    <header className="relative overflow-hidden bg-coal pb-14 pt-32 md:pb-20 md:pt-44">
      {image && (
        <div aria-hidden className="absolute inset-0">
          <img
            src={image}
            srcSet={gallerySrcSet(image)}
            sizes="100vw"
            decoding="async"
            alt=""
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-coal via-coal/80 to-coal/50" />
        </div>
      )}

      <Container className="relative z-10">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-4 font-display text-5xl font-semibold leading-none text-cream md:text-7xl">
            {title}
          </h1>
          <div className="kor-line kor-line--live mt-7 w-32" />
          {lead && (
            <p className="mt-7 max-w-xl font-display text-xl italic leading-snug text-cream/75">
              {lead}
            </p>
          )}
          {children}
        </Reveal>
      </Container>
    </header>
  );
}

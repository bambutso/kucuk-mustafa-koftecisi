/**
 * Dil kutusundaki ülke bayrakları.
 *
 * Neden SVG, neden emoji değil: Windows'ta (kullanıcıların önemli bir kısmı)
 * bölgesel-gösterge emojileri bayrak olarak ÇİZİLMEZ — "TR" gibi iki harf
 * görünür. Küçük satır içi SVG'ler her platformda aynı durur ve toplamı
 * 2 KB'ın altında kalır.
 *
 * Bayraklar dekoratiftir (`aria-hidden`): dilin adı zaten yanında yazılı.
 */
import type { ReactNode } from "react";
import type { LangCountry } from "../../i18n/types";

interface FlagProps {
  country: LangCountry;
  className?: string;
}

/** Birleşik Krallık ve Yunanistan gibi çok parçalı bayraklar sadeleştirilmiştir. */
const FLAGS: Record<LangCountry, ReactNode> = {
  TR: (
    <>
      <rect width="30" height="20" fill="#E30A17" />
      <circle cx="11" cy="10" r="5" fill="#fff" />
      <circle cx="12.6" cy="10" r="4" fill="#E30A17" />
      <path
        fill="#fff"
        d="m17.9 10 3.5-1.14-2.16 2.98v-3.68l2.16 2.98z"
      />
    </>
  ),
  GB: (
    <>
      <rect width="30" height="20" fill="#012169" />
      <path d="M0 0 30 20M30 0 0 20" stroke="#fff" strokeWidth="4" />
      <path d="M0 0 30 20M30 0 0 20" stroke="#C8102E" strokeWidth="2" />
      <path d="M15 0v20M0 10h30" stroke="#fff" strokeWidth="6.6" />
      <path d="M15 0v20M0 10h30" stroke="#C8102E" strokeWidth="4" />
    </>
  ),
  BG: (
    <>
      <rect width="30" height="20" fill="#fff" />
      <rect y="6.67" width="30" height="6.66" fill="#00966E" />
      <rect y="13.33" width="30" height="6.67" fill="#D62612" />
    </>
  ),
  GR: (
    <>
      <rect width="30" height="20" fill="#0D5EAF" />
      {[1, 3, 5, 7].map((i) => (
        <rect key={i} y={i * 2.22} width="30" height="2.22" fill="#fff" />
      ))}
      <rect width="11.1" height="11.1" fill="#0D5EAF" />
      <path d="M4.44 0v11.1M0 4.44h11.1" stroke="#fff" strokeWidth="2.22" />
    </>
  ),
  SA: (
    <>
      <rect width="30" height="20" fill="#165D31" />
      {/* Sadeleştirme: kılıç çizilir, şehadet hattı taklit edilmez */}
      <path d="M7 14h14" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
      <path fill="#fff" d="m21 14 3.2-1.5v3z" />
      <path d="M8 8.5h13" stroke="#fff" strokeWidth="2.6" opacity=".9" />
    </>
  ),
  ES: (
    <>
      <rect width="30" height="20" fill="#AA151B" />
      <rect y="5" width="30" height="10" fill="#F1BF00" />
    </>
  ),
  JP: (
    <>
      <rect width="30" height="20" fill="#fff" />
      <circle cx="15" cy="10" r="6" fill="#BC002D" />
    </>
  ),
};

export function Flag({ country, className }: FlagProps) {
  return (
    <svg
      aria-hidden
      focusable="false"
      viewBox="0 0 30 20"
      className={className}
    >
      {FLAGS[country]}
    </svg>
  );
}

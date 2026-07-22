import { cn } from "../../utils/cn";

/**
 * "EST. 1939" damgası — çevresindeki yazı çok yavaş döner (hareket
 * azaltma tercihinde sabit kalır). Markanın mühür/hatıra motifi.
 */
export function Stamp({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)} aria-hidden>
      <svg viewBox="0 0 120 120" className="h-full w-full">
        <circle
          cx="60"
          cy="60"
          r="58"
          fill="none"
          strokeWidth="1"
          className="stroke-copper/30"
        />
        <circle
          cx="60"
          cy="60"
          r="37"
          fill="none"
          strokeWidth="0.75"
          className="stroke-copper/40"
        />
        <defs>
          <path
            id="stamp-circle"
            d="M 60,60 m -47,0 a 47,47 0 1,1 94,0 a 47,47 0 1,1 -94,0"
          />
        </defs>
        {/*
          Dönme merkezi viewBox'ın (60,60) noktası — yani dairenin merkezi.
          `fill-box` KULLANILMAZ: o, merkezi yazının sınır kutusuna göre alır;
          yazı çemberi tam kapatmadığı için kutu asimetriktir ve yazı tipi
          geç yüklendiğinde kutu değişip damga gözle görülür biçimde kayar.
        */}
        <g
          className="motion-safe:animate-[spin_55s_linear_infinite]"
          style={{ transformBox: "view-box", transformOrigin: "60px 60px" }}
        >
          <text
            fontSize="8.2"
            letterSpacing="2.4"
            fontWeight="600"
            fontFamily="Inter Variable, Inter, sans-serif"
            className="fill-copper"
          >
            <textPath href="#stamp-circle">
              KÜÇÜK MUSTAFA KÖFTECİSİ · KIRKLARELİ · EST.
            </textPath>
          </text>
        </g>
        <text
          x="60"
          y="68"
          textAnchor="middle"
          fontSize="25"
          fontWeight="700"
          fontFamily="Cormorant Garamond, Georgia, serif"
          className="fill-cream"
        >
          1939
        </text>
      </svg>
    </div>
  );
}

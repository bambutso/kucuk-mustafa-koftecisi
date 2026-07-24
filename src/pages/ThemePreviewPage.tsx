import { useEffect, type CSSProperties } from "react";

/**
 * RENK PALETİ ÖNİZLEME / KARŞILAŞTIRMA  —  /tema-onizleme
 *
 * Bu sayfa YALNIZCA bir karşılaştırma aracıdır; canlı sitenin temasını
 * DEĞİŞTİRMEZ. Tüm renkler global temadan (global.css @theme) bağımsız, satır
 * içi (inline) hex ile verilir — böylece mevcut turuncu tema hiçbir şekilde
 * etkilenmez.
 *
 * Sol panel : canlıdaki köz turuncusu paleti (mevcut).
 * Sağ panel : bordo öneri paleti (krem/bej ağırlıklı, altın vurgulu).
 *
 * Karar verilince beğenilen palet global.css içindeki @theme değişkenlerine
 * taşınır; bu sayfa (ve App.tsx'teki /tema-onizleme rotası) silinebilir.
 */

type Swatch = { hex: string; role: string; token: string };

interface Palette {
  key: "turuncu" | "bordo";
  label: string;
  tag: string;
  note: string;
  pageBg: string; // mockup ana zemini
  surface: string; // kart yüzeyi
  line: string; // çizgi / kenar
  heading: string; // başlık metni
  body: string; // gövde metni
  eyebrow: string; // etiket rengi
  accent: string; // vurgu
  action: string; // buton zemini
  onAction: string; // buton metni
  korEdge: string; // kor hattı kenar rengi
  korMid: string; // kor hattı orta rengi
  swatches: Swatch[];
}

const TURUNCU: Palette = {
  key: "turuncu",
  label: "Mevcut — Köz Turuncusu",
  tag: "CANLIDA",
  note: "Kömür karası zemin, bakır ve köz turuncusu vurgular. Şu an yayında olan palet.",
  pageBg: "#1b1b1b",
  surface: "#2c1e18",
  line: "#5b4033",
  heading: "#f7f2ea",
  body: "rgba(247,242,234,0.66)",
  eyebrow: "#b87333",
  accent: "#b87333",
  action: "#d9772f",
  onAction: "#141110",
  korEdge: "rgba(217,119,47,0.22)",
  korMid: "#d9772f",
  swatches: [
    { hex: "#141110", role: "Derin zemin", token: "coal" },
    { hex: "#1b1b1b", role: "Ana zemin", token: "charcoal" },
    { hex: "#2c1e18", role: "Yüzey / kart", token: "coffee" },
    { hex: "#5b4033", role: "Çizgi", token: "earth" },
    { hex: "#b87333", role: "Vurgu", token: "copper" },
    { hex: "#d9772f", role: "Aksiyon / köz", token: "ember" },
    { hex: "#f7f2ea", role: "Metin", token: "cream" },
  ],
};

const BORDO: Palette = {
  key: "bordo",
  label: "Öneri — Bordo",
  tag: "ÖNERİ",
  note: "Krem/bej ağırlıklı zemin, ana renk koyu bordo, altın metalik vurgu. Koyu alanlar krem/bej ayraçla dengelenir.",
  pageBg: "#f0e6d6",
  surface: "#fbf5ea",
  line: "#d8c4a6",
  heading: "#4a0e0e",
  body: "#5c4a42",
  eyebrow: "#8b1e1e",
  accent: "#6b1414",
  action: "#6b1414",
  onAction: "#f4ece0",
  korEdge: "rgba(160,124,67,0.25)",
  korMid: "#8b1e1e",
  swatches: [
    { hex: "#1a0e0c", role: "Koyu bant", token: "bordo-black" },
    { hex: "#4a0e0e", role: "Derin bordo", token: "bordo-deep" },
    { hex: "#6b1414", role: "Ana bordo", token: "bordo" },
    { hex: "#8b1e1e", role: "Aksiyon bordo", token: "bordo-bright" },
    { hex: "#b08d57", role: "Altın vurgu", token: "gold" },
    { hex: "#e7d9c3", role: "Bej yüzey", token: "beige" },
    { hex: "#f0e6d6", role: "Krem zemin", token: "cream" },
    { hex: "#2a1512", role: "Metin", token: "ink" },
  ],
};

const eyebrowStyle = (color: string): CSSProperties => ({
  fontFamily: "'Inter Variable', Inter, system-ui, sans-serif",
  fontSize: "0.6875rem",
  fontWeight: 600,
  letterSpacing: "0.35em",
  textTransform: "uppercase",
  color,
});

function Swatches({ palette }: { palette: Palette }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(84px, 1fr))",
        gap: "10px",
      }}
    >
      {palette.swatches.map((s) => (
        <div key={s.token} style={{ textAlign: "center" }}>
          <div
            style={{
              height: 56,
              borderRadius: 8,
              background: s.hex,
              border: "1px solid rgba(120,120,120,0.28)",
            }}
          />
          <div
            style={{
              marginTop: 6,
              fontSize: 11,
              fontWeight: 600,
              color: "#e8ded2",
              lineHeight: 1.25,
            }}
          >
            {s.role}
          </div>
          <div
            style={{
              fontFamily: "monospace",
              fontSize: 10.5,
              color: "#9a8f81",
            }}
          >
            {s.hex}
          </div>
        </div>
      ))}
    </div>
  );
}

/** Paletin gerçek arayüzde nasıl durduğunu gösteren küçük maket. */
function Mockup({ palette }: { palette: Palette }) {
  return (
    <div
      style={{
        background: palette.pageBg,
        border: `1px solid ${palette.line}`,
        borderRadius: 14,
        padding: "28px 26px 30px",
      }}
    >
      <div style={eyebrowStyle(palette.eyebrow)}>Kırklareli Köftesi</div>
      <h3
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "1.9rem",
          fontWeight: 600,
          lineHeight: 1.1,
          color: palette.heading,
          margin: "10px 0 0",
        }}
      >
        Tarif 1939'dan beri aynı.
      </h3>
      <p
        style={{
          marginTop: 12,
          fontSize: 14,
          lineHeight: 1.7,
          color: palette.body,
          maxWidth: "34rem",
        }}
      >
        Meşe kömürünün korunda mühürlenen köfte; yanında piyazlık soğan,
        közlenmiş biber ve ev yapımı acı sos.
      </p>

      {/* Buton */}
      <button
        type="button"
        style={{
          marginTop: 20,
          padding: "12px 22px",
          border: "none",
          borderRadius: 4,
          background: palette.action,
          color: palette.onAction,
          fontFamily: "'Inter Variable', Inter, sans-serif",
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: "0.02em",
          cursor: "pointer",
        }}
      >
        Menüyü İncele
      </button>

      {/* Kor hattı */}
      <div
        style={{
          height: 2,
          margin: "26px 0",
          background: `linear-gradient(90deg, transparent, ${palette.korEdge} 18%, ${palette.korMid} 50%, ${palette.korEdge} 82%, transparent)`,
          boxShadow: `0 0 10px ${palette.korEdge}`,
        }}
      />

      {/* Kart */}
      <div
        style={{
          background: palette.surface,
          border: `1px solid ${palette.line}`,
          borderRadius: 8,
          padding: "18px 18px 20px",
          maxWidth: 260,
        }}
      >
        <span
          style={{
            display: "inline-flex",
            height: 40,
            width: 40,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 999,
            border: `1px solid ${palette.accent}`,
            color: palette.accent,
            fontSize: 18,
          }}
        >
          ✦
        </span>
        <div
          style={{
            marginTop: 12,
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "1.35rem",
            fontWeight: 600,
            color: palette.heading,
          }}
        >
          Yüksek Hijyen Standartları
        </div>
        <div style={{ marginTop: 6, fontSize: 13, lineHeight: 1.6, color: palette.body }}>
          Her aşamada titizlik ve kontrol.
        </div>
      </div>
    </div>
  );
}

/** Bordo için: siyah → krem/bej ayraç → bordo geçiş kuralı gösterimi. */
function TransitionRule() {
  const band = (bg: string, color: string, label: string, extra?: CSSProperties) => (
    <div
      style={{
        background: bg,
        color,
        padding: "16px 18px",
        fontSize: 13,
        fontWeight: 600,
        letterSpacing: "0.02em",
        ...extra,
      }}
    >
      {label}
    </div>
  );
  return (
    <div style={{ marginTop: 22 }}>
      <div style={eyebrowStyle("#b08d57")}>Koyu → Bordo geçiş kuralı</div>

      {/* DOĞRU */}
      <div style={{ marginTop: 12, fontSize: 12.5, color: "#8fce9f", fontWeight: 600 }}>
        ✓ Doğru — araya krem/bej ayraç
      </div>
      <div style={{ marginTop: 8, borderRadius: 10, overflow: "hidden" }}>
        {band("#1a0e0c", "#f4ece0", "Koyu / siyah alan")}
        {band("#efe4d2", "#5c4a42", "Krem / bej ayraç", {
          textAlign: "center",
          fontSize: 12,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
        })}
        {band("#6b1414", "#f4ece0", "Bordo alan")}
      </div>

      {/* YANLIŞ */}
      <div style={{ marginTop: 18, fontSize: 12.5, color: "#e6896f", fontWeight: 600 }}>
        ✗ Kaçının — siyahın hemen üstüne düz bordo
      </div>
      <div style={{ marginTop: 8, borderRadius: 10, overflow: "hidden", opacity: 0.85 }}>
        {band("#1a0e0c", "#f4ece0", "Koyu / siyah alan")}
        {band("#6b1414", "#f4ece0", "Bordo alan (kontrast zayıf, sınır bulanık)")}
      </div>
    </div>
  );
}

function Panel({ palette }: { palette: Palette }) {
  const tagBg = palette.key === "turuncu" ? "#d9772f" : "#6b1414";
  return (
    <section
      style={{
        background: "#191512",
        border: "1px solid #33291f",
        borderRadius: 18,
        padding: "26px 24px 30px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "1.7rem",
            fontWeight: 600,
            color: "#f7f2ea",
            margin: 0,
          }}
        >
          {palette.label}
        </h2>
        <span
          style={{
            fontSize: 10.5,
            fontWeight: 700,
            letterSpacing: "0.14em",
            color: "#fff",
            background: tagBg,
            padding: "4px 9px",
            borderRadius: 999,
          }}
        >
          {palette.tag}
        </span>
      </div>
      <p style={{ margin: "10px 0 22px", fontSize: 13.5, lineHeight: 1.6, color: "#b9ab9c" }}>
        {palette.note}
      </p>

      <Swatches palette={palette} />

      <div style={{ marginTop: 26 }}>
        <div style={eyebrowStyle(palette.key === "turuncu" ? "#b87333" : "#b08d57")}>
          Örnek arayüz
        </div>
        <div style={{ marginTop: 12 }}>
          <Mockup palette={palette} />
        </div>
      </div>

      {palette.key === "bordo" && <TransitionRule />}
    </section>
  );
}

export default function ThemePreviewPage() {
  useEffect(() => {
    const prev = document.title;
    document.title = "Renk Paleti Önizleme — Küçük Mustafa Köftecisi";
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    return () => {
      document.title = prev;
      meta.remove();
    };
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0f0c0a",
        color: "#f7f2ea",
        fontFamily: "'Inter Variable', Inter, system-ui, sans-serif",
        padding: "clamp(24px, 5vw, 56px) clamp(16px, 4vw, 48px) 72px",
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div style={eyebrowStyle("#b87333")}>Tasarım · İç Önizleme</div>
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 600,
            lineHeight: 1.05,
            margin: "12px 0 0",
          }}
        >
          Renk Paleti Karşılaştırması
        </h1>
        <p style={{ margin: "14px 0 0", maxWidth: "44rem", fontSize: 15, lineHeight: 1.7, color: "#b9ab9c" }}>
          Mevcut <strong style={{ color: "#d9772f" }}>köz turuncusu</strong> paleti ile önerilen{" "}
          <strong style={{ color: "#c0564f" }}>bordo</strong> paletini yan yana karşılaştırın. Bu
          sayfa yalnızca bir önizlemedir; <strong>canlı sitede turuncu palet olduğu gibi kalır</strong>.
          Karar verdiğinizde beğendiğiniz paleti temaya taşırım.
        </p>

        <div
          style={{
            marginTop: 34,
            display: "grid",
            gap: 22,
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            alignItems: "start",
          }}
        >
          <Panel palette={TURUNCU} />
          <Panel palette={BORDO} />
        </div>

        <p style={{ marginTop: 34, fontSize: 12.5, color: "#7d7264", lineHeight: 1.6 }}>
          Not: Renk kutuları ve maketler yaklaşık temsildir; gerçek tipografi ve fotoğraf dokusuyla
          birlikte son görünüm biraz daha zengin olur. Bordo kararı verilirse tüm bölümler
          (hero, kartlar, butonlar, kor hattı) bu palete göre yeniden ayarlanır.
        </p>
      </div>
    </main>
  );
}

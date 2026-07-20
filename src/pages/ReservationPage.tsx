import { useMemo, useState, type FormEvent } from "react";
import { Armchair, Check, Copy, Phone } from "lucide-react";
import { images, restaurant } from "../data/restaurant";
import { usePageMeta } from "../hooks/usePageMeta";
import { PageHeader } from "../components/ui/PageHeader";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { Button, buttonVariants } from "../components/ui/Button";
import { Input, Labelled, Select } from "../components/ui/Field";
import { cn } from "../utils/cn";

/** 11:00'den gece 02:00'ye, yarım saatlik dilimler */
const TIME_SLOTS: string[] = (() => {
  const slots: string[] = [];
  for (let hour = 11; hour <= 23; hour++) {
    const h = String(hour).padStart(2, "0");
    slots.push(`${h}:00`, `${h}:30`);
  }
  slots.push("00:00", "00:30", "01:00", "01:30", "02:00");
  return slots;
})();

const STEPS = [
  {
    no: "1",
    title: "Bizi arayın",
    text: `${restaurant.phone.display} — telefonun başında hep biri var.`,
  },
  {
    no: "2",
    title: "Gün, saat, kişi sayısı",
    text: "Söylemeniz yeterli; kalabalık gruplar için bir gün önceden aramanızı öneririz.",
  },
  {
    no: "3",
    title: "Masanız hazır",
    text: "Geldiğinizde adınızı söyleyin; közün en güzel gören masalarından biri sizindir.",
  },
];

export default function ReservationPage() {
  usePageMeta(
    "Rezervasyon — Küçük Mustafa Köftecisi | 0288 212 76 12",
    "Masanızı telefonla ayırtın: 0288 212 76 12. Haftanın 7 günü 09:00–03:00, 16 masa 75 sandalye.",
  );

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("19:30");
  const [guests, setGuests] = useState("2");
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const minDate = useMemo(() => new Date().toISOString().slice(0, 10), []);

  const summary = useMemo(() => {
    if (!date) return "";
    const formattedDate = new Date(`${date}T12:00:00`).toLocaleDateString(
      "tr-TR",
      { weekday: "long", day: "numeric", month: "long" },
    );
    const who = name.trim() ? `${name.trim()} adına` : "Adıma";
    return `${who} rezervasyon: ${formattedDate}, saat ${time}, ${guests} kişi.`;
  }, [name, date, time, guests]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
    setCopied(false);
  };

  const copySummary = async () => {
    try {
      await navigator.clipboard.writeText(
        `${summary} — ${restaurant.name}, ${restaurant.phone.display}`,
      );
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      /* pano erişimi engellendiyse sessiz geç; özet zaten ekranda */
    }
  };

  return (
    <>
      <PageHeader
        eyebrow="Rezervasyon"
        title="Masanız közün karşısında ayrılsın"
        lead="Rezervasyonlar telefonla alınır — bir arama, otuz saniye. Aşağıdaki küçük plan, telefonda söyleyeceklerinizi hazırlamanız için."
        image={images.salonInterior}
      />

      <div className="bg-charcoal py-16 md:py-24">
        <Container className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          {/* Nasıl işler + telefon */}
          <div>
            <Reveal>
              <ol className="space-y-8">
                {STEPS.map((step) => (
                  <li key={step.no} className="flex gap-5">
                    <span
                      aria-hidden
                      className="font-display text-5xl font-semibold leading-none text-copper/70"
                    >
                      {step.no}
                    </span>
                    <div>
                      <h2 className="font-display text-2xl font-semibold text-cream">
                        {step.title}
                      </h2>
                      <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-cream/60">
                        {step.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={0.15}>
              <a
                href={restaurant.phone.href}
                className={cn(buttonVariants({ size: "lg" }), "mt-10 w-full sm:w-auto")}
              >
                <Phone aria-hidden className="h-4 w-4" />
                {restaurant.phone.display}
              </a>
              <p className="mt-4 flex items-center gap-2 text-xs text-cream/45">
                <Armchair aria-hidden className="h-3.5 w-3.5" />
                {restaurant.capacity.tables} masa · {restaurant.capacity.seats}{" "}
                sandalye — {restaurant.hours.days},{" "}
                {restaurant.hours.open} – {restaurant.hours.close}
              </p>
            </Reveal>
          </div>

          {/* Arama öncesi plan */}
          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="border border-earth/30 bg-coffee p-7 sm:p-9"
            >
              <p className="eyebrow">Arama Öncesi Küçük Plan</p>
              <p className="mt-3 text-sm leading-relaxed text-cream/60">
                Doldurun, özeti telefonda okuyun ya da kopyalayın.
                <strong className="font-semibold text-cream/80">
                  {" "}
                  Rezervasyon yalnızca telefonla kesinleşir.
                </strong>
              </p>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <Labelled label="Ad Soyad" className="sm:col-span-2">
                  {(id) => (
                    <Input
                      id={id}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Adınız"
                      autoComplete="name"
                    />
                  )}
                </Labelled>
                <Labelled label="Tarih">
                  {(id) => (
                    <Input
                      id={id}
                      type="date"
                      required
                      min={minDate}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  )}
                </Labelled>
                <Labelled label="Saat">
                  {(id) => (
                    <Select
                      id={id}
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                    >
                      {TIME_SLOTS.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </Select>
                  )}
                </Labelled>
                <Labelled label="Kişi Sayısı" className="sm:col-span-2">
                  {(id) => (
                    <Select
                      id={id}
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                    >
                      {["1", "2", "3", "4", "5", "6", "7", "8"].map((n) => (
                        <option key={n} value={n}>
                          {n} kişi
                        </option>
                      ))}
                      <option value="8+">8'den kalabalık</option>
                    </Select>
                  )}
                </Labelled>
              </div>

              <Button type="submit" className="mt-7 w-full">
                Özeti Hazırla
              </Button>

              {submitted && summary && (
                <div
                  role="status"
                  className="mt-6 border border-copper/40 bg-coal/60 p-5"
                >
                  <p className="font-display text-lg italic leading-snug text-cream">
                    “{summary}”
                  </p>
                  <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={restaurant.phone.href}
                      className={buttonVariants({ size: "sm" })}
                    >
                      <Phone aria-hidden className="h-3.5 w-3.5" />
                      Ara ve İlet
                    </a>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={copySummary}
                    >
                      {copied ? (
                        <>
                          <Check aria-hidden className="h-3.5 w-3.5" />
                          Kopyalandı
                        </>
                      ) : (
                        <>
                          <Copy aria-hidden className="h-3.5 w-3.5" />
                          Özeti Kopyala
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              )}

              {submitted && !date && (
                <p role="alert" className="mt-4 text-sm text-ember">
                  Özet için bir tarih seçin.
                </p>
              )}
            </form>
          </Reveal>
        </Container>
      </div>
    </>
  );
}

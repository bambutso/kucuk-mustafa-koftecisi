import { useMemo, useState, type FormEvent } from "react";
import { Armchair, Check, Copy, Phone } from "lucide-react";
import { igImages, restaurant } from "../data/restaurant";
import { useContent, useLang } from "../i18n";
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

export default function ReservationPage() {
  const content = useContent();
  const { locale } = useLang();
  const ui = content.ui.reservation;
  usePageMeta(ui.docTitle, ui.docDesc);

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
      locale,
      { weekday: "long", day: "numeric", month: "long" },
    );
    return ui.summary(name.trim(), formattedDate, time, guests);
  }, [name, date, time, guests, locale, ui]);

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
        eyebrow={ui.eyebrow}
        title={ui.title}
        lead={ui.lead}
        image={igImages.masaDetay}
      />

      <div className="bg-charcoal py-16 md:py-24">
        <Container className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          {/* Nasıl işler + telefon */}
          <div>
            <Reveal>
              <ol className="space-y-8">
                {ui.steps.map((step) => (
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
                {ui.capacityLine(
                  restaurant.capacity.tables,
                  restaurant.capacity.seats,
                  content.hoursDays,
                )}
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
              <p className="eyebrow">{ui.planTitle}</p>
              <p className="mt-3 text-sm leading-relaxed text-cream/60">
                {ui.planText}
                <strong className="font-semibold text-cream/80">
                  {" "}
                  {ui.planStrong}
                </strong>
              </p>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <Labelled label={ui.nameLabel} className="sm:col-span-2">
                  {(id) => (
                    <Input
                      id={id}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={ui.namePlaceholder}
                      autoComplete="name"
                    />
                  )}
                </Labelled>
                <Labelled label={ui.dateLabel}>
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
                <Labelled label={ui.timeLabel}>
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
                <Labelled label={ui.guestsLabel} className="sm:col-span-2">
                  {(id) => (
                    <Select
                      id={id}
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                    >
                      {["1", "2", "3", "4", "5", "6", "7", "8"].map((n) => (
                        <option key={n} value={n}>
                          {ui.guestsOption(n)}
                        </option>
                      ))}
                      <option value="8+">{ui.guestsMany}</option>
                    </Select>
                  )}
                </Labelled>
              </div>

              <Button type="submit" className="mt-7 w-full">
                {ui.submit}
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
                      {ui.callAndTell}
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
                          {ui.copied}
                        </>
                      ) : (
                        <>
                          <Copy aria-hidden className="h-3.5 w-3.5" />
                          {ui.copy}
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              )}

              {submitted && !date && (
                <p role="alert" className="mt-4 text-sm text-ember">
                  {ui.pickDate}
                </p>
              )}
            </form>
          </Reveal>
        </Container>
      </div>
    </>
  );
}

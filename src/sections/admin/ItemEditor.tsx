import { useId, useRef, useState } from "react";
import { ChevronDown, ChevronUp, ImageUp, Trash2, X } from "lucide-react";
import type { ItemTag, MenuItem, SpiceLevel } from "../../types/menu";
import { Input, Labelled, Select, Textarea } from "../../components/ui/Field";
import { boyutMetni, gorseliHazirla } from "../../utils/imageUpload";
import { cn } from "../../utils/cn";

const TAG_OPTIONS: ReadonlyArray<{ value: ItemTag; label: string }> = [
  { value: "sef-onerisi", label: "Şef Önerisi" },
  { value: "cok-tercih", label: "En Çok Tercih" },
  { value: "yeni", label: "Yeni" },
  { value: "yoresel", label: "Yöresel" },
];

interface ItemEditorProps {
  item: MenuItem;
  isFirst: boolean;
  isLast: boolean;
  /** Kategorinin alt kategorileri; boşsa seçim kutusu gösterilmez */
  groups?: ReadonlyArray<{ id: string; title: string }>;
  onChange: (patch: Partial<MenuItem>) => void;
  onMove: (direction: -1 | 1) => void;
  onDelete: () => void;
}

export function ItemEditor({
  item,
  isFirst,
  isLast,
  groups,
  onChange,
  onMove,
  onDelete,
}: ItemEditorProps) {
  const dosyaRef = useRef<HTMLInputElement>(null);
  const dosyaId = useId();
  const [yukleniyor, setYukleniyor] = useState(false);
  const [gorselNotu, setGorselNotu] = useState<string | null>(null);

  const gorselSecildi = async (file: File | undefined) => {
    if (!file) return;
    setYukleniyor(true);
    setGorselNotu(null);
    try {
      const g = await gorseliHazirla(file);
      onChange({ image: g.dataUrl });
      setGorselNotu(
        `Eklendi: ${g.genislik}×${g.yukseklik} ${g.bicim.toUpperCase()}, ${boyutMetni(g.bayt)}`,
      );
    } catch (hata) {
      setGorselNotu(hata instanceof Error ? hata.message : "Görsel eklenemedi.");
    } finally {
      setYukleniyor(false);
      /* Aynı dosya art arda seçilebilsin diye girdi sıfırlanır */
      if (dosyaRef.current) dosyaRef.current.value = "";
    }
  };

  const toggleTag = (tag: ItemTag) => {
    const current = item.tags ?? [];
    const next = current.includes(tag)
      ? current.filter((t) => t !== tag)
      : [...current, tag];
    onChange({ tags: next.length > 0 ? next : undefined });
  };

  return (
    <div className="border border-earth/25 bg-coal/50 p-5">
      <div className="flex items-start justify-between gap-3">
        <p className="font-display text-lg font-semibold text-cream">
          {item.name || "İsimsiz ürün"}
        </p>
        <div className="flex shrink-0 items-center gap-1">
          <button
            type="button"
            onClick={() => onMove(-1)}
            disabled={isFirst}
            aria-label="Yukarı taşı"
            className="p-1.5 text-cream/50 transition-colors hover:text-copper disabled:opacity-25"
          >
            <ChevronUp className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => onMove(1)}
            disabled={isLast}
            aria-label="Aşağı taşı"
            className="p-1.5 text-cream/50 transition-colors hover:text-copper disabled:opacity-25"
          >
            <ChevronDown className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={onDelete}
            aria-label={`Ürünü sil: ${item.name}`}
            className="p-1.5 text-cream/50 transition-colors hover:text-ember"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <Labelled label="Ürün Adı">
          {(id) => (
            <Input
              id={id}
              value={item.name}
              onChange={(e) => onChange({ name: e.target.value })}
            />
          )}
        </Labelled>
        <div className="grid grid-cols-2 gap-4">
          <Labelled label="Fiyat (₺)">
            {(id) => (
              <Input
                id={id}
                type="number"
                min={0}
                step={5}
                /* Boş bırakılırsa fiyat gösterilmez ("fiyat için sorunuz") */
                value={item.price ?? ""}
                onChange={(e) => {
                  const raw = e.target.value.trim();
                  if (raw === "") {
                    onChange({ price: undefined });
                    return;
                  }
                  const value = Number(raw);
                  onChange({ price: Number.isFinite(value) ? value : 0 });
                }}
              />
            )}
          </Labelled>
          <Labelled label="Acılık">
            {(id) => (
              <Select
                id={id}
                value={String(item.spice ?? 0)}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  onChange({
                    spice: value === 0 ? undefined : (value as SpiceLevel),
                  });
                }}
              >
                <option value="0">Acısız</option>
                <option value="1">Hafif acı</option>
                <option value="2">Acı</option>
                <option value="3">Çok acı</option>
              </Select>
            )}
          </Labelled>
        </div>
        {groups && groups.length > 0 && (
          <Labelled
            label="Alt Kategori"
            hint="Kategori içinde hangi başlığın altında görünsün?"
          >
            {(id) => (
              <Select
                id={id}
                value={item.group ?? ""}
                onChange={(e) =>
                  onChange({ group: e.target.value || undefined })
                }
              >
                <option value="">Alt kategorisiz</option>
                {groups.map((group) => (
                  <option key={group.id} value={group.id}>
                    {group.title}
                  </option>
                ))}
              </Select>
            )}
          </Labelled>
        )}
        <Labelled label="Gramaj / Adet" hint="Örn. 250 g · 8 adet (boş bırakılabilir)">
          {(id) => (
            <Input
              id={id}
              value={item.unit ?? ""}
              onChange={(e) =>
                onChange({ unit: e.target.value || undefined })
              }
            />
          )}
        </Labelled>
        <div className="sm:col-span-2">
          <p className="mb-1.5 text-xs uppercase tracking-[0.15em] text-cream/50">
            Görsel
          </p>
          <div className="flex flex-wrap items-start gap-4">
            {item.image ? (
              <div className="relative shrink-0">
                <img
                  src={item.image}
                  alt=""
                  className="h-24 w-24 rounded-[2px] border border-earth/40 object-cover"
                />
                <button
                  type="button"
                  onClick={() => {
                    onChange({ image: undefined, imageAlt: undefined });
                    setGorselNotu(null);
                  }}
                  aria-label="Görseli kaldır"
                  className="absolute -right-2 -top-2 rounded-full border border-earth/50 bg-coal p-1 text-cream/70 transition-colors hover:text-ember"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            ) : (
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-[2px] border border-dashed border-earth/40 text-[0.6rem] uppercase tracking-[0.15em] text-cream/30">
                Görsel yok
              </div>
            )}

            <div className="min-w-[15rem] flex-1 space-y-2">
              {/* Dosya girdisi gizli; tıklama görünür butondan tetiklenir */}
              <input
                ref={dosyaRef}
                id={dosyaId}
                type="file"
                accept="image/*"
                className="sr-only"
                onChange={(e) => void gorselSecildi(e.target.files?.[0])}
              />
              <label
                htmlFor={dosyaId}
                className={cn(
                  "inline-flex cursor-pointer items-center gap-2 border border-copper/50 bg-coal/40 px-4 py-2 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-copper transition-colors",
                  "hover:border-ember hover:text-ember",
                  yukleniyor && "pointer-events-none opacity-60",
                )}
              >
                <ImageUp aria-hidden className="h-4 w-4" />
                {yukleniyor ? "İşleniyor…" : "Bilgisayardan Yükle"}
              </label>

              <Input
                type="text"
                aria-label="Görsel adresi"
                value={item.image?.startsWith("data:") ? "" : (item.image ?? "")}
                placeholder={
                  item.image?.startsWith("data:")
                    ? "Yüklenen görsel kullanılıyor"
                    : "veya adres yapıştırın: https://…"
                }
                disabled={item.image?.startsWith("data:")}
                onChange={(e) => onChange({ image: e.target.value || undefined })}
              />

              <p className="text-[0.7rem] leading-relaxed text-cream/40">
                {gorselNotu ??
                  "Fotoğraf otomatik olarak 1000 piksele küçültülüp WebP'ye çevrilir."}
              </p>
            </div>
          </div>
        </div>

        <Labelled
          label="Görsel Açıklaması"
          hint="Görme engelli okuyucular ve görsel yüklenmezse görünür"
          className="sm:col-span-2"
        >
          {(id) => (
            <Input
              id={id}
              value={item.imageAlt ?? ""}
              onChange={(e) =>
                onChange({ imageAlt: e.target.value || undefined })
              }
              placeholder="Örn. Porsiyon köfte, közlenmiş biberle"
            />
          )}
        </Labelled>
        <Labelled label="Açıklama" className="sm:col-span-2">
          {(id) => (
            <Textarea
              id={id}
              value={item.description}
              onChange={(e) => onChange({ description: e.target.value })}
            />
          )}
        </Labelled>
      </div>

      <fieldset className="mt-4">
        <legend className="mb-2 block font-sans text-xs font-semibold uppercase tracking-[0.14em] text-cream/60">
          Rozetler
        </legend>
        <div className="flex flex-wrap gap-2">
          {TAG_OPTIONS.map((option) => {
            const active = item.tags?.includes(option.value) ?? false;
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => toggleTag(option.value)}
                aria-pressed={active}
                className={cn(
                  "rounded-[2px] border px-3 py-1.5 font-sans text-xs font-semibold transition-colors",
                  active
                    ? "border-ember/60 bg-ember/15 text-ember"
                    : "border-earth/40 text-cream/55 hover:border-copper/50 hover:text-cream",
                )}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </fieldset>
    </div>
  );
}

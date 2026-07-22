import { ChevronDown, ChevronUp, Trash2 } from "lucide-react";
import type { ItemTag, MenuItem, SpiceLevel } from "../../types/menu";
import { Input, Labelled, Select, Textarea } from "../../components/ui/Field";
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
        <Labelled label="Görsel URL" hint="Boş bırakılırsa kart metin olarak görünür">
          {(id) => (
            <Input
              id={id}
              type="url"
              value={item.image ?? ""}
              onChange={(e) =>
                onChange({ image: e.target.value || undefined })
              }
              placeholder="https://…"
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

import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  FolderOpen,
  Plus,
  Trash2,
} from "lucide-react";
import type { MenuCategory, MenuItem } from "../../types/menu";
import { Input, Labelled } from "../../components/ui/Field";
import { Button } from "../../components/ui/Button";
import { ItemEditor } from "./ItemEditor";
import { cn } from "../../utils/cn";

interface CategoryEditorProps {
  category: MenuCategory;
  isFirst: boolean;
  isLast: boolean;
  onChange: (patch: Partial<MenuCategory>) => void;
  onMove: (direction: -1 | 1) => void;
  onDelete: () => void;
}

function newItem(): MenuItem {
  /* Fiyat bilerek boş: doldurulana kadar kartta "fiyat için sorunuz" yazar,
     menüye yanlışlıkla 0 ₺ düşmez. */
  return {
    id: crypto.randomUUID(),
    name: "Yeni Ürün",
    description: "",
  };
}

export function CategoryEditor({
  category,
  isFirst,
  isLast,
  onChange,
  onMove,
  onDelete,
}: CategoryEditorProps) {
  const [expanded, setExpanded] = useState(false);

  const updateItem = (index: number, patch: Partial<MenuItem>) => {
    const items = category.items.map((item, i) =>
      i === index ? { ...item, ...patch } : item,
    );
    onChange({ items });
  };

  const moveItem = (index: number, direction: -1 | 1) => {
    const target = index + direction;
    if (target < 0 || target >= category.items.length) return;
    const items = [...category.items];
    [items[index], items[target]] = [items[target], items[index]];
    onChange({ items });
  };

  const deleteItem = (index: number) => {
    const item = category.items[index];
    if (!window.confirm(`"${item.name}" silinsin mi?`)) return;
    onChange({ items: category.items.filter((_, i) => i !== index) });
  };

  const addItem = () => {
    onChange({ items: [...category.items, newItem()] });
    setExpanded(true);
  };

  const groups = category.groups ?? [];

  const addGroup = () => {
    const id = `grup-${crypto.randomUUID().slice(0, 8)}`;
    onChange({ groups: [...groups, { id, title: "Yeni Alt Kategori" }] });
  };

  const renameGroup = (index: number, title: string) => {
    onChange({
      groups: groups.map((group, i) => (i === index ? { ...group, title } : group)),
    });
  };

  const moveGroup = (index: number, direction: -1 | 1) => {
    const target = index + direction;
    if (target < 0 || target >= groups.length) return;
    const next = [...groups];
    [next[index], next[target]] = [next[target], next[index]];
    onChange({ groups: next });
  };

  /* Alt kategori silinince ürünler silinmez, yalnızca bağı kopar. */
  const deleteGroup = (index: number) => {
    const group = groups[index];
    const used = category.items.filter((item) => item.group === group.id).length;
    const warning = used
      ? `"${group.title}" silinsin mi? ${used} ürün alt kategorisiz kalacak (ürünler silinmez).`
      : `"${group.title}" silinsin mi?`;
    if (!window.confirm(warning)) return;
    onChange({
      groups: groups.filter((_, i) => i !== index),
      items: category.items.map((item) =>
        item.group === group.id ? { ...item, group: undefined } : item,
      ),
    });
  };

  return (
    <section className="border border-earth/30 bg-coffee">
      {/* Kategori başlığı */}
      <div className="flex flex-wrap items-center gap-3 p-5">
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="flex min-w-0 flex-1 items-center gap-3 text-left"
        >
          <FolderOpen aria-hidden className="h-5 w-5 shrink-0 text-copper" />
          <span className="truncate font-display text-2xl font-semibold text-cream">
            {category.title || "İsimsiz kategori"}
          </span>
          <span className="shrink-0 text-xs uppercase tracking-[0.15em] text-cream/40">
            {category.items.length} ürün
          </span>
          <ChevronDown
            aria-hidden
            className={cn(
              "h-5 w-5 shrink-0 text-copper transition-transform duration-300",
              expanded && "rotate-180",
            )}
          />
        </button>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => onMove(-1)}
            disabled={isFirst}
            aria-label="Kategoriyi yukarı taşı"
            className="p-1.5 text-cream/50 transition-colors hover:text-copper disabled:opacity-25"
          >
            <ChevronUp className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => onMove(1)}
            disabled={isLast}
            aria-label="Kategoriyi aşağı taşı"
            className="p-1.5 text-cream/50 transition-colors hover:text-copper disabled:opacity-25"
          >
            <ChevronDown className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={onDelete}
            aria-label={`Kategoriyi sil: ${category.title}`}
            className="p-1.5 text-cream/50 transition-colors hover:text-ember"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>

      {expanded && (
        <div className="border-t border-earth/25 p-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <Labelled label="Kategori Adı">
              {(id) => (
                <Input
                  id={id}
                  value={category.title}
                  onChange={(e) => onChange({ title: e.target.value })}
                />
              )}
            </Labelled>
            <Labelled label="Kategori Notu" hint="Başlığın altında italik görünür">
              {(id) => (
                <Input
                  id={id}
                  value={category.note ?? ""}
                  onChange={(e) =>
                    onChange({ note: e.target.value || undefined })
                  }
                />
              )}
            </Labelled>
          </div>

          {/* Alt kategoriler — ör. Alkollü İçecekler altında Biralar/Rakılar */}
          <div className="mt-5 border border-earth/25 bg-coal/40 p-4">
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs uppercase tracking-[0.15em] text-cream/50">
                Alt Kategoriler
              </p>
              <Button type="button" variant="outline" size="sm" onClick={addGroup}>
                <Plus aria-hidden className="h-3.5 w-3.5" />
                Alt Kategori Ekle
              </Button>
            </div>

            {groups.length === 0 ? (
              <p className="mt-3 text-xs leading-relaxed text-cream/40">
                Alt kategori yok — ürünler tek liste hâlinde görünür. Ekledikten
                sonra her ürünün kendi kartından hangi alt kategoriye gireceğini
                seçebilirsiniz.
              </p>
            ) : (
              <ul className="mt-3 space-y-2">
                {groups.map((group, index) => (
                  <li key={group.id} className="flex items-center gap-2">
                    <Input
                      aria-label={`Alt kategori adı: ${group.title}`}
                      value={group.title}
                      onChange={(e) => renameGroup(index, e.target.value)}
                    />
                    <span className="shrink-0 text-xs tabular-nums text-cream/35">
                      {
                        category.items.filter((item) => item.group === group.id)
                          .length
                      }
                    </span>
                    <button
                      type="button"
                      onClick={() => moveGroup(index, -1)}
                      disabled={index === 0}
                      aria-label="Alt kategoriyi yukarı taşı"
                      className="p-1.5 text-cream/50 transition-colors hover:text-copper disabled:opacity-25"
                    >
                      <ChevronUp className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => moveGroup(index, 1)}
                      disabled={index === groups.length - 1}
                      aria-label="Alt kategoriyi aşağı taşı"
                      className="p-1.5 text-cream/50 transition-colors hover:text-copper disabled:opacity-25"
                    >
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => deleteGroup(index)}
                      aria-label={`Alt kategoriyi sil: ${group.title}`}
                      className="p-1.5 text-cream/50 transition-colors hover:text-ember"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="mt-5 space-y-4">
            {category.items.map((item, index) => (
              <ItemEditor
                key={item.id}
                item={item}
                isFirst={index === 0}
                isLast={index === category.items.length - 1}
                groups={groups}
                onChange={(patch) => updateItem(index, patch)}
                onMove={(direction) => moveItem(index, direction)}
                onDelete={() => deleteItem(index)}
              />
            ))}
          </div>

          <Button
            type="button"
            variant="outline"
            size="sm"
            className="mt-5"
            onClick={addItem}
          >
            <Plus aria-hidden className="h-3.5 w-3.5" />
            Ürün Ekle
          </Button>
        </div>
      )}
    </section>
  );
}

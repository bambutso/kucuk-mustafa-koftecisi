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
  return {
    id: crypto.randomUUID(),
    name: "Yeni Ürün",
    description: "",
    price: 0,
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

          <div className="mt-5 space-y-4">
            {category.items.map((item, index) => (
              <ItemEditor
                key={item.id}
                item={item}
                isFirst={index === 0}
                isLast={index === category.items.length - 1}
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

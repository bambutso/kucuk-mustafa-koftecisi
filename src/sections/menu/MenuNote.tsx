import { Info } from "lucide-react";
import { MENU_NOTE } from "../../data/menu";

export function MenuNote() {
  return (
    <aside className="mt-4 flex items-start gap-3 border border-earth/30 bg-coffee/40 p-5">
      <Info aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-copper" />
      <p className="text-xs leading-relaxed text-cream/55">
        {MENU_NOTE} Alkollü servis yalnızca salonda geçerlidir. Fiyatlara KDV
        dahildir.
      </p>
    </aside>
  );
}

import { Info } from "lucide-react";
import { useContent } from "../../i18n";

export function MenuNote() {
  const content = useContent();
  return (
    <aside className="mt-4 flex items-start gap-3 border border-earth/30 bg-coffee/40 p-5">
      <Info aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-copper" />
      <p className="text-xs leading-relaxed text-cream/55">
        {content.menuNote} {content.ui.menuPage.menuNoteExtra}
      </p>
    </aside>
  );
}

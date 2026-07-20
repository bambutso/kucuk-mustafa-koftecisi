import { Flame } from "lucide-react";
import type { SpiceLevel } from "../../types/menu";
import { cn } from "../../utils/cn";

const LABELS: Record<SpiceLevel, string> = {
  1: "Hafif acı",
  2: "Acı",
  3: "Çok acı",
};

export function SpiceIndicator({ level }: { level: SpiceLevel }) {
  return (
    <span
      className="inline-flex items-center gap-0.5"
      role="img"
      aria-label={`Acılık: ${LABELS[level]}`}
      title={LABELS[level]}
    >
      {([1, 2, 3] as const).map((step) => (
        <Flame
          key={step}
          aria-hidden
          className={cn(
            "h-3 w-3",
            step <= level ? "text-ember" : "text-cream/15",
          )}
        />
      ))}
    </span>
  );
}

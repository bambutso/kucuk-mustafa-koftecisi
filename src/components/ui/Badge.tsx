import type { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

export const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-[2px] px-2 py-0.5 font-sans text-[0.625rem] font-semibold uppercase tracking-[0.14em]",
  {
    variants: {
      variant: {
        ember: "bg-ember/15 text-ember",
        copper: "bg-copper/15 text-copper",
        cream: "bg-cream/10 text-cream/80",
        earth: "bg-earth/30 text-cream/70",
      },
    },
    defaultVariants: {
      variant: "copper",
    },
  },
);

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

import type { ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

/**
 * shadcn/ui deseninde buton: cva ile varyant yönetimi.
 * Link olarak kullanmak için `buttonVariants` doğrudan className'e verilir.
 */
export const buttonVariants = cva(
  "inline-flex select-none items-center justify-center gap-2 rounded-[2px] font-sans font-semibold tracking-wide transition-all duration-300 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-ember text-coal hover:bg-copper hover:shadow-[0_0_28px_rgba(217,119,47,0.45)] active:translate-y-px",
        outline:
          "border border-cream/25 bg-transparent text-cream hover:border-copper hover:text-copper active:translate-y-px",
        ghost: "text-cream/80 hover:text-ember",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-6 text-sm",
        lg: "h-12 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

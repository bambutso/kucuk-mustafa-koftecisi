import type {
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import { useId } from "react";
import { cn } from "../../utils/cn";

const fieldClasses =
  "w-full rounded-[2px] border border-earth/40 bg-coffee/60 px-3 font-sans text-sm text-cream placeholder:text-cream/35 transition-colors focus:border-copper focus:outline-none disabled:opacity-50";

interface LabelledProps {
  label: string;
  hint?: string;
  children: (id: string) => ReactNode;
  className?: string;
}

/** Etiket + alan sarmalayıcısı; id eşleşmesini kendi kurar. */
export function Labelled({ label, hint, children, className }: LabelledProps) {
  const id = useId();
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-[0.14em] text-cream/60"
      >
        {label}
      </label>
      {children(id)}
      {hint && <p className="mt-1.5 text-xs text-cream/40">{hint}</p>}
    </div>
  );
}

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(fieldClasses, "h-10", className)} {...props} />;
}

export function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(fieldClasses, "min-h-24 py-2.5 leading-relaxed", className)}
      {...props}
    />
  );
}

export function Select({
  className,
  children,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select className={cn(fieldClasses, "h-10 appearance-none", className)} {...props}>
      {children}
    </select>
  );
}

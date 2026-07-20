import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Tailwind sınıflarını çakışmaları çözerek birleştirir (shadcn/ui deseni). */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

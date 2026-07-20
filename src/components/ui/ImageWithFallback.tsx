import { useState, type ImgHTMLAttributes } from "react";
import { Flame } from "lucide-react";
import { cn } from "../../utils/cn";

interface ImageWithFallbackProps extends ImgHTMLAttributes<HTMLImageElement> {
  /** Görsel yüklenemezse fallback üzerinde görünen kısa metin */
  fallbackLabel?: string;
}

/**
 * Dış kaynaklı görseller (Unsplash / işletme CDN'i) kırılırsa
 * marka paletinde zarif bir yer tutucuya düşer.
 */
export function ImageWithFallback({
  fallbackLabel,
  className,
  alt = "",
  ...props
}: ImageWithFallbackProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          "flex items-center justify-center bg-gradient-to-br from-coffee via-charcoal to-coal",
          className,
        )}
      >
        <div className="px-4 text-center">
          <Flame aria-hidden className="mx-auto h-6 w-6 text-copper/60" />
          <p className="mt-2 font-display text-sm italic text-cream/50">
            {fallbackLabel ?? alt}
          </p>
        </div>
      </div>
    );
  }

  return (
    <img
      className={className}
      alt={alt}
      onError={() => setFailed(true)}
      {...props}
    />
  );
}

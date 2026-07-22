import { useState, type ImgHTMLAttributes } from "react";
import { Flame } from "lucide-react";
import { cn } from "../../utils/cn";
import { gallerySrcSet } from "../../utils/images";

interface ImageWithFallbackProps extends ImgHTMLAttributes<HTMLImageElement> {
  /** Görsel yüklenemezse fallback üzerinde görünen kısa metin */
  fallbackLabel?: string;
}

/**
 * Dış kaynaklı görseller (Unsplash / işletme CDN'i) kırılırsa
 * marka paletinde zarif bir yer tutucuya düşer.
 *
 * Yerel galeri kareleri için srcSet'i dosya adından kendisi kurar; çağrı yeri
 * yalnızca `sizes` bildirir. `sizes` verilmezse tarayıcı 100vw varsayar ve en
 * büyük sürümü indirir — ızgara içindeki görsellerde mutlaka bildirin.
 */
export function ImageWithFallback({
  fallbackLabel,
  className,
  alt = "",
  src,
  srcSet,
  ...props
}: ImageWithFallbackProps) {
  const [failed, setFailed] = useState(false);
  const responsiveSrcSet =
    srcSet ?? (typeof src === "string" ? gallerySrcSet(src) : undefined);

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
      src={src}
      srcSet={responsiveSrcSet}
      onError={() => setFailed(true)}
      {...props}
    />
  );
}

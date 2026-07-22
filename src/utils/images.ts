import { IMAGE_WIDTHS } from "../data/imageManifest";

/**
 * Yerel galeri görselleri birden çok genişlikte üretilir (scripts/gen-images.mjs).
 * Buradaki yardımcılar dosya adından srcSet kurar; çağrı yerleri yalnızca
 * `sizes` bildirir, doğru dosyayı tarayıcı seçer.
 */

/** `.../gallery/ig-kofte-tabak-1440.webp` → `ig-kofte-tabak` */
const NAME_PATTERN = /\/gallery\/([a-z0-9-]+)-\d+\.webp$/;

/** Bir galeri karesinin en büyük sürümünün adresi. */
export function galleryImage(name: string, baseUrl: string): string {
  const widths = IMAGE_WIDTHS[name];
  if (!widths?.length) {
    throw new Error(
      `Galeri görseli üretilmemiş: ${name} — media/gallery'ye ekleyip "npm run images" çalıştırın.`,
    );
  }
  return `${baseUrl}gallery/${name}-${widths[widths.length - 1]}.webp`;
}

/**
 * Yerel bir galeri adresi için srcSet üretir.
 * Dış kaynaklı görsellerde (Unsplash / Wix) undefined döner — onlar
 * boyutlandırmayı kendi CDN parametreleriyle yapar.
 */
export function gallerySrcSet(src: string): string | undefined {
  const match = src.match(NAME_PATTERN);
  if (!match) return undefined;
  const [, name] = match;
  const widths = IMAGE_WIDTHS[name];
  if (!widths?.length) return undefined;
  const dir = src.slice(0, src.lastIndexOf("/") + 1);
  return widths.map((w) => `${dir}${name}-${w}.webp ${w}w`).join(", ");
}

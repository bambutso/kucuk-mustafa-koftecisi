/**
 * Yönetim panelinde seçilen fotoğrafı tarayıcıda küçültüp veri adresine
 * (data URL) çevirir.
 *
 * Neden sunucuya yüklemiyoruz: site statik olarak yayınlanıyor, yükleme
 * alacak bir sunucu ucu yok. Bu yüzden görsel menü verisiyle birlikte
 * localStorage'da saklanır ve JSON dışa aktarımına dahil olur.
 *
 * Bu yüzden BOYUT kritik: telefondan çekilmiş 4 MB'lik bir kare olduğu gibi
 * saklanırsa localStorage kotası (~5 MB) birkaç görselde dolar. Kare en fazla
 * MAX_GENISLIK'e indirilir ve WebP'ye çevrilir — tipik sonuç 80–150 KB.
 */

/** Menü kartı en geniş kapta ~350px; 1000px baskı/retina için fazlasıyla yeter. */
const MAX_GENISLIK = 1000;
const KALITE = 0.75;

export interface HazirGorsel {
  dataUrl: string;
  /** Veri adresinin yaklaşık bayt boyutu (base64 şişmesi dahil) */
  bayt: number;
  genislik: number;
  yukseklik: number;
  bicim: "webp" | "jpeg";
}

/** Tarayıcı WebP üretebiliyor mu? (Safari 14+ ve tüm güncel tarayıcılar evet) */
function webpDestekli(canvas: HTMLCanvasElement): boolean {
  return canvas.toDataURL("image/webp").startsWith("data:image/webp");
}

function dosyayiOku(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error("Dosya okunamadı."));
    reader.readAsDataURL(file);
  });
}

function gorselYukle(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("Görsel çözümlenemedi."));
    img.src = src;
  });
}

/**
 * Seçilen dosyayı menüde kullanılmaya hazır veri adresine çevirir.
 * Hata durumunda anlaşılır bir mesajla `throw` eder.
 */
export async function gorseliHazirla(file: File): Promise<HazirGorsel> {
  if (!file.type.startsWith("image/")) {
    throw new Error("Bu bir görsel dosyası değil.");
  }
  /* Ham dosya sınırı: 20 MB üstü kareler tarayıcıda belleği zorluyor. */
  if (file.size > 20 * 1024 * 1024) {
    throw new Error("Dosya çok büyük (20 MB üstü). Daha küçük bir kare seçin.");
  }

  const img = await gorselYukle(await dosyayiOku(file));

  const oran = Math.min(1, MAX_GENISLIK / img.naturalWidth);
  const genislik = Math.round(img.naturalWidth * oran);
  const yukseklik = Math.round(img.naturalHeight * oran);

  const canvas = document.createElement("canvas");
  canvas.width = genislik;
  canvas.height = yukseklik;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Tarayıcı görseli işleyemedi.");
  ctx.drawImage(img, 0, 0, genislik, yukseklik);

  const bicim = webpDestekli(canvas) ? "webp" : "jpeg";
  const dataUrl = canvas.toDataURL(`image/${bicim}`, KALITE);

  /* base64 uzunluğundan yaklaşık bayt: her 4 karakter 3 bayt taşır. */
  const base64 = dataUrl.slice(dataUrl.indexOf(",") + 1);
  const bayt = Math.round((base64.length * 3) / 4);

  return { dataUrl, bayt, genislik, yukseklik, bicim };
}

/** 145280 → "142 KB" */
export function boyutMetni(bayt: number): string {
  if (bayt < 1024) return `${bayt} B`;
  if (bayt < 1024 * 1024) return `${Math.round(bayt / 1024)} KB`;
  return `${(bayt / (1024 * 1024)).toFixed(1)} MB`;
}

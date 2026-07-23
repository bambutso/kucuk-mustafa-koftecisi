/**
 * Yönetim panelinin sunucuyla konuştuğu tek yer.
 *
 * Şifre sunucuda `password_hash` ile saklanır, tarayıcıya hiç inmez. Panel
 * şifreyi yalnızca `sessionStorage`'da tutar (sekme kapanınca silinir) ve her
 * istekte `X-Yonetim-Sifresi` başlığıyla gönderir.
 */
import type { MenuCategory } from "../types/menu";

const API = `${import.meta.env.BASE_URL}api`;
const SIFRE_ANAHTARI = "kmk-yonetim-sifresi";

export function sifreyiHatirla(sifre: string): void {
  try {
    sessionStorage.setItem(SIFRE_ANAHTARI, sifre);
  } catch {
    /* depolama kapalıysa şifre yalnızca bu istekte kullanılır */
  }
}

export function kayitliSifre(): string | null {
  try {
    return sessionStorage.getItem(SIFRE_ANAHTARI);
  } catch {
    return null;
  }
}

export function sifreyiUnut(): void {
  try {
    sessionStorage.removeItem(SIFRE_ANAHTARI);
  } catch {
    /* önemsiz */
  }
}

/** Sunucu JSON yerine HTML döndüyse anlaşılır hata üretir. */
async function yaniti_coz(yanit: Response): Promise<Record<string, unknown>> {
  const metin = await yanit.text();
  try {
    return JSON.parse(metin) as Record<string, unknown>;
  } catch {
    throw new Error(
      yanit.status === 404
        ? "Sunucu ucu bulunamadı. api/ klasörü sunucuya yüklenmiş mi?"
        : `Sunucudan beklenmeyen yanıt (HTTP ${yanit.status}). PHP çalışmıyor olabilir.`,
    );
  }
}

async function istek(
  yol: string,
  sifre: string,
  ayar: RequestInit = {},
): Promise<Record<string, unknown>> {
  let yanit: Response;
  try {
    yanit = await fetch(`${API}/${yol}`, {
      ...ayar,
      headers: { ...(ayar.headers ?? {}), "X-Yonetim-Sifresi": sifre },
    });
  } catch {
    throw new Error("Sunucuya ulaşılamadı. İnternet bağlantınızı kontrol edin.");
  }
  const govde = await yaniti_coz(yanit);
  if (!yanit.ok) {
    if (yanit.status === 401) sifreyiUnut();
    throw new Error(String(govde.hata ?? `İşlem başarısız (HTTP ${yanit.status}).`));
  }
  return govde;
}

/** Panel girişi: şifreyi sunucuda doğrular. */
export async function girisYap(sifre: string): Promise<void> {
  await istek("menu.php?giris=1", sifre, { method: "POST" });
  sifreyiHatirla(sifre);
}

/** Menüyü tüm ziyaretçilere yayınlar. */
export async function menuyuYayinla(
  categories: MenuCategory[],
  sifre: string,
): Promise<{ kategori: number; urun: number }> {
  const govde = await istek("menu.php", sifre, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(categories),
  });
  return {
    kategori: Number(govde.kategori ?? 0),
    urun: Number(govde.urun ?? 0),
  };
}

/** Görseli sunucuya yükler; menüde kullanılacak yolu döndürür. */
export async function gorselYukle(
  dosya: File,
  sifre: string,
): Promise<{ yol: string; bayt: number; genislik: number; yukseklik: number }> {
  const form = new FormData();
  form.append("dosya", dosya);
  const govde = await istek("gorsel.php", sifre, { method: "POST", body: form });
  return {
    yol: String(govde.yol),
    bayt: Number(govde.bayt ?? 0),
    genislik: Number(govde.genislik ?? 0),
    yukseklik: Number(govde.yukseklik ?? 0),
  };
}

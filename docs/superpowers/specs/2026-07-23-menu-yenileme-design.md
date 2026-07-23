# Menü yenileme — klasik föy düzeni + işletmenin güncel menüsü

Tarih: 2026-07-23 · Durum: onaylandı, uygulanıyor

## Amaç

Sitedeki menü (9 kategori / 64 ürün) işletmenin **güncel basılı menüsüyle** değiştirilecek
(7 kategori / 111 kalem) ve sunum kart ızgarasından **klasik föy düzenine** (ad solda,
noktalı hat, fiyat sağda) geçecek. Ek olarak işletmeden gelen gramaj bilgileri işlenecek
ve artık verilmeyen hizmetler siteden kaldırılacak.

## Kaynaklar

1. Kullanıcının verdiği JSON — işletmenin güncel menüsü, **tam ve kesin** (eski fiyat
   kuşakları geçersiz; listede olmayan ürünler siteden silinir).
2. İşletme yetkilisi (Doruk Kalınoğlu) mesajı, 22.07.2026 19:30–19:38:
   - Paket servis **yok**, alkollü servis **var**.
   - Ürün gramajları (aşağıda).
   - Güveçte Kaşarlı Mantar ve Paçanga Böreği menüden çıktı.
   - Alkollü ürünlerin altına servis/garnitür ifadesi (**"peynir ve kavunla"**)
     yazılmayacak — müşteri o şekilde servis edildiğini sanabilir.
   - Ürün görselleri sonra gönderilecek (mutfaktan çekilecek).

## Onaylanan kararlar

| Konu | Karar |
|---|---|
| Görünüm | Klasik liste + görseli olan üründe küçük kare |
| Kapsam | Tam değiştir (birleştirme yok) |
| Açıklamalar | Eşleşen ürünlerde koru, yeni ürünlere yaz |
| Rakı | Marka başlığı + ölçü/fiyat listesi |
| Gel-Al | Paket Servis ile birlikte tamamen kalkar |
| Köfteler | Ayrı "İmza Köfteler" kategorisi korunur |
| Alkol metni | Hiç açıklama olmasın |
| İçecekler | Açıklamasız (alkol gibi) |

## Kategori yapısı — 7 sekme / 111 kalem

| # | id | Başlık | Kalem | Alt gruplar |
|---|---|---|---|---|
| 1 | `imza-kofteler` | İmza Köfteler | 5 | — |
| 2 | `baslangiclar` | Başlangıçlar | 26 | `salatalar` `ara-sicaklar` `mezeler` `soguk-mezeler` |
| 3 | `izgaralar` | Izgara Çeşitleri | 14 | — |
| 4 | `baliklar` | Balık Çeşitlerimiz | 8 | `izgara-balik` `kizartma-balik` |
| 5 | `tatlilar` | Tatlılar | 7 | — |
| 6 | `icecekler` | İçecekler | 19 | `soguk-icecekler` `sicak-icecekler` |
| 7 | `alkollu-icecekler` | Alkollü İçecekler | 32 | `rakilar` `saraplar` `kadeh-sarap` `biralar` `yabanci-alkoller` |

Rakılar ayrı sekme değil — 2026-07-22'de alınan "alkol tek sekme + alt başlık"
kararı (commit `f7b275f`) korunuyor. Menüdeki 19 ızgaradan 5 köfte İmza'ya
ayrıldığı için Izgara Çeşitleri 14 kalemdir.

## Gramajlar (işletmeden)

Küçük Mustafa Köftesi 225 g · 8 adet · Acılı Köfte 230 g · 2 adet ·
Kaşarlı Köfte 240 g · 2 adet · Pastırmalı Köfte 240 g · 2 adet ·
Şefin Köftesi 250 g · 2 adet · Tava Ciğer 225 g · Antrikot 200 g ·
Bonfile 200 g · Kasap Sucuk 200 g · Ciğer Şiş 225 g · 3 şiş ·
Külbastı 270 g · 3 şiş · Istranca Kuzu Şiş 260 g · 3 şiş ·
Istranca Kuzu Pirzola 240 g · 3 adet · Istranca Kuzu Lokum 240 g · 4 adet ·
Küşleme 180–200 g · 1 adet · soğuk mezeler grup notu "ortalama 150–175 g".

**Düzeltme:** commit `ac5ae0e` beş imza köftenin hepsine `225 g · 8 adet` yazmıştı;
yalnızca düz köfte öyle.

## Veri modeli

```ts
export interface PriceVariant { label: string; price: number }
export interface MenuItem { …; variants?: PriceVariant[] }
```

Yeni tip/kategori kavramı yok. `variants` rakı ölçülerini taşır; `label` sabit
küçük bir kimlik kümesidir (`tek` `duble` `20cl` `35cl` `50cl` `70cl` `100cl`),
çevirisi `ui.menuPage.servings` üzerinden yapılır, karşılığı yoksa ham gösterilir.

## Bileşenler

- **`MenuRow.tsx` (yeni)** — föy satırı: opsiyonel 72px görsel · ad · `.price-leader`
  noktalı hat · fiyat · gramaj satırı · italik açıklama · rozet/acılık · 3D butonu.
  `variants` doluysa fiyat yerine ölçü/fiyat listesi basar.
- **`MenuCard.tsx`** — kaldırılır; hem kategori bölümleri hem arama sonuçları
  `MenuRow` kullanır.
- **`CategorySection.tsx`** — grup notu desteği (`groups[].note`) ve fiyatsız
  kategorilerde çerçeveli not kutusu eklenir.

## Fiyatsız kategori (Balık)

Satırlarda fiyat sütunu boş kalır; kategori başlığının altında çerçeveli not:
"Ürünlerin fiyatları alış fiyatına göre belirlenmektedir. Lütfen personelimizden
bilgi alınız." Not 7 dile çevrilir.

## Menü dışı değişiklikler

- `restaurant.ts` — `services` listesinden "Paket Servis" ve "Gel Al" çıkar;
  `services` kart dizisinden `paket` ve `gelal` kartları silinir. Kalan:
  Yerinde Servis · Alkollü Servis · Özel Organizasyon.
- İlgili 7 dildeki metinler, footer rozetleri, Mekân sayfası ve JSON-LD temizlenir.
- Alkolde "fiyatlar tahminîdir" kategori notu kalkar (artık gerçek fiyat var).
- Peja'nın "Alkolsüz" bilgisi açıklama değil **rozet** olarak kalır.

## Riskler

1. **localStorage maskelemesi (kritik).** `menuStore.ts` anahtarı `kmk-menu-v1`;
   panelden bir kez kaydedilmişse eski 64 ürünlük menü yeni menüyü ezer ve
   değişiklik görünmez. Anahtar `kmk-menu-v2` yapılır, eski anahtar silinir.
2. **iOS Safari.** Kategori çubuğu mobilde yapışkan olmayacak (`lg:sticky`
   korunur) — üst kenara tutturulan eleman cam akışını bozuyor.
3. **QR linkleri.** `?model3d=kucuk-mustafa-koftesi` ve eski `porsiyon-kofte`
   takması çalışmaya devam etmeli; imza köfte id'si değişmez.
4. **Görsel eşleme.** Silinen ürünlerin görselleri (`peynirTatlisi`, `pacanga`…)
   arşiv için `restaurant.ts`'te adıyla durur, menüde kullanılmaz.

## Doğrulama

`npm run build` (tsc + vite + ön-render) temiz geçmeli; menü sayfası 7 sekme /
111 kalem, konsol hatasız; balık notu ve rakı ölçüleri görünür; `/yonetim`
panelinde ölçü düzenleme çalışır.

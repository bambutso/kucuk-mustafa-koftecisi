import { useState, type FormEvent } from "react";
import { Loader2, Lock } from "lucide-react";
import { Container } from "../../components/ui/Container";
import { Button } from "../../components/ui/Button";
import { Input, Labelled } from "../../components/ui/Field";
import { Stamp } from "../../components/ui/Stamp";
import { girisYap } from "../../utils/yonetimApi";

/**
 * Giriş SUNUCUDA doğrulanır (api/menu.php).
 *
 * Şifre yalnızca özet (hash) olarak sunucuda durur; site paketinde şifreye
 * dair hiçbir şey yoktur — eskiden burada duran sabit PIN kaldırıldı, çünkü
 * paketi indiren herkes onu okuyabiliyordu. Doğrulanan şifre sekme kapanana
 * kadar bellekte tutulur ve yayınlama isteklerinde kullanılır.
 */
export function AdminLogin({ onSuccess }: { onSuccess: () => void }) {
  const [sifre, setSifre] = useState("");
  const [hata, setHata] = useState<string | null>(null);
  const [bekliyor, setBekliyor] = useState(false);

  const gonder = async (event: FormEvent) => {
    event.preventDefault();
    if (!sifre) return;
    setBekliyor(true);
    setHata(null);
    try {
      await girisYap(sifre);
      onSuccess();
    } catch (e) {
      setHata(e instanceof Error ? e.message : "Giriş yapılamadı.");
      setSifre("");
    } finally {
      setBekliyor(false);
    }
  };

  return (
    <div className="flex min-h-svh items-center bg-charcoal pt-16">
      <Container className="max-w-sm">
        <div className="border border-earth/30 bg-coffee p-8 text-center">
          <Stamp className="mx-auto h-24 w-24 opacity-80" />
          <h1 className="mt-6 font-display text-3xl font-semibold text-cream">
            Yönetim Paneli
          </h1>
          <p className="mt-2 text-sm text-cream/55">
            Menü düzenlemek için giriş yapın.
          </p>

          <form onSubmit={(e) => void gonder(e)} className="mt-7 text-left">
            <Labelled label="Şifre">
              {(id) => (
                <Input
                  id={id}
                  type="password"
                  autoComplete="current-password"
                  value={sifre}
                  onChange={(e) => {
                    setSifre(e.target.value);
                    setHata(null);
                  }}
                  placeholder="••••••••"
                />
              )}
            </Labelled>
            {hata && (
              <p role="alert" className="mt-3 text-sm leading-relaxed text-ember">
                {hata}
              </p>
            )}
            <Button type="submit" className="mt-5 w-full" disabled={bekliyor}>
              {bekliyor ? (
                <Loader2 aria-hidden className="h-4 w-4 animate-spin" />
              ) : (
                <Lock aria-hidden className="h-4 w-4" />
              )}
              {bekliyor ? "Kontrol ediliyor…" : "Giriş Yap"}
            </Button>
          </form>

          <p className="mt-6 text-xs leading-relaxed text-cream/40">
            Şifre sunucuda doğrulanır ve yalnızca bu sekme açık kaldığı sürece
            hatırlanır.
          </p>
        </div>
      </Container>
    </div>
  );
}

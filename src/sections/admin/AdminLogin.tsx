import { useState, type FormEvent } from "react";
import { Lock } from "lucide-react";
import { Container } from "../../components/ui/Container";
import { Button } from "../../components/ui/Button";
import { Input, Labelled } from "../../components/ui/Field";
import { Stamp } from "../../components/ui/Stamp";

/**
 * DEMO girişi: PIN istemci tarafında kontrol edilir ve yalnızca bu oturumda
 * geçerlidir. Gerçek yayında sunucu taraflı kimlik doğrulama şarttır.
 */
const DEMO_PIN = "1939";

export function AdminLogin({ onSuccess }: { onSuccess: () => void }) {
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (pin === DEMO_PIN) {
      onSuccess();
    } else {
      setError(true);
      setPin("");
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

          <form onSubmit={handleSubmit} className="mt-7 text-left">
            <Labelled label="PIN" hint="Demo PIN: 1939">
              {(id) => (
                <Input
                  id={id}
                  type="password"
                  inputMode="numeric"
                  autoComplete="off"
                  value={pin}
                  onChange={(e) => {
                    setPin(e.target.value);
                    setError(false);
                  }}
                  placeholder="••••"
                  className="text-center tracking-[0.5em]"
                />
              )}
            </Labelled>
            {error && (
              <p role="alert" className="mt-3 text-sm text-ember">
                PIN hatalı; tekrar deneyin.
              </p>
            )}
            <Button type="submit" className="mt-5 w-full">
              <Lock aria-hidden className="h-4 w-4" />
              Giriş Yap
            </Button>
          </form>

          <p className="mt-6 text-xs leading-relaxed text-cream/40">
            Bu bir demo girişidir; canlı yayında sunucu taraflı kimlik
            doğrulama kullanılmalıdır.
          </p>
        </div>
      </Container>
    </div>
  );
}

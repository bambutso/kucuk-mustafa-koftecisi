import { useMemo, useRef, useState, type ChangeEvent } from "react";
import { Link } from "react-router-dom";
import {
  AlertTriangle,
  Download,
  ExternalLink,
  LogOut,
  Plus,
  RotateCcw,
  Save,
  Upload,
} from "lucide-react";
import type { MenuCategory } from "../types/menu";
import {
  getMenuSnapshot,
  isValidMenu,
  resetMenu,
  saveMenu,
  useMenu,
} from "../store/menuStore";
import { usePageMeta } from "../hooks/usePageMeta";
import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { AdminLogin } from "../sections/admin/AdminLogin";
import { CategoryEditor } from "../sections/admin/CategoryEditor";

const AUTH_KEY = "kmk-admin";

function newCategory(): MenuCategory {
  return { id: crypto.randomUUID(), title: "Yeni Kategori", items: [] };
}

function AdminPanel({ onLogout }: { onLogout: () => void }) {
  const { categories, customized } = useMenu();
  const [draft, setDraft] = useState<MenuCategory[]>(() =>
    structuredClone(categories),
  );
  const [message, setMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const dirty = useMemo(
    () => JSON.stringify(draft) !== JSON.stringify(categories),
    [draft, categories],
  );

  const flash = (text: string) => {
    setMessage(text);
    window.setTimeout(() => setMessage(null), 3000);
  };

  const updateCategory = (index: number, patch: Partial<MenuCategory>) => {
    setDraft((prev) =>
      prev.map((category, i) =>
        i === index ? { ...category, ...patch } : category,
      ),
    );
  };

  const moveCategory = (index: number, direction: -1 | 1) => {
    setDraft((prev) => {
      const target = index + direction;
      if (target < 0 || target >= prev.length) return prev;
      const next = [...prev];
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });
  };

  const deleteCategory = (index: number) => {
    const category = draft[index];
    if (
      !window.confirm(
        `"${category.title}" kategorisi ve içindeki ${category.items.length} ürün silinsin mi?`,
      )
    )
      return;
    setDraft((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    saveMenu(draft);
    flash("Menü kaydedildi. Değişiklikler bu tarayıcıda görünür durumda.");
  };

  const handleDiscard = () => {
    setDraft(structuredClone(categories));
    flash("Kaydedilmemiş değişiklikler geri alındı.");
  };

  const handleReset = () => {
    if (
      !window.confirm(
        "Menü, koddaki örnek menüye (varsayılana) döndürülsün mü? Panelden yapılan tüm değişiklikler silinir.",
      )
    )
      return;
    resetMenu();
    setDraft(structuredClone(getMenuSnapshot().categories));
    flash("Menü varsayılana döndürüldü.");
  };

  const handleExport = () => {
    const blob = new Blob([JSON.stringify(draft, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "kucuk-mustafa-menu.json";
    anchor.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed: unknown = JSON.parse(String(reader.result));
        if (!isValidMenu(parsed)) {
          flash("Dosya menü biçimine uymuyor; içe aktarılmadı.");
          return;
        }
        setDraft(parsed);
        flash("Dosya yüklendi. Yayınlamak için Kaydet'e basın.");
      } catch {
        flash("Dosya okunamadı; geçerli bir JSON değil.");
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="min-h-svh bg-charcoal pb-24 pt-24 md:pt-32">
      <Container className="max-w-4xl">
        {/* Başlık */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Yönetim Paneli</p>
            <h1 className="mt-3 font-display text-4xl font-semibold text-cream md:text-5xl">
              Menü Düzenleme
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <Link
              to="/menu"
              className="inline-flex items-center gap-1.5 px-3 py-2 font-sans text-sm text-cream/60 transition-colors hover:text-ember"
            >
              Menüyü Gör
              <ExternalLink aria-hidden className="h-3.5 w-3.5" />
            </Link>
            <Button type="button" variant="ghost" size="sm" onClick={onLogout}>
              <LogOut aria-hidden className="h-3.5 w-3.5" />
              Çıkış
            </Button>
          </div>
        </div>

        {/* Demo sınırı uyarısı */}
        <aside className="mt-8 flex items-start gap-3 border border-copper/40 bg-coffee/60 p-5">
          <AlertTriangle aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-copper" />
          <p className="text-xs leading-relaxed text-cream/60">
            Bu panel bir <strong className="text-cream/85">demo</strong>dur:
            değişiklikler yalnızca bu tarayıcının hafızasında saklanır ve
            sadece bu cihazda görünür. Menünün tüm ziyaretçilere yayınlanması
            için sunucu taraflı bir kayıt (API/CMS) gerekir. JSON indir/yükle
            ile değişikliklerinizi yedekleyip taşıyabilirsiniz.
          </p>
        </aside>

        {/* Durum + araç çubuğu */}
        <div className="z-40 -mx-5 mt-8 border-y border-cream/10 bg-charcoal/95 px-5 py-3 backdrop-blur-md sm:-mx-8 sm:px-8 lg:sticky lg:top-20">
          <div className="flex flex-wrap items-center gap-2">
            <Button type="button" size="sm" onClick={handleSave} disabled={!dirty}>
              <Save aria-hidden className="h-3.5 w-3.5" />
              Kaydet
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleDiscard}
              disabled={!dirty}
            >
              Vazgeç
            </Button>
            <span className="mx-1 h-5 w-px bg-cream/15" aria-hidden />
            <Button type="button" variant="ghost" size="sm" onClick={handleExport}>
              <Download aria-hidden className="h-3.5 w-3.5" />
              JSON İndir
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload aria-hidden className="h-3.5 w-3.5" />
              JSON Yükle
            </Button>
            <input
              ref={fileInputRef}
              type="file"
              accept="application/json,.json"
              className="hidden"
              onChange={handleImport}
              aria-label="Menü JSON dosyası yükle"
            />
            <Button type="button" variant="ghost" size="sm" onClick={handleReset}>
              <RotateCcw aria-hidden className="h-3.5 w-3.5" />
              Varsayılana Dön
            </Button>
            <span className="ml-auto flex items-center gap-2">
              {dirty && <Badge variant="ember">Kaydedilmemiş değişiklik</Badge>}
              {customized && !dirty && (
                <Badge variant="copper">Panelden düzenlenmiş menü aktif</Badge>
              )}
            </span>
          </div>
          {message && (
            <p role="status" className="mt-2 text-xs text-copper">
              {message}
            </p>
          )}
        </div>

        {/* Kategoriler */}
        <div className="mt-8 space-y-5">
          {draft.map((category, index) => (
            <CategoryEditor
              key={category.id}
              category={category}
              isFirst={index === 0}
              isLast={index === draft.length - 1}
              onChange={(patch) => updateCategory(index, patch)}
              onMove={(direction) => moveCategory(index, direction)}
              onDelete={() => deleteCategory(index)}
            />
          ))}
        </div>

        <Button
          type="button"
          variant="outline"
          className="mt-6"
          onClick={() => setDraft((prev) => [...prev, newCategory()])}
        >
          <Plus aria-hidden className="h-4 w-4" />
          Kategori Ekle
        </Button>
      </Container>
    </div>
  );
}

export default function AdminPage() {
  usePageMeta(
    "Yönetim — Küçük Mustafa Köftecisi",
    "Menü düzenleme paneli (demo).",
    true, // arama sonuçlarına girmesin
  );

  const [authed, setAuthed] = useState(
    () => sessionStorage.getItem(AUTH_KEY) === "1",
  );

  if (!authed) {
    return (
      <AdminLogin
        onSuccess={() => {
          sessionStorage.setItem(AUTH_KEY, "1");
          setAuthed(true);
        }}
      />
    );
  }

  return (
    <AdminPanel
      onLogout={() => {
        sessionStorage.removeItem(AUTH_KEY);
        setAuthed(false);
      }}
    />
  );
}

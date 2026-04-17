import { useMemo, useState } from "react";
import { MessageCircle, X, FileText, Glasses, Sun, Wrench, MapPin, ChevronRight } from "lucide-react";
import { buildWhatsAppUrl, whatsappMessages, siteConfig } from "@/config/site";
import { trackMapClick, trackWhatsAppClick, trackWidgetShortcut } from "@/lib/analytics";

const shortcuts = [
  { icon: FileText, label: "Quero orçamento", message: whatsappMessages.orcamento, type: "whatsapp" },
  { icon: Glasses, label: "Quero óculos de grau", message: whatsappMessages.grau, type: "whatsapp" },
  { icon: Sun, label: "Quero óculos de sol", message: whatsappMessages.sol, type: "whatsapp" },
  { icon: Wrench, label: "Preciso de ajuste / conserto", message: whatsappMessages.ajuste, type: "whatsapp" },
  { icon: MapPin, label: "Como chegar", message: whatsappMessages.como_chegar, type: "map" },
] as const;

export function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  const shortcutLinks = useMemo(
    () =>
      shortcuts.map((shortcut) => ({
        ...shortcut,
        href: shortcut.type === "map" ? siteConfig.mapsUrl : buildWhatsAppUrl(shortcut.message),
      })),
    []
  );

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="hidden rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-foreground shadow-[var(--shadow-soft)] md:block"
        >
          Fale com a nossa equipe
        </button>
      )}

      {open && (
        <div className="w-[calc(100vw-2rem)] max-w-[360px] overflow-hidden rounded-[24px] border border-border bg-white shadow-[var(--shadow-elegant)]">
          <div className="bg-[var(--gradient-brand)] px-5 py-4 text-white">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-display text-xl font-semibold leading-tight">Atendimento pelo WhatsApp</p>
                <p className="mt-1 text-sm text-white/90">
                  Escolha um atalho e fale com a {siteConfig.shortName}.
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Fechar atendimento"
                className="rounded-full p-1 text-white/90 transition hover:bg-white/15"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-4 rounded-2xl bg-white/12 px-4 py-3 text-sm text-white/95 backdrop-blur-sm">
              Resposta rápida, orientação clara e atendimento humanizado.
            </div>
          </div>

          <div className="p-3">
            <div className="grid gap-2">
              {shortcutLinks.map((shortcut) => (
                <a
                  key={shortcut.label}
                  href={shortcut.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackWidgetShortcut(shortcut.label);

                    if (shortcut.type === "map") {
                      trackMapClick("whatsapp_widget");
                    } else {
                      trackWhatsAppClick(shortcut.label, "whatsapp_widget");
                    }
                  }}
                  className="flex items-center gap-3 rounded-2xl border border-border px-4 py-3 text-left text-sm font-medium text-foreground transition hover:border-brand/30 hover:bg-muted"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <shortcut.icon className="h-4.5 w-4.5" />
                  </span>
                  <span className="flex-1">{shortcut.label}</span>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </a>
              ))}
            </div>

            <a
              href={buildWhatsAppUrl(whatsappMessages.default)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("widget_footer_cta", "whatsapp_widget")}
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground"
            >
              <MessageCircle className="h-4.5 w-4.5" />
              Abrir conversa direta
            </a>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => {
          const nextState = !open;
          setOpen(nextState);

          if (!open) {
            trackWhatsAppClick("widget_button", "floating_widget");
          }
        }}
        aria-label={open ? "Fechar atendimento" : "Abrir atendimento WhatsApp"}
        className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-[var(--gradient-brand)] text-white shadow-[var(--shadow-elegant)] transition-transform hover:scale-105"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-7 w-7" fill="currentColor" />}
        <span className="pointer-events-none absolute inset-0 rounded-full ring-8 ring-brand/10" />
      </button>
    </div>
  );
}

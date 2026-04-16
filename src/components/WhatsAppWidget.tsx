import { useState } from "react";
import { MessageCircle, X, FileText, Glasses, Sun, Wrench, MapPin } from "lucide-react";
import { buildWhatsAppUrl, whatsappMessages, siteConfig } from "@/config/site";

const shortcuts = [
  { icon: FileText, label: "Quero orçamento", message: whatsappMessages.orcamento },
  { icon: Glasses, label: "Óculos de grau", message: whatsappMessages.grau },
  { icon: Sun, label: "Óculos de sol", message: whatsappMessages.sol },
  { icon: Wrench, label: "Ajuste / conserto", message: whatsappMessages.ajuste },
  { icon: MapPin, label: "Como chegar", message: whatsappMessages.como_chegar },
];

export function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {open && (
        <div className="w-[calc(100vw-2.5rem)] max-w-[340px] overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-elegant)] animate-in fade-in slide-in-from-bottom-3 duration-300">
          <div className="flex items-center justify-between bg-[var(--gradient-brand)] px-5 py-4 text-white">
            <div>
              <p className="font-display text-base font-semibold leading-tight">
                Fale com a {siteConfig.shortName}
              </p>
              <p className="mt-0.5 text-xs text-white/90">Atendimento rápido e humanizado</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Fechar"
              className="rounded-full p-1 text-white/90 hover:bg-white/15"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="flex flex-col gap-1.5 p-3">
            {shortcuts.map((s) => (
              <a
                key={s.label}
                href={buildWhatsAppUrl(s.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg px-3 py-3 text-left text-sm font-medium text-foreground transition hover:bg-muted"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <s.icon className="h-4 w-4" />
                </span>
                {s.label}
              </a>
            ))}
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Fechar atendimento" : "Abrir atendimento WhatsApp"}
        className="group flex h-16 w-16 items-center justify-center rounded-full bg-[var(--gradient-brand)] text-white shadow-[var(--shadow-elegant)] transition-transform hover:scale-110"
      >
        {open ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-7 w-7" fill="currentColor" />
        )}
        <span className="pointer-events-none absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-20" />
      </button>
    </div>
  );
}

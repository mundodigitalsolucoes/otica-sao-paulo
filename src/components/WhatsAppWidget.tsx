import { useState } from "react";
import { MessageCircle, X, FileText, Glasses, Sun, Wrench, MapPin, Sparkles } from "lucide-react";
import { buildWhatsAppUrl, whatsappMessages, siteConfig } from "@/config/site";

const shortcuts = [
  { icon: FileText, label: "Quero orçamento", message: whatsappMessages.orcamento },
  { icon: Glasses, label: "Óculos de grau", message: whatsappMessages.grau },
  { icon: Sun, label: "Óculos de sol", message: whatsappMessages.sol },
  { icon: Wrench, label: "Ajuste ou conserto", message: whatsappMessages.ajuste },
  { icon: MapPin, label: "Como chegar", message: whatsappMessages.como_chegar },
];

export function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {open && (
        <div className="w-[calc(100vw-2rem)] max-w-[365px] overflow-hidden rounded-[28px] border border-white/10 bg-[var(--gradient-dark)] text-white shadow-[0_24px_70px_-28px_rgba(0,0,0,0.55)] animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="relative overflow-hidden border-b border-white/10 px-5 py-5">
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand/20 blur-3xl" />
            <div className="absolute -left-10 bottom-0 h-24 w-24 rounded-full bg-brand-orange/20 blur-3xl" />
            <div className="relative flex items-start justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/80">
                  <Sparkles className="h-3.5 w-3.5 text-brand-orange" /> Atendimento rápido
                </span>
                <p className="mt-3 font-display text-2xl font-semibold leading-none">Fale com a equipe</p>
                <p className="mt-2 text-sm leading-relaxed text-white/72">
                  Escolha um atalho e continue no WhatsApp da {siteConfig.shortName}.
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Fechar atendimento"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/6 text-white/80 transition hover:bg-white/10"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>
          </div>

          <div className="space-y-2 p-3">
            {shortcuts.map((s) => (
              <a
                key={s.label}
                href={buildWhatsAppUrl(s.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/4 px-3 py-3.5 text-left text-sm font-medium text-white transition hover:border-brand-orange/40 hover:bg-white/8"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--gradient-brand)] text-white shadow-[var(--shadow-elegant)]">
                  <s.icon className="h-4.5 w-4.5" />
                </span>
                <span className="flex-1">{s.label}</span>
              </a>
            ))}
          </div>
        </div>
      )}

      {!open && (
        <span className="hidden rounded-full border border-border bg-white/96 px-4 py-2 text-sm font-semibold text-foreground shadow-[var(--shadow-soft)] sm:inline-flex">
          Fale conosco no WhatsApp
        </span>
      )}

      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Fechar atendimento" : "Abrir atendimento WhatsApp"}
        className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-[var(--gradient-brand)] text-white shadow-[var(--shadow-elegant)] transition-transform hover:scale-105"
      >
        <span className="absolute inset-0 rounded-full border border-white/20" />
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-7 w-7" fill="currentColor" />}
      </button>
    </div>
  );
}

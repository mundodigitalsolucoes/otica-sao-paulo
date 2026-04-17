import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, MessageCircle, MapPin } from "lucide-react";
import { siteConfig, navLinks, buildWhatsAppUrl, whatsappMessages } from "@/config/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/92 backdrop-blur-xl">
      <div className="h-1 w-full bg-[var(--gradient-brand)]" />
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="shrink-0" aria-label={siteConfig.name}>
          <img
            src="/brand/logo-otica-sao-paulo.png"
            alt={siteConfig.name}
            className="h-11 w-auto sm:h-12 lg:h-[3.5rem]"
            width={700}
            height={150}
          />
        </Link>

        <nav className="hidden items-center gap-5 xl:gap-6 lg:flex" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="whitespace-nowrap text-[13px] font-semibold tracking-[0.04em] text-foreground/76 transition-colors hover:text-brand"
              activeProps={{ className: "text-brand" }}
              activeOptions={{ exact: link.to === "/" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={siteConfig.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground transition hover:border-brand hover:text-brand xl:inline-flex"
          >
            <MapPin className="h-4 w-4" /> Ver localização
          </a>
          <a
            href={buildWhatsAppUrl(whatsappMessages.default)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-[var(--gradient-brand)] px-5 py-2.5 text-sm font-semibold text-white shadow-[var(--shadow-elegant)] transition-transform hover:scale-[1.02] sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6" aria-label="Navegação móvel">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-foreground/82 transition hover:bg-muted hover:text-brand"
                activeProps={{ className: "bg-muted text-brand" }}
                activeOptions={{ exact: link.to === "/" }}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              <a
                href={buildWhatsAppUrl(whatsappMessages.default)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--gradient-brand)] px-5 py-3 text-sm font-semibold text-white"
              >
                <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
              </a>
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground"
              >
                <MapPin className="h-4 w-4" /> Ver localização
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

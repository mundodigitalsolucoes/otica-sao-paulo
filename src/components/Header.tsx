import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, MessageCircle, MapPin, Clock3 } from "lucide-react";
import { siteConfig, navLinks, buildWhatsAppUrl, whatsappMessages } from "@/config/site";
import { trackMapClick, trackWhatsAppClick } from "@/lib/analytics";
import logoBranca from "@/assets/logo-branca.png";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90">
      <div className="bg-brand-dark text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-2 text-xs sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-white/85">
              <Clock3 className="h-3.5 w-3.5 text-brand-orange" />
              Desde {siteConfig.foundedYear} no centro de {siteConfig.cityShort}
            </span>
            <span className="hidden text-white/50 sm:inline">•</span>
            <span className="hidden text-white/85 sm:inline">Atendimento humanizado e especializado</span>
          </div>
          <a
            href={siteConfig.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackMapClick("header_topbar")}
            className="inline-flex items-center gap-1.5 font-medium text-white/90 transition hover:text-white"
          >
            <MapPin className="h-3.5 w-3.5 text-brand-orange" />
            Ver localização
          </a>
        </div>
      </div>

      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label={siteConfig.name}>
          <span className="flex h-14 items-center rounded-2xl bg-brand-dark px-4 shadow-[var(--shadow-soft)] sm:h-16 sm:px-5">
            <img
              src={logoBranca}
              alt={`${siteConfig.name} logo`}
              className="h-10 w-auto sm:h-11"
              width={230}
              height={52}
            />
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-[15px] font-medium text-foreground/80 transition-colors hover:text-brand"
              activeProps={{ className: "text-brand font-semibold" }}
              activeOptions={{ exact: link.to === "/" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={buildWhatsAppUrl(whatsappMessages.default)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("header_cta", "header")}
            className="hidden items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground shadow-[var(--shadow-soft)] transition hover:translate-y-[-1px] hover:shadow-[var(--shadow-elegant)] sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            Falar no WhatsApp
          </a>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menu"
            aria-expanded={open}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-white lg:hidden">
          <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Navegação móvel">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-foreground/90 hover:bg-muted"
                activeProps={{ className: "bg-brand/8 text-brand font-semibold" }}
                activeOptions={{ exact: link.to === "/" }}
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-3 grid gap-3">
              <a
                href={buildWhatsAppUrl(whatsappMessages.default)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("header_mobile_cta", "header_mobile")}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-base font-semibold text-brand-foreground"
              >
                <MessageCircle className="h-5 w-5" />
                Falar no WhatsApp
              </a>

              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackMapClick("header_mobile")}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-base font-semibold text-foreground"
              >
                <MapPin className="h-5 w-5 text-brand" />
                Ver localização
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

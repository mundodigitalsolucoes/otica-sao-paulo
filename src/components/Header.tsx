import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { siteConfig, navLinks, buildWhatsAppUrl, whatsappMessages } from "@/config/site";
import { trackWhatsAppClick } from "@/lib/analytics";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/12 bg-background/92 backdrop-blur-xl">
      <div className="h-1.5 w-full bg-[var(--gradient-brand)]" />
      <div className="mx-auto flex h-[5.8rem] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="shrink-0" aria-label={siteConfig.name}>
          <img
            src="/brand/logo-otica-sao-paulo.png"
            alt={siteConfig.name}
            className="h-[3.9rem] w-auto sm:h-[4.4rem] xl:h-[4.9rem]"
            width={1100}
            height={240}
          />
        </Link>

        <nav className="hidden items-center gap-4 xl:gap-5 lg:flex" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="whitespace-nowrap text-[12px] font-semibold uppercase tracking-[0.08em] text-foreground/78 transition-colors hover:text-brand"
              activeProps={{ className: "text-brand" }}
              activeOptions={{ exact: link.to === "/" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={buildWhatsAppUrl(whatsappMessages.default)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("header_cta", "header")}
            className="hidden items-center gap-2 rounded-full bg-[var(--whatsapp)] px-4 py-2.5 text-sm font-semibold text-white shadow-[var(--shadow-elegant)] transition-transform hover:scale-[1.02] sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" /> Fale conosco no WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-foreground lg:hidden"
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
            <a
              href={buildWhatsAppUrl(whatsappMessages.default)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("header_mobile_cta", "mobile_menu")}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--whatsapp)] px-5 py-3 text-sm font-semibold text-white"
            >
              <MessageCircle className="h-4 w-4" /> Fale com especialista
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

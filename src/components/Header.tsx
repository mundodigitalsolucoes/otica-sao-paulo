import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { siteConfig, navLinks, buildWhatsAppUrl, whatsappMessages } from "@/config/site";
import logoBranca from "@/assets/logo-branca.png";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-brand shadow-[var(--shadow-soft)]">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label={siteConfig.name}>
          <img
            src={logoBranca}
            alt={`${siteConfig.name} logo`}
            className="h-16 w-auto sm:h-20"
            width={260}
            height={80}
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-[15px] font-medium text-white/85 transition-colors hover:text-white"
              activeProps={{ className: "text-white font-semibold" }}
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
            className="hidden items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand shadow-[var(--shadow-soft)] transition-transform hover:scale-105 sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            Falar no WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menu"
            aria-expanded={open}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-white lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/15 bg-brand lg:hidden">
          <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Navegação móvel">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-4 py-3 text-base font-medium text-white/90 hover:bg-white/10"
                activeProps={{ className: "bg-white/15 text-white font-semibold" }}
                activeOptions={{ exact: link.to === "/" }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={buildWhatsAppUrl(whatsappMessages.default)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-base font-semibold text-brand sm:hidden"
            >
              <MessageCircle className="h-5 w-5" /> Falar no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

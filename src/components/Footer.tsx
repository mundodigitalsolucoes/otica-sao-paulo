import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { siteConfig, navLinks, buildWhatsAppUrl, whatsappMessages } from "@/config/site";
import logoNeg from "@/assets/logo-negative.svg";

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src={logoNeg} alt={siteConfig.name} className="h-14 w-auto" width={180} height={56} />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/75">
              Tradição familiar desde {siteConfig.foundedYear} no centro de {siteConfig.cityShort}.
              Atendimento humanizado e especializado para toda a família.
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-white">Páginas</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-white/75 transition hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-white">Contato</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/80">
              <li className="flex gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
                <span>{siteConfig.address.full}</span>
              </li>
              <li className="flex gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
                <a href={`tel:+55${siteConfig.phoneRaw}`} className="hover:text-white">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
                <span>
                  {siteConfig.hours.weekdays}
                  <br />
                  {siteConfig.hours.saturday}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-white">Fale conosco</h3>
            <a
              href={buildWhatsAppUrl(whatsappMessages.default)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground transition hover:scale-105"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <div className="mt-5 flex gap-3">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:border-brand-orange hover:text-brand-orange"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <p>Tradição em Rio Preto desde {siteConfig.foundedYear}.</p>
        </div>
      </div>
    </footer>
  );
}

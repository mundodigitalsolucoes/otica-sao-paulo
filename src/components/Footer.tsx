import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone, Clock, MessageCircle, ArrowRight } from "lucide-react";
import { siteConfig, navLinks, buildWhatsAppUrl, whatsappMessages } from "@/config/site";
import { trackMapClick, trackPhoneClick, trackWhatsAppClick } from "@/lib/analytics";
import logoNeg from "@/assets/logo-negative.svg";

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-orange">
              Atendimento de verdade
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold leading-tight sm:text-4xl">
              Quer falar com a equipe da Ótica São Paulo?
            </h2>
            <p className="mt-3 max-w-xl text-white/75">
              Chame no WhatsApp, peça sua rota ou venha nos visitar no centro de Rio Preto.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={buildWhatsAppUrl(whatsappMessages.default)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("footer_cta", "footer")}
              className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground transition hover:translate-y-[-1px]"
            >
              <MessageCircle className="h-4 w-4" />
              Chamar no WhatsApp
            </a>
            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackMapClick("footer")}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/35"
            >
              <MapPin className="h-4 w-4 text-brand-orange" />
              Ver localização
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <img src={logoNeg} alt={siteConfig.name} className="h-14 w-auto" width={180} height={56} />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/75">
              Tradição familiar desde {siteConfig.foundedYear}. Orientação especializada, atendimento
              humanizado e confiança construída ao longo de gerações.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition hover:border-brand-orange hover:text-brand-orange"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-white">Navegação</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="inline-flex items-center gap-2 text-white/75 transition hover:text-white">
                    <ArrowRight className="h-3.5 w-3.5 text-brand-orange" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-white">Contato</h3>
            <ul className="mt-5 space-y-4 text-sm text-white/80">
              <li className="flex gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
                <span>{siteConfig.address.full}</span>
              </li>
              <li className="flex gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
                <a
                  href={`tel:+55${siteConfig.phoneRaw}`}
                  onClick={() => trackPhoneClick("footer")}
                  className="hover:text-white"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex gap-2.5">
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
            <h3 className="font-display text-lg font-semibold text-white">Especialidades</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              <li>Óculos de grau</li>
              <li>Óculos de sol</li>
              <li>Lentes de contato</li>
              <li>Ajuste e conserto</li>
              <li>Atendimento consultivo</li>
            </ul>
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

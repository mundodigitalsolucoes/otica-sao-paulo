import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone, Clock, MessageCircle, ExternalLink } from "lucide-react";
import { siteConfig, navLinks, buildWhatsAppUrl, whatsappMessages } from "@/config/site";
import { trackWhatsAppClick } from "@/lib/analytics";

export function Footer() {
  return (
    <footer className="border-t border-white/20 bg-[#FA7806] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.9fr_0.9fr]">
          <div>
            <img
              src="/brand/logo-otica-sao-paulo.png"
              alt={siteConfig.name}
              className="h-24 w-auto rounded-3xl bg-white px-5 py-4 shadow-[var(--shadow-soft)]"
              width={980}
              height={240}
            />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/92">
              Desde {siteConfig.foundedYear}, a {siteConfig.name} une tradição, atendimento humanizado e orientação especializada para ajudar cada cliente a escolher com segurança.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">Páginas</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-white/85 transition hover:text-white">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">Contato</h3>
            <ul className="mt-5 space-y-4 text-sm text-white/92">
              <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white" /><span>{siteConfig.address.full}</span></li>
              <li className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-white" /><a href={`tel:+55${siteConfig.phoneRaw}`} className="hover:text-white">{siteConfig.phone}</a></li>
              <li className="flex gap-3"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-white" /><span>{siteConfig.hours.weekdays}<br />{siteConfig.hours.saturday}</span></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">Atendimento</h3>
            <a
              href={buildWhatsAppUrl(whatsappMessages.default)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("footer_cta", "footer")}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--whatsapp)] px-5 py-3 text-sm font-semibold text-white shadow-[var(--shadow-soft)] transition hover:scale-[1.02]"
            >
              <MessageCircle className="h-4 w-4" /> Fale com especialista
            </a>
            <div className="mt-5 flex gap-3">
              <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/24 bg-white/10 text-white transition hover:bg-white/18"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/16 pt-6 text-sm text-white/88 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.</p>
          <a href="https://mundodigitalsolucoes.com.br" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-medium text-white transition hover:text-white/90">
            Desenvolvido por MDS <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone, Clock, MessageCircle, ExternalLink } from "lucide-react";
import { siteConfig, navLinks, buildWhatsAppUrl, whatsappMessages } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="h-1 w-full bg-[var(--gradient-brand)]" />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.9fr_0.9fr]">
          <div>
            <img
              src="/brand/logo-otica-sao-paulo.png"
              alt={siteConfig.name}
              className="h-16 w-auto sm:h-[4.5rem] lg:h-[5rem]"
              width={760}
              height={180}
            />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              Desde {siteConfig.foundedYear}, a {siteConfig.name} une tradição, atendimento humanizado
              e orientação especializada para ajudar cada cliente a escolher com segurança.
            </p>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold text-foreground">Páginas</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-muted-foreground transition hover:text-brand">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold text-foreground">Contato</h3>
            <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <span>{siteConfig.address.full}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <a href={`tel:+55${siteConfig.phoneRaw}`} className="hover:text-brand">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <span>
                  {siteConfig.hours.weekdays}
                  <br />
                  {siteConfig.hours.saturday}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold text-foreground">Atendimento</h3>
            <a
              href={buildWhatsAppUrl(whatsappMessages.default)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--gradient-brand)] px-5 py-3 text-sm font-semibold text-white shadow-[var(--shadow-elegant)] transition hover:scale-[1.02]"
            >
              <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
            </a>
            <div className="mt-5 flex gap-3">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-muted/60 text-foreground transition hover:border-brand hover:text-brand"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <a
            href="https://mundodigitalsolucoes.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-foreground transition hover:text-brand"
          >
            Desenvolvido por MDS <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

import { Link } from "@tanstack/react-router";
import { MessageCircle, MapPin, ChevronRight } from "lucide-react";
import { siteConfig, buildWhatsAppUrl, whatsappMessages } from "@/config/site";
import { trackMapClick, trackWhatsAppClick } from "@/lib/analytics";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  intro: string;
  heroImage?: string;
}

export function PageHero({ eyebrow, title, intro, heroImage }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[var(--gradient-warm)] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <li>
              <Link to="/" className="transition hover:text-brand">
                Início
              </Link>
            </li>
            <li className="text-muted-foreground/60">
              <ChevronRight className="h-4 w-4" />
            </li>
            <li className="font-medium text-foreground">{eyebrow}</li>
          </ol>
        </nav>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">{eyebrow}</p>
            <h1 className="mt-4 text-4xl font-semibold text-foreground sm:text-5xl lg:text-6xl">{title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{intro}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={buildWhatsAppUrl(whatsappMessages.consultivo)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick(`${eyebrow}_hero`, "page_hero")}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 text-base font-semibold text-brand-foreground shadow-[var(--shadow-elegant)] transition hover:translate-y-[-1px]"
              >
                <MessageCircle className="h-5 w-5" />
                Falar no WhatsApp
              </a>
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackMapClick("page_hero")}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white px-7 py-4 text-base font-semibold text-foreground transition hover:border-brand hover:text-brand"
              >
                <MapPin className="h-5 w-5" />
                Ver localização
              </a>
            </div>
          </div>

          {heroImage && (
            <div className="relative">
              <div className="absolute -inset-3 rounded-[32px] bg-brand/10 blur-2xl" />
              <img
                src={heroImage}
                alt={title}
                loading="lazy"
                className="relative aspect-[4/3] w-full rounded-[28px] object-cover shadow-[var(--shadow-elegant)]"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function ContactCTA({ message, label = "Falar no WhatsApp" }: { message: string; label?: string }) {
  return (
    <a
      href={`https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick(label, "contact_cta")}
      className="inline-flex items-center justify-center rounded-full bg-brand px-7 py-4 text-base font-semibold text-brand-foreground shadow-[var(--shadow-elegant)] transition hover:translate-y-[-1px]"
    >
      {label}
    </a>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, MapPin, Phone, Clock, Instagram } from "lucide-react";
import { buildWhatsAppUrl, getCanonicalUrl, siteConfig, whatsappMessages } from "@/config/site";
import { trackMapClick, trackPhoneClick, trackWhatsAppClick } from "@/lib/analytics";
import { buildBreadcrumbSchema } from "@/lib/schema";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: `Contato e Localização — ${siteConfig.name} em ${siteConfig.city}` },
      {
        name: "description",
        content: `Visite a ${siteConfig.name} em ${siteConfig.address.full}. Telefone ${siteConfig.phone}, WhatsApp ${siteConfig.whatsapp}. Atendimento humanizado em Rio Preto.`,
      },
      { property: "og:title", content: `Contato — ${siteConfig.name}` },
      {
        property: "og:description",
        content: `Endereço, telefone e WhatsApp da Ótica São Paulo em ${siteConfig.cityShort}.`,
      },
    ],
    links: [{ rel: "canonical", href: getCanonicalUrl("/contato") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbSchema([
            { name: "Início", url: getCanonicalUrl("/") },
            { name: "Contato", url: getCanonicalUrl("/contato") },
          ])
        ),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <section className="bg-[var(--gradient-warm)] py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">Fale conosco</p>
          <h1 className="mt-4 text-4xl font-semibold text-foreground sm:text-5xl lg:text-6xl">
            Estamos prontos para atender você
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Visite nossa loja no centro de {siteConfig.cityShort} ou fale conosco pelo WhatsApp.
            Atendimento humano, claro e sem enrolação.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div className="space-y-6">
            <div className="rounded-[30px] bg-brand-dark p-8 text-white shadow-[var(--shadow-elegant)]">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-orange">
                Atendimento local
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold">Ótica tradicional no centro de Rio Preto</h2>
              <p className="mt-4 text-white/80">
                WhatsApp, telefone, rota e atendimento presencial em um só lugar.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={buildWhatsAppUrl(whatsappMessages.default)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick("contato_hero", "contact_page")}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand-dark transition hover:translate-y-[-1px]"
                >
                  <MessageCircle className="h-4 w-4 text-brand" />
                  Chamar no WhatsApp
                </a>
                <a
                  href={siteConfig.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackMapClick("contact_page")}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30"
                >
                  <MapPin className="h-4 w-4 text-brand-orange" />
                  Traçar rota
                </a>
              </div>
            </div>

            <ContactCard icon={MapPin} title="Endereço" lines={[siteConfig.address.full]} />
            <ContactCard
              icon={Clock}
              title="Horário de funcionamento"
              lines={[siteConfig.hours.weekdays, siteConfig.hours.saturday, siteConfig.hours.sunday]}
            />
            <ContactCard
              icon={Phone}
              title="Telefone"
              lines={[siteConfig.phone]}
              href={`tel:+55${siteConfig.phoneRaw}`}
              onClick={() => trackPhoneClick("contact_page")}
            />
            <ContactCard
              icon={MessageCircle}
              title="WhatsApp"
              lines={[siteConfig.whatsapp]}
              href={buildWhatsAppUrl(whatsappMessages.default)}
              onClick={() => trackWhatsAppClick("contact_card_whatsapp", "contact_page")}
            />
            <ContactCard
              icon={Instagram}
              title="Instagram"
              lines={[siteConfig.instagramHandle]}
              href={siteConfig.instagram}
            />
          </div>

          <div className="overflow-hidden rounded-[28px] border border-border bg-white shadow-[var(--shadow-card)]">
            <iframe
              src={siteConfig.mapsEmbed}
              title={`Mapa de ${siteConfig.name}`}
              loading="lazy"
              className="h-full min-h-[560px] w-full"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactCard({
  icon: Icon,
  title,
  lines,
  href,
  onClick,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  lines: string[];
  href?: string;
  onClick?: () => void;
}) {
  const content = (
    <div className="flex items-start gap-4 rounded-[24px] border border-border bg-white p-6 shadow-[var(--shadow-card)] transition hover:border-brand/35 hover:shadow-[var(--shadow-soft)]">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="font-display text-lg font-semibold text-foreground">{title}</p>
        {lines.map((l, i) => (
          <p key={i} className="text-[15px] text-muted-foreground">
            {l}
          </p>
        ))}
      </div>
    </div>
  );

  return href ? (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="block"
      onClick={onClick}
    >
      {content}
    </a>
  ) : (
    content
  );
}

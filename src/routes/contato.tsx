import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, MapPin, Phone, Clock, Instagram } from "lucide-react";
import { siteConfig, buildWhatsAppUrl, whatsappMessages } from "@/config/site";

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
            Atendimento humanizado, do início ao fim.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="space-y-6">
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
            />
            <ContactCard
              icon={MessageCircle}
              title="WhatsApp"
              lines={[siteConfig.whatsapp]}
              href={buildWhatsAppUrl(whatsappMessages.default)}
            />
            <ContactCard
              icon={Instagram}
              title="Instagram"
              lines={[siteConfig.instagramHandle]}
              href={siteConfig.instagram}
            />

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={buildWhatsAppUrl(whatsappMessages.default)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-[var(--shadow-elegant)] transition hover:scale-105"
              >
                <MessageCircle className="h-4 w-4" /> Chamar no WhatsApp
              </a>
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:border-brand hover:text-brand"
              >
                <MapPin className="h-4 w-4" /> Traçar rota
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
            <iframe
              src={siteConfig.mapsEmbed}
              title={`Mapa de ${siteConfig.name}`}
              loading="lazy"
              className="h-full min-h-[500px] w-full"
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
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  lines: string[];
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition hover:border-brand/40">
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
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block">
      {content}
    </a>
  ) : (
    content
  );
}

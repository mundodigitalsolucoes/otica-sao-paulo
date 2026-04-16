import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Check } from "lucide-react";
import { siteConfig, buildWhatsAppUrl, whatsappMessages } from "@/config/site";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/lentes-de-contato")({
  head: () => ({
    meta: [
      { title: `Lentes de Contato em ${siteConfig.city} | ${siteConfig.name}` },
      {
        name: "description",
        content: `Lentes de contato em ${siteConfig.city} (Rio Preto): gelatinosas, tóricas e multifocais com orientação especializada. Tradição desde ${siteConfig.foundedYear}.`,
      },
      { property: "og:title", content: `Lentes de Contato em ${siteConfig.city}` },
      {
        property: "og:description",
        content: "Orientação especializada sobre uso, higiene e adaptação.",
      },
    ],
  }),
  component: Page,
});

const benefits = [
  "Lentes gelatinosas de uso diário, mensal e anual",
  "Lentes tóricas para astigmatismo",
  "Lentes multifocais para presbiopia",
  "Orientação completa sobre uso e higiene",
  "Acompanhamento na adaptação",
  "Marcas reconhecidas e seguras",
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Lentes de Contato"
        title={`Lentes de contato em ${siteConfig.cityShort} com orientação cuidadosa`}
        intro="Trabalhamos com as principais marcas e tipos de lentes. Orientamos você desde a escolha até a adaptação, com segurança e atenção ao seu conforto."
        heroImage="https://images.unsplash.com/photo-1583156093411-6f3a9b71d96d?auto=format&fit=crop&w=1400&q=80"
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
              Lentes de contato com segurança e suporte
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Usar lentes de contato exige orientação. Nossa equipe explica passo a passo como
              colocar, retirar, higienizar e armazenar suas lentes — para que você tenha conforto e
              tranquilidade no dia a dia.
            </p>
            <ul className="mt-8 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-base text-foreground/85">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-[var(--gradient-warm)] p-8 sm:p-10">
            <h3 className="font-display text-2xl font-semibold text-foreground">
              Tire dúvidas sobre lentes
            </h3>
            <p className="mt-3 text-muted-foreground">
              Envie sua receita ou conte qual tipo de lente você procura. Respondemos pelo WhatsApp
              com clareza.
            </p>
            <a
              href={buildWhatsAppUrl(whatsappMessages.lentes)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-base font-semibold text-brand-foreground shadow-[var(--shadow-elegant)] transition hover:scale-105"
            >
              <MessageCircle className="h-5 w-5" /> Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

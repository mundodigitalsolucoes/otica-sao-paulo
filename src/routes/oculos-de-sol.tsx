import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Check } from "lucide-react";
import { siteConfig, buildWhatsAppUrl, whatsappMessages } from "@/config/site";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/oculos-de-sol")({
  head: () => ({
    meta: [
      { title: `Óculos de Sol em ${siteConfig.city} | ${siteConfig.name}` },
      {
        name: "description",
        content: `Óculos de sol em ${siteConfig.city} com proteção UV, modelos para vários estilos e solar com grau disponível.`,
      },
    ],
  }),
  component: Page,
});

const benefits = [
  "Proteção UV de alta qualidade",
  "Modelos clássicos, modernos e cheios de personalidade",
  "Solar com grau para mais praticidade",
  "Lentes polarizadas para mais conforto visual",
  "Ajuda para escolher o formato ideal para o seu rosto",
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Óculos de Sol"
        title={`Óculos de sol em ${siteConfig.cityShort}: estilo, proteção e presença`}
        intro="Modelos solares selecionados para valorizar o rosto, proteger a visão e reforçar seu estilo com mais segurança."
        heroImage="/images/home/vitrine-oculos-solar.jpg"
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div>
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
              Curadoria real para quem quer comprar com mais confiança
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              A gente mostra o que veste bem no seu rosto, o que conversa com seu estilo e o que entrega proteção de verdade. É estética com orientação.
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
          <div className="rounded-[30px] bg-muted/80 p-8 shadow-[var(--shadow-card)] sm:p-10">
            <img
              src="/images/gallery/armacoes-solar-close.jpg"
              alt="Óculos solares em destaque"
              loading="lazy"
              width={1080}
              height={1350}
              className="aspect-[4/5] w-full rounded-[24px] object-cover"
            />
            <h3 className="mt-6 text-2xl font-semibold text-foreground">Veja opções pelo WhatsApp</h3>
            <p className="mt-3 text-muted-foreground">
              Fale com a equipe e conte qual estilo você procura. A gente mostra opções e ajuda na escolha.
            </p>
            <a
              href={buildWhatsAppUrl(whatsappMessages.sol)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--gradient-brand)] px-7 py-4 text-base font-semibold text-white shadow-[var(--shadow-elegant)] transition hover:scale-[1.02]"
            >
              <MessageCircle className="h-5 w-5" /> Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

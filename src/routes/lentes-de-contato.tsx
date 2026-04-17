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
        content: `Lentes de contato em ${siteConfig.city}: gelatinosas, tóricas e multifocais com orientação especializada e suporte na adaptação.`,
      },
    ],
  }),
  component: Page,
});

const benefits = [
  "Lentes gelatinosas, tóricas e multifocais",
  "Orientação sobre adaptação, uso e higiene",
  "Suporte para rotina, conforto e segurança",
  "Marcas reconhecidas e atendimento consultivo",
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Lentes de Contato"
        title={`Lentes de contato em ${siteConfig.cityShort} com mais segurança na adaptação`}
        intro="Usar lente de contato exige orientação certa. Nossa equipe ajuda você a escolher, adaptar e cuidar melhor no dia a dia."
        heroImage="/images/home/especialistas-otica-sao-paulo.jpg"
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div>
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
              Atendimento próximo do primeiro teste ao uso diário
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              A escolha da lente certa muda conforto, praticidade e adaptação. Por isso explicamos com calma cada detalhe importante antes da decisão.
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
              src="/images/home/vitrine-oculos-grau.jpg"
              alt="Armações e ambiente da loja"
              loading="lazy"
              width={1080}
              height={1440}
              className="aspect-[4/5] w-full rounded-[24px] object-cover"
            />
            <h3 className="mt-6 text-2xl font-semibold text-foreground">Tire dúvidas pelo WhatsApp</h3>
            <p className="mt-3 text-muted-foreground">
              Conte qual tipo de lente você procura ou envie sua receita para receber orientação da equipe.
            </p>
            <a
              href={buildWhatsAppUrl(whatsappMessages.lentes)}
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

import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Check } from "lucide-react";
import { siteConfig, buildWhatsAppUrl, whatsappMessages } from "@/config/site";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/oculos-de-grau")({
  head: () => ({
    meta: [
      { title: `Óculos de Grau em ${siteConfig.city} | ${siteConfig.name}` },
      {
        name: "description",
        content: `Óculos de grau em ${siteConfig.city} (Rio Preto) com armações modernas e clássicas, lentes monofocais e multifocais. Atendimento especializado desde ${siteConfig.foundedYear}.`,
      },
      { property: "og:title", content: `Óculos de Grau em ${siteConfig.city}` },
      {
        property: "og:description",
        content: "Armações e lentes para todos os perfis com orientação humanizada.",
      },
    ],
  }),
  component: Page,
});

const benefits = [
  "Armações de marcas reconhecidas e modelos exclusivos",
  "Lentes monofocais, multifocais e ocupacionais",
  "Tratamento antirreflexo, antirrisco e filtro azul",
  "Lentes para crianças, adultos e terceira idade",
  "Conforto visual para leitura, trabalho e direção",
  "Ajuste personalizado para o formato do seu rosto",
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Óculos de Grau"
        title={`Óculos de grau em ${siteConfig.cityShort} com orientação especializada`}
        intro={`Na ${siteConfig.name}, você encontra armações de qualidade e lentes adequadas ao seu grau e ao seu dia a dia. Atendemos com calma e clareza para você escolher com segurança.`}
        heroImage="https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=1400&q=80"
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
              Por que comprar seus óculos de grau na Ótica São Paulo
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Somos referência em {siteConfig.cityShort} há quase 50 anos. Nossa equipe orienta cada
              cliente sem pressa, considerando seu grau, seu estilo de vida e suas preferências
              estéticas — para que o óculos seja confortável e bonito.
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
              Receba um atendimento personalizado
            </h3>
            <p className="mt-3 text-muted-foreground">
              Envie sua receita ou tire suas dúvidas pelo WhatsApp. Nossa equipe responde com
              clareza e ajuda você a escolher.
            </p>
            <a
              href={buildWhatsAppUrl(whatsappMessages.grau)}
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

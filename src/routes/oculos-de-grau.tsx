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
        content: `Óculos de grau em ${siteConfig.city} com armações modernas e clássicas, lentes monofocais e multifocais. Atendimento especializado desde ${siteConfig.foundedYear}.`,
      },
    ],
  }),
  component: Page,
});

const benefits = [
  "Armações de marcas reconhecidas e modelos exclusivos",
  "Lentes monofocais, multifocais e ocupacionais",
  "Tratamentos antirreflexo, antirrisco e filtro azul",
  "Conforto visual para leitura, telas, trabalho e direção",
  "Ajuste personalizado para o seu rosto",
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Óculos de Grau"
        title={`Óculos de grau em ${siteConfig.cityShort} com escolha mais segura`}
        intro={`Na ${siteConfig.name}, você encontra armações de qualidade e lentes adequadas ao seu grau, ao seu estilo e à sua rotina.`}
        heroImage="/images/home/vitrine-oculos-grau.jpg"
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div>
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
              Orientação especializada para enxergar melhor com conforto e confiança
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Nosso atendimento leva em conta seu grau, seu estilo de vida e como você usa os óculos no dia a dia. Isso ajuda a evitar escolhas erradas e melhora a adaptação.
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
              src="/images/gallery/armacoes-grau-close.jpg"
              alt="Armações de grau em destaque"
              loading="lazy"
              width={1080}
              height={1350}
              className="aspect-[4/5] w-full rounded-[24px] object-cover"
            />
            <h3 className="mt-6 text-2xl font-semibold text-foreground">Fale com a nossa equipe</h3>
            <p className="mt-3 text-muted-foreground">
              Envie sua receita ou conte o que você procura. A gente orienta com clareza pelo WhatsApp.
            </p>
            <a
              href={buildWhatsAppUrl(whatsappMessages.grau)}
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

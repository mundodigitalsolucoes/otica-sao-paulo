import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Check } from "lucide-react";
import { siteConfig, buildWhatsAppUrl, whatsappMessages } from "@/config/site";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/ajuste-e-conserto")({
  head: () => ({
    meta: [
      { title: `Ajuste e Conserto de Óculos em ${siteConfig.city} | ${siteConfig.name}` },
      {
        name: "description",
        content: `Ajuste e conserto de óculos em ${siteConfig.city}: hastes, plaquetas, parafusos e pequenos reparos com cuidado e agilidade.`,
      },
    ],
  }),
  component: Page,
});

const benefits = [
  "Ajuste de hastes para mais conforto",
  "Troca de plaquetas e pequenos componentes",
  "Troca de parafusos e ajustes finos",
  "Avaliação rápida para pequenos reparos",
  "Atendimento ágil e sem complicação",
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Ajuste e Conserto"
        title={`Ajuste e conserto de óculos em ${siteConfig.cityShort}`}
        intro="Seu óculos folgou, entortou ou precisa de um reparo? Avaliamos com agilidade e orientamos a melhor solução."
        heroImage="/images/home/especialistas-otica-sao-paulo.jpg"
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div>
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
              Cuidado técnico para devolver conforto ao seu óculos
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Nem todo problema precisa virar troca. Muitas vezes um bom ajuste já resolve e devolve segurança no uso diário.
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
              alt="Ambiente da loja e armações"
              loading="lazy"
              width={1080}
              height={1440}
              className="aspect-[4/5] w-full rounded-[24px] object-cover"
            />
            <h3 className="mt-6 text-2xl font-semibold text-foreground">Mande uma foto do seu óculos</h3>
            <p className="mt-3 text-muted-foreground">
              Pelo WhatsApp já dá para adiantar a análise e orientar o melhor próximo passo.
            </p>
            <a
              href={buildWhatsAppUrl(whatsappMessages.ajuste)}
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

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
        content: `Ajuste e conserto de óculos em ${siteConfig.city} (Rio Preto): hastes, plaquetas, parafusos e pequenos reparos. Muitas vezes feitos na hora.`,
      },
      { property: "og:title", content: `Ajuste e Conserto em ${siteConfig.city}` },
      {
        property: "og:description",
        content: "Pequenos reparos com agilidade e cuidado.",
      },
    ],
  }),
  component: Page,
});

const benefits = [
  "Ajuste de hastes para mais conforto",
  "Troca de plaquetas (apoio do nariz)",
  "Troca de parafusos e ajustes finos",
  "Pequenas soldas e reparos",
  "Limpeza profissional",
  "Atendimento ágil — muitas vezes feito na hora",
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Ajuste e Conserto"
        title={`Ajuste e conserto de óculos em ${siteConfig.cityShort}`}
        intro="Seu óculos folgou, entortou ou perdeu uma plaqueta? Cuidamos com agilidade. Muitos pequenos reparos são feitos na hora, com cuidado e sem complicação."
        heroImage="https://images.unsplash.com/photo-1614094082869-cd4e4b2905c7?auto=format&fit=crop&w=1400&q=80"
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
              Cuidamos do seu óculos com carinho
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Mesmo que o óculos não seja nosso, fazemos o ajuste com o mesmo cuidado de sempre.
              Traga sua armação até a loja e nossa equipe avalia o que pode ser feito na hora.
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
              Confira se podemos ajudar
            </h3>
            <p className="mt-3 text-muted-foreground">
              Mande uma foto do seu óculos pelo WhatsApp e contamos rapidamente o que dá para fazer.
            </p>
            <a
              href={buildWhatsAppUrl(whatsappMessages.ajuste)}
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

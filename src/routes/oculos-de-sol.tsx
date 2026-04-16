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
        content: `Óculos de sol em ${siteConfig.city} (Rio Preto) com proteção UV e modelos para todos os estilos. Solar com grau disponível. Tradição desde ${siteConfig.foundedYear}.`,
      },
      { property: "og:title", content: `Óculos de Sol em ${siteConfig.city}` },
      {
        property: "og:description",
        content: "Estilo, proteção e autoestima. Modelos clássicos e modernos.",
      },
    ],
  }),
  component: Page,
});

const benefits = [
  "Proteção UV de alta qualidade",
  "Modelos clássicos, modernos e esportivos",
  "Solar com grau (lentes solares com sua receita)",
  "Lentes polarizadas para mais conforto",
  "Marcas reconhecidas e opções exclusivas",
  "Orientação para escolher o modelo ideal para o seu rosto",
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Óculos de Sol"
        title={`Óculos de sol em ${siteConfig.cityShort}: estilo, proteção e autoestima`}
        intro={`Encontre o óculos solar perfeito para o seu rosto e o seu estilo. Modelos clássicos atemporais, esportivos e tendências, todos com proteção UV.`}
        heroImage="https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1400&q=80"
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
              Curadoria de óculos solares em Rio Preto
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Selecionamos modelos pensando em qualidade, durabilidade e estilo. Nossa equipe ajuda
              você a entender qual formato combina mais com o seu rosto e qual lente se encaixa
              melhor na sua rotina.
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
              Veja modelos pelo WhatsApp
            </h3>
            <p className="mt-3 text-muted-foreground">
              Conte para nós o estilo que você procura — clássico, moderno, esportivo. Enviamos
              opções e tiramos suas dúvidas.
            </p>
            <a
              href={buildWhatsAppUrl(whatsappMessages.sol)}
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

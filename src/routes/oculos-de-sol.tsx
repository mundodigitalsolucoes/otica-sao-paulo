import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Check } from "lucide-react";
import { siteConfig, buildWhatsAppUrl, whatsappMessages } from "@/config/site";
import { PageHero } from "@/components/PageHero";
import { trackWhatsAppClick } from "@/lib/analytics";

export const Route = createFileRoute("/oculos-de-sol")({
  head: () => ({
    meta: [
      { title: `Óculos de Sol em ${siteConfig.city} | ${siteConfig.name}` },
      { name: "description", content: `Óculos de sol em ${siteConfig.city} com proteção UV e modelos para todos os estilos. Solar com grau disponível. Tradição desde ${siteConfig.foundedYear}.` },
    ],
  }),
  component: Page,
});

const benefits = [
  "Proteção UV de alta qualidade",
  "Modelos clássicos, modernos e esportivos",
  "Solar com grau disponível",
  "Curadoria com estética, conforto e personalidade",
];

function Page() {
  return (
    <>
      <PageHero eyebrow="Óculos de Sol" title={`Óculos de sol em ${siteConfig.cityShort}: estilo, proteção e autoestima`} intro={`Encontre o óculos solar perfeito para o seu rosto e o seu estilo. Modelos clássicos, modernos e tendências, todos com proteção UV.`} heroImage="/images/home/vitrine-oculos-solar.jpg" />
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">Curadoria de óculos solares em Rio Preto</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">Selecionamos modelos pensando em qualidade, durabilidade e estilo. Nossa equipe ajuda você a entender qual formato combina mais com o seu rosto.</p>
            <ul className="mt-8 space-y-3">{benefits.map((b) => <li key={b} className="flex items-start gap-3 text-base text-foreground/85"><span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand"><Check className="h-3.5 w-3.5" /></span>{b}</li>)}</ul>
          </div>
          <div className="rounded-[28px] bg-white p-8 shadow-[var(--shadow-card)] sm:p-10">
            <h3 className="text-2xl font-semibold text-foreground">Veja modelos pelo WhatsApp</h3>
            <p className="mt-3 text-muted-foreground">Conte para nós o estilo que você procura. Enviamos opções e tiramos suas dúvidas.</p>
            <a href={buildWhatsAppUrl(whatsappMessages.sol)} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick("solar_page_cta", "service_solar")} className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-base font-semibold text-white shadow-[var(--shadow-elegant)] transition hover:scale-[1.02]"><MessageCircle className="h-5 w-5" /> Fale com especialista</a>
          </div>
        </div>
      </section>
    </>
  );
}

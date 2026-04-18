import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Check } from "lucide-react";
import { siteConfig, buildWhatsAppUrl, whatsappMessages } from "@/config/site";
import { PageHero } from "@/components/PageHero";
import { trackWhatsAppClick } from "@/lib/analytics";

export const Route = createFileRoute("/oculos-de-grau")({
  head: () => ({
    meta: [
      { title: `Óculos de Grau em ${siteConfig.city} | ${siteConfig.name}` },
      { name: "description", content: `Óculos de grau em ${siteConfig.city} com armações modernas e clássicas, lentes monofocais e multifocais. Atendimento especializado desde ${siteConfig.foundedYear}.` },
    ],
  }),
  component: Page,
});

const benefits = [
  "Armações de marcas reconhecidas e modelos exclusivos",
  "Lentes monofocais, multifocais e ocupacionais",
  "Tratamento antirreflexo, antirrisco e filtro azul",
  "Conforto visual para leitura, trabalho e direção",
];

function Page() {
  return (
    <>
      <PageHero eyebrow="Óculos de Grau" title={`Óculos de grau em ${siteConfig.cityShort} com orientação especializada`} intro={`Na ${siteConfig.name}, você encontra armações de qualidade e lentes adequadas ao seu grau e ao seu dia a dia. Atendemos com calma e clareza para você escolher com segurança.`} heroImage="/images/home/vitrine-oculos-grau.jpg" />
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">Por que comprar seus óculos de grau na Ótica São Paulo</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">Somos referência em {siteConfig.cityShort} há quase 50 anos. Nossa equipe orienta cada cliente sem pressa, considerando grau, estilo de vida e preferências estéticas.</p>
            <ul className="mt-8 space-y-3">{benefits.map((b) => <li key={b} className="flex items-start gap-3 text-base text-foreground/85"><span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand"><Check className="h-3.5 w-3.5" /></span>{b}</li>)}</ul>
          </div>
          <div className="rounded-[28px] bg-white p-8 shadow-[var(--shadow-card)] sm:p-10">
            <h3 className="text-2xl font-semibold text-foreground">Receba um atendimento personalizado</h3>
            <p className="mt-3 text-muted-foreground">Envie sua receita ou tire suas dúvidas pelo WhatsApp. Nossa equipe responde com clareza e ajuda você a escolher.</p>
            <a href={buildWhatsAppUrl(whatsappMessages.grau)} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick("grau_page_cta", "service_grau")} className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-base font-semibold text-white shadow-[var(--shadow-elegant)] transition hover:scale-[1.02]"><MessageCircle className="h-5 w-5" /> Fale com especialista</a>
          </div>
        </div>
      </section>
    </>
  );
}

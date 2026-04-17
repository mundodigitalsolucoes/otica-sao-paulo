import { createFileRoute, Link } from "@tanstack/react-router";
import {
  MessageCircle,
  MapPin,
  Glasses,
  Sun,
  Eye,
  Wrench,
  Heart,
  ShieldCheck,
  Users,
  Sparkles,
  Award,
  Clock3,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { siteConfig, buildWhatsAppUrl, whatsappMessages, getCanonicalUrl } from "@/config/site";
import { ReviewsSection } from "@/components/ReviewsSection";
import { trackMapClick, trackWhatsAppClick } from "@/lib/analytics";
import { buildFAQSchema } from "@/lib/schema";
import heroImage from "@/assets/hero-glasses.jpg";

const faqs = [
  {
    q: "Vocês trabalham com óculos de grau?",
    a: "Sim. Trabalhamos com armações de diversas marcas e estilos, lentes monofocais, multifocais, antirreflexo e com filtro azul, para diferentes perfis e graus.",
  },
  {
    q: "Vocês vendem óculos de sol?",
    a: "Sim. Temos uma seleção ampla de óculos solares clássicos, modernos e com proteção UV. Também fazemos óculos de sol com grau.",
  },
  {
    q: "Trabalham com lentes de contato?",
    a: "Sim. Atendemos lentes gelatinosas, tóricas e multifocais, com orientação completa sobre uso e higiene.",
  },
  {
    q: "Fazem ajustes e consertos?",
    a: "Sim. Fazemos ajuste de hastes, troca de plaquetas, troca de parafusos e pequenos reparos. Em muitos casos, o serviço é feito na hora.",
  },
  {
    q: "Onde fica a loja?",
    a: `${siteConfig.address.full}. Fácil acesso no centro de ${siteConfig.cityShort}.`,
  },
  {
    q: "Posso pedir informações pelo WhatsApp?",
    a: `Sim. Atendemos pelo WhatsApp ${siteConfig.whatsapp} com resposta rápida e linguagem clara.`,
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: `${siteConfig.name} — Ótica em São José do Rio Preto desde ${siteConfig.foundedYear}`,
      },
      {
        name: "description",
        content:
          "Ótica tradicional no centro de Rio Preto. Óculos de grau, óculos de sol, lentes de contato, ajustes e consertos com atendimento humanizado e especializado.",
      },
      {
        name: "keywords",
        content: siteConfig.keywords.join(", "),
      },
      {
        property: "og:title",
        content: `${siteConfig.name} — Tradição em Rio Preto desde ${siteConfig.foundedYear}`,
      },
      {
        property: "og:description",
        content: siteConfig.description,
      },
      { property: "og:image", content: siteConfig.defaultOgImage },
    ],
    links: [{ rel: "canonical", href: getCanonicalUrl("/") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildFAQSchema(faqs)),
      },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    icon: Glasses,
    title: "Óculos de Grau",
    desc: "Armações e lentes para leitura, trabalho, direção e rotina digital.",
    to: "/oculos-de-grau",
    msg: whatsappMessages.grau,
  },
  {
    icon: Sun,
    title: "Óculos de Sol",
    desc: "Proteção UV, estilo e opções para quem quer solar com ou sem grau.",
    to: "/oculos-de-sol",
    msg: whatsappMessages.sol,
  },
  {
    icon: Eye,
    title: "Lentes de Contato",
    desc: "Orientação especializada para adaptação, uso e manutenção das lentes.",
    to: "/lentes-de-contato",
    msg: whatsappMessages.lentes,
  },
  {
    icon: Wrench,
    title: "Ajustes e Consertos",
    desc: "Pequenos reparos, alinhamentos e ajustes feitos com cuidado e agilidade.",
    to: "/ajuste-e-conserto",
    msg: whatsappMessages.ajuste,
  },
  {
    icon: Heart,
    title: "Atendimento Consultivo",
    desc: "Ajuda para escolher com segurança, sem pressa e sem complicação.",
    to: "/contato",
    msg: whatsappMessages.consultivo,
  },
];

const trustItems = [
  { icon: Award, label: `Desde ${siteConfig.foundedYear}` },
  { icon: Heart, label: "Atendimento personalizado" },
  { icon: Glasses, label: "Grau, solar e lentes" },
  { icon: Wrench, label: "Ajustes e consertos" },
  { icon: MapPin, label: "Centro de Rio Preto" },
];

const differentials = [
  {
    icon: Award,
    title: "Tradição local",
    desc: `Quase 50 anos atendendo gerações de famílias em ${siteConfig.cityShort}.`,
  },
  {
    icon: Heart,
    title: "Atendimento humanizado",
    desc: "Recebemos cada cliente com calma, clareza e atenção ao detalhe.",
  },
  {
    icon: ShieldCheck,
    title: "Escolha segura",
    desc: "Orientação especializada para você acertar na armação e nas lentes.",
  },
  {
    icon: Sparkles,
    title: "Variedade e estilo",
    desc: "Modelos clássicos, modernos e elegantes para diferentes perfis.",
  },
  {
    icon: Eye,
    title: "Conforto visual",
    desc: "Lentes adequadas ao seu dia a dia, leitura, trabalho e direção.",
  },
  {
    icon: Users,
    title: "Confiança de gerações",
    desc: "Clientes que voltam com os filhos, os pais e os avós.",
  },
];

const audienceCards = [
  {
    title: "Público maduro",
    desc: "Atendimento com calma, linguagem simples e orientação segura para leitura, TV, celular e direção.",
  },
  {
    title: "Famílias",
    desc: "Uma ótica que ajuda a decidir com confiança, respeito e bom atendimento para todos da casa.",
  },
  {
    title: "Rotina corrida",
    desc: "Para quem quer resolver rápido sem abrir mão de conforto visual, estética e praticidade.",
  },
];

function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[var(--gradient-warm)]">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-12 lg:items-center lg:gap-16 lg:px-8 lg:py-24">
          <div className="lg:col-span-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              <Award className="h-3.5 w-3.5" /> Tradição desde {siteConfig.foundedYear}
            </p>

            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] text-foreground sm:text-5xl lg:text-[3.85rem]">
              {siteConfig.primaryHeadline.split("Modernização")[0]}
              <span className="text-brand">Modernização para facilitar sua escolha.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {siteConfig.primarySubheadline}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={buildWhatsAppUrl(whatsappMessages.default)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("hero_cta", "home_hero")}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 text-base font-semibold text-brand-foreground shadow-[var(--shadow-elegant)] transition hover:translate-y-[-1px]"
              >
                <MessageCircle className="h-5 w-5" />
                Chamar no WhatsApp
              </a>
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackMapClick("home_hero")}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white px-7 py-4 text-base font-semibold text-foreground transition hover:border-brand hover:text-brand"
              >
                <MapPin className="h-5 w-5" />
                Ver localização
              </a>
            </div>

            <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
              {[
                "Atendimento de especialista",
                "Escolha segura de armação e lentes",
                "Loja física forte no centro de Rio Preto",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-border bg-white px-4 py-4 text-sm font-medium text-foreground shadow-[var(--shadow-card)]">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:col-span-6">
            <div className="absolute -inset-4 rounded-[32px] bg-[var(--gradient-brand)] opacity-15 blur-3xl" />
            <img
              src={heroImage}
              alt="Óculos premium da Ótica São Paulo"
              width={1536}
              height={1152}
              className="relative aspect-[4/3] w-full rounded-[28px] object-cover shadow-[var(--shadow-elegant)]"
            />

            <div className="absolute bottom-4 left-4 right-4 rounded-3xl border border-white/50 bg-white/92 p-5 shadow-[var(--shadow-soft)] backdrop-blur">
              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">Desde 1976</p>
                  <p className="mt-1 text-sm text-foreground/80">Confiança construída com o tempo.</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">Atendimento</p>
                  <p className="mt-1 text-sm text-foreground/80">Humano, claro e sem pressa.</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">Soluções</p>
                  <p className="mt-1 text-sm text-foreground/80">Grau, solar, lentes e consertos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[var(--gradient-brand)] text-white" aria-label="Pilares de confiança">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-6 px-4 py-10 sm:px-6 md:grid-cols-3 lg:grid-cols-5 lg:px-8 lg:py-12">
          {trustItems.map((t) => (
            <div key={t.label} className="flex items-center gap-3">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/30 backdrop-blur-sm">
                <t.icon className="h-5 w-5 text-white" strokeWidth={2.2} />
              </span>
              <span className="text-sm font-semibold leading-tight text-white sm:text-[15px]">{t.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 sm:py-24" aria-labelledby="services-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">Nossos serviços</p>
            <h2 id="services-heading" className="mt-3 text-4xl font-semibold text-foreground sm:text-5xl">
              Tudo o que sua visão precisa
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Soluções completas com a curadoria e o cuidado de uma ótica tradicional.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="group flex flex-col rounded-[28px] border border-border bg-white p-7 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:border-brand/35 hover:shadow-[var(--shadow-elegant)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted-foreground">{s.desc}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={buildWhatsAppUrl(s.msg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick(s.title, "home_services")}
                    className="inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-2.5 text-sm font-semibold text-brand-foreground transition hover:translate-y-[-1px]"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                  <Link
                    to={s.to}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition hover:border-brand hover:text-brand"
                  >
                    Saber mais
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-20 sm:py-24" aria-labelledby="why-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">Por que escolher</p>
            <h2 id="why-heading" className="mt-3 text-4xl font-semibold text-foreground sm:text-5xl">
              A Ótica São Paulo passa confiança antes mesmo da compra
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {differentials.map((d) => (
              <div key={d.title} className="rounded-[28px] border border-border bg-white p-7 shadow-[var(--shadow-card)]">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-orange/15 text-brand-orange">
                  <d.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-foreground">{d.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[30px] bg-brand-dark p-8 text-white shadow-[var(--shadow-elegant)] sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-orange">
                Público maduro e famílias
              </p>
              <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">
                Atendimento que respeita o tempo de cada cliente
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/82">
                Escolher os óculos certos exige atenção. Aqui, a conversa é clara, a explicação é
                simples e a decisão acontece com segurança.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  "Linguagem fácil de entender, sem complicar",
                  "Orientação calma para grau, lente e armação",
                  "Ajuda para quem compra para os pais ou avós",
                  "Pós-venda com atenção e ajustes quando necessário",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/90">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <a
                  href={buildWhatsAppUrl(whatsappMessages.consultivo)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick("publico_maduro", "home_mature_section")}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-semibold text-brand-dark transition hover:translate-y-[-1px]"
                >
                  <MessageCircle className="h-5 w-5 text-brand" />
                  Falar com um especialista
                </a>
              </div>
            </div>

            <div className="grid gap-5">
              {audienceCards.map((card) => (
                <div key={card.title} className="rounded-[28px] border border-border bg-white p-7 shadow-[var(--shadow-card)]">
                  <h3 className="font-display text-2xl font-semibold text-foreground">{card.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{card.desc}</p>
                </div>
              ))}

              <div className="rounded-[28px] border border-brand/15 bg-brand/5 p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand">
                  Estilo e autoestima
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-foreground">
                  Armações bonitas, confortáveis e fáceis de usar no dia a dia
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                  A estética também importa. Ajudamos você a encontrar um modelo que valorize seu rosto
                  sem abrir mão do conforto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ReviewsSection />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-border bg-white p-8 shadow-[var(--shadow-card)] sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">Nossa história</p>
                <h2 className="mt-3 text-4xl font-semibold text-foreground sm:text-5xl">
                  Quase 50 anos cuidando da visão de Rio Preto
                </h2>
              </div>
              <div className="text-lg leading-relaxed text-muted-foreground">
                <p>
                  Fundada em {siteConfig.foundedYear}, a {siteConfig.name} nasceu com um propósito
                  claro: ajudar cada cliente a enxergar melhor e comprar com confiança.
                </p>
                <p className="mt-4">
                  A loja se modernizou ao longo do tempo, mas preservou o que realmente importa:
                  atendimento humano, orientação segura e relação de longo prazo com as famílias da
                  cidade.
                </p>
                <p className="mt-4">
                  É por isso que seguimos sendo lembrados como uma ótica tradicional, próxima e
                  preparada para atender bem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-20 sm:py-24" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">Dúvidas frequentes</p>
            <h2 id="faq-heading" className="mt-3 text-4xl font-semibold text-foreground sm:text-5xl">
              Perguntas e respostas
            </h2>
          </div>

          <div className="mt-10 space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-[24px] border border-border bg-white p-6 shadow-[var(--shadow-card)] open:shadow-[var(--shadow-soft)]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold text-foreground">
                  {f.q}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24" aria-labelledby="contact-heading">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">Onde estamos</p>
            <h2 id="contact-heading" className="mt-3 text-4xl font-semibold text-foreground sm:text-5xl">
              Visite nossa loja em Rio Preto
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Estamos no centro da cidade, com fácil acesso para quem quer atendimento presencial,
              ajuste de óculos ou orientação para uma nova compra.
            </p>

            <ul className="mt-8 space-y-5 text-base">
              <li className="flex gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand" />
                <div>
                  <p className="font-semibold text-foreground">Endereço</p>
                  <p className="text-muted-foreground">{siteConfig.address.full}</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Clock3 className="mt-1 h-5 w-5 shrink-0 text-brand" />
                <div>
                  <p className="font-semibold text-foreground">Horário</p>
                  <p className="text-muted-foreground">
                    {siteConfig.hours.weekdays}
                    <br />
                    {siteConfig.hours.saturday}
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <MessageCircle className="mt-1 h-5 w-5 shrink-0 text-brand" />
                <div>
                  <p className="font-semibold text-foreground">Contato</p>
                  <p className="text-muted-foreground">
                    Telefone: {siteConfig.phone}
                    <br />
                    WhatsApp: {siteConfig.whatsapp}
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={buildWhatsAppUrl(whatsappMessages.default)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("map_section", "home_contact_section")}
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-[var(--shadow-elegant)] transition hover:translate-y-[-1px]"
              >
                <MessageCircle className="h-4 w-4" />
                Chamar no WhatsApp
              </a>
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackMapClick("home_contact_section")}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-foreground transition hover:border-brand hover:text-brand"
              >
                <MapPin className="h-4 w-4" />
                Traçar rota
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-border bg-white shadow-[var(--shadow-card)]">
            <iframe
              src={siteConfig.mapsEmbed}
              title={`Mapa de ${siteConfig.name}`}
              loading="lazy"
              className="h-full min-h-[420px] w-full"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}

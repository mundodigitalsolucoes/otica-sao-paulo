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
  Clock,
} from "lucide-react";
import { siteConfig, buildWhatsAppUrl, whatsappMessages } from "@/config/site";
import { ReviewsSection } from "@/components/ReviewsSection";
import { buildFAQSchema } from "@/lib/schema";
import heroImage from "@/assets/hero-glasses.jpg";

const faqs = [
  {
    q: "Vocês trabalham com óculos de grau?",
    a: "Sim. Trabalhamos com armações de diversas marcas e estilos, lentes monofocais, multifocais, antirreflexo e com filtro azul, para todos os perfis e graus.",
  },
  {
    q: "Vocês vendem óculos de sol?",
    a: "Sim. Temos uma seleção ampla de óculos solares clássicos, modernos e com proteção UV de alta qualidade. Também fazemos óculos de sol com grau.",
  },
  {
    q: "Trabalham com lentes de contato?",
    a: "Sim. Atendemos lentes gelatinosas, rígidas, tóricas (para astigmatismo) e multifocais, com orientação completa sobre uso e higiene.",
  },
  {
    q: "Fazem ajustes e consertos?",
    a: "Sim. Fazemos ajuste de hastes, troca de plaquetas, soldas, troca de parafusos e pequenos reparos — muitas vezes na hora.",
  },
  {
    q: "Onde fica a loja?",
    a: `${siteConfig.address.full}. Fácil acesso no centro de ${siteConfig.cityShort}.`,
  },
  {
    q: "Posso pedir informações pelo WhatsApp?",
    a: `Sim! Atendemos pelo WhatsApp ${siteConfig.whatsapp} de forma rápida e humanizada.`,
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
        property: "og:title",
        content: `${siteConfig.name} — Tradição em Rio Preto desde ${siteConfig.foundedYear}`,
      },
      {
        property: "og:description",
        content: siteConfig.description,
      },
      { property: "og:image", content: `${siteConfig.url}/favicon.png` },
    ],
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
    desc: "Armações modernas e clássicas com lentes de alta qualidade para conforto visual.",
    to: "/oculos-de-grau",
    msg: whatsappMessages.grau,
  },
  {
    icon: Sun,
    title: "Óculos de Sol",
    desc: "Estilo, autoestima e proteção UV com modelos para todos os formatos de rosto.",
    to: "/oculos-de-sol",
    msg: whatsappMessages.sol,
  },
  {
    icon: Eye,
    title: "Lentes de Contato",
    desc: "Lentes gelatinosas, tóricas e multifocais com orientação especializada.",
    to: "/lentes-de-contato",
    msg: whatsappMessages.lentes,
  },
  {
    icon: Wrench,
    title: "Ajustes e Consertos",
    desc: "Ajustes de hastes, plaquetas e pequenos reparos — muitas vezes na hora.",
    to: "/ajuste-e-conserto",
    msg: whatsappMessages.ajuste,
  },
  {
    icon: Heart,
    title: "Atendimento Consultivo",
    desc: "Orientação sem pressa para você escolher com segurança e confiança.",
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
    desc: "Recebemos cada cliente com tempo, atenção e respeito.",
  },
  {
    icon: ShieldCheck,
    title: "Escolha segura",
    desc: "Orientação especializada para você acertar na armação e nas lentes.",
  },
  {
    icon: Sparkles,
    title: "Variedade e estilo",
    desc: "Modelos clássicos, modernos e exclusivos para todos os perfis.",
  },
  {
    icon: Eye,
    title: "Conforto visual",
    desc: "Lentes adequadas ao seu dia a dia, leitura, trabalho e direção.",
  },
  {
    icon: Users,
    title: "Confiança de gerações",
    desc: "Famílias que acompanham a Ótica São Paulo desde os pais e avós.",
  },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[var(--gradient-warm)]">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-12 lg:items-center lg:gap-16 lg:px-8 lg:py-28">
          <div className="lg:col-span-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              <Award className="h-3.5 w-3.5" /> Desde {siteConfig.foundedYear}
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] text-foreground sm:text-5xl lg:text-[3.75rem]">
              Tradição para cuidar da sua visão.{" "}
              <span className="text-brand">Modernização para facilitar sua escolha.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Desde {siteConfig.foundedYear}, a {siteConfig.name} atende gerações em{" "}
              {siteConfig.cityShort} com orientação especializada, atendimento humanizado e soluções
              para enxergar melhor com conforto e estilo.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={buildWhatsAppUrl(whatsappMessages.default)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 text-base font-semibold text-brand-foreground shadow-[var(--shadow-elegant)] transition hover:scale-105"
              >
                <MessageCircle className="h-5 w-5" /> Chamar no WhatsApp
              </a>
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-4 text-base font-semibold text-foreground transition hover:border-brand hover:text-brand"
              >
                <MapPin className="h-5 w-5" /> Ver localização
              </a>
            </div>
          </div>
          <div className="relative lg:col-span-6">
            <div className="absolute -inset-4 rounded-3xl bg-[var(--gradient-brand)] opacity-15 blur-3xl" />
            <img
              src={heroImage}
              alt="Óculos premium da Ótica São Paulo"
              width={1536}
              height={1152}
              className="relative aspect-[4/3] w-full rounded-2xl object-cover shadow-[var(--shadow-elegant)]"
            />
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section
        className="relative overflow-hidden bg-[var(--gradient-brand)] text-white"
        aria-label="Pilares de confiança"
      >
        <div className="absolute inset-0 opacity-15 [background-image:radial-gradient(circle_at_20%_30%,white_0,transparent_40%),radial-gradient(circle_at_80%_70%,white_0,transparent_40%)]" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-6 px-4 py-10 sm:px-6 md:grid-cols-3 lg:grid-cols-5 lg:px-8 lg:py-12">
          {trustItems.map((t) => (
            <div key={t.label} className="flex items-center gap-3">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/30 backdrop-blur-sm">
                <t.icon className="h-5 w-5 text-white" strokeWidth={2.2} />
              </span>
              <span className="text-sm font-semibold leading-tight text-white sm:text-[15px]">
                {t.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVIÇOS */}
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
                className="group flex flex-col rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:border-brand/40 hover:shadow-[var(--shadow-elegant)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted-foreground">{s.desc}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={buildWhatsAppUrl(s.msg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground transition hover:scale-105"
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </a>
                  <Link
                    to={s.to}
                    className="inline-flex items-center rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground transition hover:border-brand hover:text-brand"
                  >
                    Saber mais
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="bg-muted/40 py-20 sm:py-24" aria-labelledby="why-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">Por que escolher</p>
            <h2 id="why-heading" className="mt-3 text-4xl font-semibold text-foreground sm:text-5xl">
              A Ótica São Paulo é diferente
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {differentials.map((d) => (
              <div key={d.title} className="rounded-2xl bg-card p-7 shadow-[var(--shadow-card)]">
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

      {/* PÚBLICO MADURO E FAMÍLIAS */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-brand/10 blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80"
              alt="Atendimento atencioso e sem pressa"
              loading="lazy"
              width={1200}
              height={900}
              className="relative aspect-[4/3] w-full rounded-2xl object-cover shadow-[var(--shadow-soft)]"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
              Para quem cuida da visão com calma
            </p>
            <h2 className="mt-3 text-4xl font-semibold text-foreground sm:text-5xl">
              Atendimento que respeita o seu tempo
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Sabemos que escolher os óculos certos exige atenção. Por isso nosso atendimento é sem
              pressa: explicamos com clareza, mostramos as opções com calma e ajudamos você ou seu
              familiar a decidir com segurança.
            </p>
            <ul className="mt-6 space-y-3 text-base text-foreground/85">
              {[
                "Conversa sem pressa e linguagem simples",
                "Ajuda para escolher o que realmente combina",
                "Conforto visual para leitura, TV e direção",
                "Acompanhamento e ajustes pós-venda",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-brand" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <a
                href={buildWhatsAppUrl(whatsappMessages.consultivo)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 text-base font-semibold text-brand-foreground shadow-[var(--shadow-elegant)] transition hover:scale-105"
              >
                <MessageCircle className="h-5 w-5" /> Falar com um especialista
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ESTILO E AUTOESTIMA */}
      <section className="relative overflow-hidden bg-[var(--gradient-brand)] py-20 text-white sm:py-24">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_15%_20%,white_0,transparent_45%),radial-gradient(circle_at_85%_80%,white_0,transparent_45%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/85">
              Estilo e autoestima
            </p>
            <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">
              Enxergar bem é também se sentir bem
            </h2>
            <p className="mt-4 text-lg text-white/75">
              Encontre armações que combinam com a sua personalidade — clássicas, modernas ou
              ousadas, sempre confortáveis.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                img: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=900&q=80",
                title: "Clássicos atemporais",
              },
              {
                img: "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=900&q=80",
                title: "Estilo contemporâneo",
              },
              {
                img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=900&q=80",
                title: "Solar com personalidade",
              },
            ].map((s) => (
              <div key={s.title} className="group relative overflow-hidden rounded-2xl">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={900}
                  height={1100}
                  className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                <p className="absolute bottom-5 left-5 right-5 font-display text-xl font-semibold">
                  {s.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AVALIAÇÕES */}
      <ReviewsSection />

      {/* HISTÓRIA */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">Nossa história</p>
          <h2 className="mt-3 text-4xl font-semibold text-foreground sm:text-5xl">
            Quase 50 anos cuidando da visão de Rio Preto
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Fundada em {siteConfig.foundedYear}, a {siteConfig.name} nasceu no coração de{" "}
            {siteConfig.cityShort} com um propósito claro: oferecer atendimento de verdade,
            orientação especializada e a tranquilidade de uma ótica em que se pode confiar. Décadas
            depois, atendemos os filhos e netos dos nossos primeiros clientes — modernizando o que
            precisava sem nunca abrir mão da essência: gente cuidando de gente.
          </p>
        </div>
      </section>

      {/* FAQ */}
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
                className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] open:shadow-[var(--shadow-soft)]"
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

      {/* MAPA + CONTATO */}
      <section className="py-20 sm:py-24" aria-labelledby="contact-heading">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">Onde estamos</p>
            <h2 id="contact-heading" className="mt-3 text-4xl font-semibold text-foreground sm:text-5xl">
              Visite nossa loja em Rio Preto
            </h2>
            <ul className="mt-8 space-y-5 text-base">
              <li className="flex gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand" />
                <div>
                  <p className="font-semibold text-foreground">Endereço</p>
                  <p className="text-muted-foreground">{siteConfig.address.full}</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-brand" />
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
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-[var(--shadow-elegant)] transition hover:scale-105"
              >
                <MessageCircle className="h-4 w-4" /> Chamar no WhatsApp
              </a>
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:border-brand hover:text-brand"
              >
                <MapPin className="h-4 w-4" /> Traçar rota
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
            <iframe
              src={siteConfig.mapsEmbed}
              title={`Mapa de ${siteConfig.name}`}
              loading="lazy"
              className="h-full min-h-[400px] w-full"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}

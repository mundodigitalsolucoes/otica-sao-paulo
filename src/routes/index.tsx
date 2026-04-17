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
  Check,
  ArrowRight,
} from "lucide-react";
import { siteConfig, buildWhatsAppUrl, whatsappMessages } from "@/config/site";
import { ReviewsSection } from "@/components/ReviewsSection";
import { buildFAQSchema } from "@/lib/schema";

const faqs = [
  {
    q: "Vocês trabalham com óculos de grau?",
    a: "Sim. Trabalhamos com armações de diversos estilos, lentes monofocais, multifocais, antirreflexo e com filtro azul para diferentes rotinas e necessidades.",
  },
  {
    q: "Vocês vendem óculos de sol?",
    a: "Sim. Temos modelos solares clássicos, modernos e com proteção UV. Também atendemos solar com grau.",
  },
  {
    q: "Trabalham com lentes de contato?",
    a: "Sim. Atendemos lentes gelatinosas, tóricas e multifocais, com orientação completa sobre adaptação, uso e higiene.",
  },
  {
    q: "Fazem ajuste e conserto?",
    a: "Sim. Fazemos ajustes de hastes, plaquetas, troca de parafusos e pequenos reparos com agilidade.",
  },
  {
    q: "Onde fica a loja?",
    a: `${siteConfig.address.full}. Fácil acesso no centro de ${siteConfig.cityShort}.`,
  },
  {
    q: "Posso pedir informações pelo WhatsApp?",
    a: `Sim. Atendemos pelo WhatsApp ${siteConfig.whatsapp} com rapidez, clareza e orientação personalizada.`,
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
          "Ótica tradicional no centro de Rio Preto. Óculos de grau, óculos de sol, lentes de contato, ajustes e consertos com atendimento humanizado e orientação especializada.",
      },
      {
        property: "og:title",
        content: `${siteConfig.name} — Tradição em Rio Preto desde ${siteConfig.foundedYear}`,
      },
      {
        property: "og:description",
        content: siteConfig.description,
      },
      { property: "og:image", content: `${siteConfig.url}/brand/logo-otica-sao-paulo.png` },
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
    desc: "Armações modernas e clássicas com lentes pensadas para leitura, trabalho, direção e conforto no dia a dia.",
    to: "/oculos-de-grau",
    msg: whatsappMessages.grau,
    image: "/images/gallery/armacoes-grau-close.jpg",
  },
  {
    icon: Sun,
    title: "Óculos de Sol",
    desc: "Modelos cheios de personalidade com proteção UV, estética premium e opções para diferentes estilos de rosto.",
    to: "/oculos-de-sol",
    msg: whatsappMessages.sol,
    image: "/images/gallery/armacoes-solar-close.jpg",
  },
  {
    icon: Eye,
    title: "Lentes de Contato",
    desc: "Orientação especializada para adaptação, higiene e escolha do tipo ideal para a sua rotina.",
    to: "/lentes-de-contato",
    msg: whatsappMessages.lentes,
    image: "/images/home/especialistas-otica-sao-paulo.jpg",
  },
  {
    icon: Wrench,
    title: "Ajuste e Conserto",
    desc: "Pequenos reparos, ajustes e cuidados que devolvem conforto e segurança ao seu óculos.",
    to: "/ajuste-e-conserto",
    msg: whatsappMessages.ajuste,
    image: "/images/home/vitrine-oculos-grau.jpg",
  },
  {
    icon: Heart,
    title: "Atendimento Consultivo",
    desc: "Ajudamos você a escolher com calma, clareza e segurança, sem pressa e sem empurrar produto.",
    to: "/contato",
    msg: whatsappMessages.consultivo,
    image: "/images/home/especialistas-otica-sao-paulo.jpg",
  },
];

const trustItems = [
  `Desde ${siteConfig.foundedYear}`,
  "Atendimento personalizado",
  "Óculos de grau, solar e lentes",
  "Ajustes e consertos",
  "Tradição no centro de Rio Preto",
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
    desc: "Recebemos cada cliente com tempo, atenção e orientação de verdade.",
  },
  {
    icon: ShieldCheck,
    title: "Escolha segura",
    desc: "Você entende o que está levando e escolhe com mais confiança.",
  },
  {
    icon: Sparkles,
    title: "Conforto e estética",
    desc: "Armações bonitas, lentes adequadas e ajuste certo para o seu rosto.",
  },
  {
    icon: Eye,
    title: "Especialista acessível",
    desc: "Explicação clara, sem linguagem difícil e sem empurrar solução errada.",
  },
  {
    icon: Users,
    title: "Confiança de gerações",
    desc: "Pais, filhos e avós voltam porque já conhecem o cuidado da loja.",
  },
];

function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[var(--gradient-surface)]">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-brand/12 blur-3xl" />
        <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-brand-orange/12 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1fr_1.02fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/18 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand shadow-[var(--shadow-card)]">
              <Award className="h-3.5 w-3.5" /> Desde {siteConfig.foundedYear}
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.02] text-foreground sm:text-5xl lg:text-[4rem]">
              Tradição para cuidar da sua visão.
              <span className="block text-brand">Modernização para facilitar sua escolha.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Desde {siteConfig.foundedYear}, a {siteConfig.name} atende gerações em {siteConfig.cityShort}
              com orientação especializada, atendimento humanizado e soluções para enxergar melhor
              com conforto e estilo.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={buildWhatsAppUrl(whatsappMessages.default)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--gradient-brand)] px-7 py-4 text-base font-semibold text-white shadow-[var(--shadow-elegant)] transition hover:scale-[1.02]"
              >
                <MessageCircle className="h-5 w-5" /> Chamar no WhatsApp
              </a>
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white px-7 py-4 text-base font-semibold text-foreground transition hover:border-brand hover:text-brand"
              >
                <MapPin className="h-5 w-5" /> Ver localização
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {trustItems.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-white/88 px-4 py-2 text-sm font-medium text-foreground/82 shadow-[var(--shadow-card)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid gap-4 sm:grid-cols-[1.15fr_0.85fr]">
              <div className="overflow-hidden rounded-[34px] rounded-bl-[110px] border border-white/70 bg-white p-3 shadow-[var(--shadow-elegant)]">
                <img
                  src="/images/home/especialistas-otica-sao-paulo.jpg"
                  alt="Equipe da Ótica São Paulo apresentando armações"
                  width={1080}
                  height={1440}
                  className="aspect-[4/5] w-full rounded-[28px] rounded-bl-[96px] object-cover"
                />
              </div>
              <div className="grid gap-4">
                <div className="overflow-hidden rounded-[30px] rounded-tr-[90px] border border-white/70 bg-white p-3 shadow-[var(--shadow-soft)]">
                  <img
                    src="/images/gallery/armacoes-solar-close.jpg"
                    alt="Seleção de óculos solares"
                    width={1080}
                    height={1350}
                    className="aspect-[4/5] w-full rounded-[24px] rounded-tr-[72px] object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-[30px] rounded-tl-[84px] border border-white/70 bg-white p-3 shadow-[var(--shadow-soft)]">
                  <img
                    src="/images/gallery/armacoes-grau-close.jpg"
                    alt="Armações de óculos de grau"
                    width={1080}
                    height={1350}
                    className="aspect-[4/5] w-full rounded-[24px] rounded-tl-[68px] object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 left-5 hidden max-w-xs rounded-[24px] border border-white/70 bg-white p-4 shadow-[var(--shadow-elegant)] md:block">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">Atendimento de confiança</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Ajudamos você a escolher com calma, clareza e segurança, do primeiro contato ao pós-venda.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--gradient-dark)] py-8 text-white" aria-label="Pilares de confiança">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-5 lg:px-8">
          {trustItems.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
              <span className="inline-flex h-3 w-3 rounded-full bg-brand-orange" />
              <span className="text-sm font-semibold text-white/88">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 sm:py-24" aria-labelledby="services-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">Nossos serviços</p>
            <h2 id="services-heading" className="mt-3 text-4xl font-semibold text-foreground sm:text-5xl">
              Soluções completas para visão, conforto e estilo
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Uma ótica tradicional precisa passar confiança. Uma ótica moderna precisa facilitar a sua decisão. Aqui você encontra os dois.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((s, index) => (
              <div
                key={s.title}
                className={`group overflow-hidden rounded-[30px] border border-border shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)] ${index % 2 === 0 ? "bg-white" : "bg-muted/80"}`}
              >
                <div className="relative overflow-hidden px-6 pt-6">
                  <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-brand/10 blur-2xl" />
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    width={900}
                    height={700}
                    className="aspect-[16/10] w-full rounded-[22px] object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--gradient-brand)] text-white shadow-[var(--shadow-soft)]">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-2xl font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{s.desc}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={buildWhatsAppUrl(s.msg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[var(--gradient-brand)] px-4 py-2.5 text-sm font-semibold text-white"
                    >
                      <MessageCircle className="h-4 w-4" /> WhatsApp
                    </a>
                    <Link
                      to={s.to}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-4 py-2.5 text-sm font-semibold text-foreground transition hover:border-brand hover:text-brand"
                    >
                      Saber mais <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/80 py-20 sm:py-24" aria-labelledby="why-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">Por que escolher a Ótica São Paulo</p>
              <h2 id="why-heading" className="mt-3 text-4xl font-semibold text-foreground sm:text-5xl">
                Mais confiança na hora de escolher certo
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                A decisão de compra em ótica mexe com conforto, autoestima e qualidade de vida. Por isso nosso atendimento é consultivo, próximo e claro.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {differentials.map((d) => (
                <div key={d.title} className="rounded-[28px] border border-border bg-white p-6 shadow-[var(--shadow-card)]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                    <d.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-foreground">{d.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:px-8">
          <div className="relative">
            <div className="absolute -right-4 top-4 hidden h-20 w-20 rounded-[26px] bg-[var(--gradient-brand)] opacity-18 blur-2xl md:block" />
            <div className="overflow-hidden rounded-[34px] rounded-tr-[110px] border border-white/70 bg-white p-3 shadow-[var(--shadow-elegant)]">
              <img
                src="/images/home/especialistas-otica-sao-paulo.jpg"
                alt="Especialistas da Ótica São Paulo"
                loading="lazy"
                width={1080}
                height={1440}
                className="aspect-[4/5] w-full rounded-[28px] rounded-tr-[96px] object-cover"
              />
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">Especialista acessível</p>
            <h2 className="mt-3 text-4xl font-semibold text-foreground sm:text-5xl">
              Atendimento humano, técnico e sem pressa
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Parte importante do nosso público é formada por famílias e clientes maduros. Por isso a gente valoriza uma experiência clara, acolhedora e respeitosa, com explicação simples e orientação correta.
            </p>
            <ul className="mt-7 space-y-3 text-base text-foreground/86">
              {[
                "Conversa clara para decidir com segurança",
                "Ajuda para escolher armação, lente e formato ideal",
                "Atendimento com calma para terceira idade e familiares",
                "Pós-venda, ajustes e acompanhamento quando precisar",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={buildWhatsAppUrl(whatsappMessages.consultivo)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--gradient-brand)] px-7 py-4 text-base font-semibold text-white shadow-[var(--shadow-elegant)] transition hover:scale-[1.02]"
              >
                <MessageCircle className="h-5 w-5" /> Falar com um especialista
              </a>
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white px-7 py-4 text-base font-semibold text-foreground transition hover:border-brand hover:text-brand"
              >
                <MapPin className="h-5 w-5" /> Ver localização
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--gradient-dark)] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/75">Estilo e autoestima</p>
            <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">
              Um site de ótica precisa mostrar produto de verdade
            </h2>
            <p className="mt-4 text-lg text-white/72">
              Trouxemos para o layout as imagens reais da loja, das armações e da equipe para deixar a marca mais viva, mais confiável e mais premium.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="overflow-hidden rounded-[34px] rounded-bl-[120px] border border-white/10 bg-white/5 p-3">
              <img
                src="/images/home/vitrine-oculos-solar.jpg"
                alt="Vitrine de óculos de sol da Ótica São Paulo"
                loading="lazy"
                width={1080}
                height={1440}
                className="aspect-[4/5] w-full rounded-[28px] rounded-bl-[96px] object-cover"
              />
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              <div className="overflow-hidden rounded-[28px] rounded-tr-[90px] border border-white/10 bg-white/5 p-3">
                <img
                  src="/images/home/vitrine-oculos-grau.jpg"
                  alt="Vitrine de óculos de grau da Ótica São Paulo"
                  loading="lazy"
                  width={1080}
                  height={1440}
                  className="aspect-[4/5] w-full rounded-[22px] rounded-tr-[74px] object-cover"
                />
              </div>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
                <div className="overflow-hidden rounded-[24px] border border-white/10 bg-white/5 p-3">
                  <img
                    src="/images/gallery/armacoes-grau-close.jpg"
                    alt="Armações de grau em destaque"
                    loading="lazy"
                    width={1080}
                    height={1350}
                    className="aspect-[4/5] w-full rounded-[18px] object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-[24px] border border-white/10 bg-white/5 p-3">
                  <img
                    src="/images/gallery/armacoes-solar-close.jpg"
                    alt="Óculos solares em destaque"
                    loading="lazy"
                    width={1080}
                    height={1350}
                    className="aspect-[4/5] w-full rounded-[18px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ReviewsSection />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">Nossa história</p>
          <h2 className="mt-3 text-4xl font-semibold text-foreground sm:text-5xl">
            Desde {siteConfig.foundedYear}, cuidando da visão de Rio Preto com tradição e evolução
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            A {siteConfig.name} nasceu com uma essência simples e poderosa: atender bem, orientar certo e construir relações de confiança. O tempo passou, a marca se modernizou, mas a base continua a mesma. Quem entra aqui sente que está falando com gente que entende do assunto e que se importa de verdade.
          </p>
        </div>
      </section>

      <section className="bg-muted/80 py-20 sm:py-24" aria-labelledby="faq-heading">
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
                className="group rounded-[26px] border border-border bg-white p-6 shadow-[var(--shadow-card)] open:shadow-[var(--shadow-soft)]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-foreground">
                  {f.q}
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand transition group-open:rotate-45">
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
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div className="rounded-[32px] bg-[var(--gradient-dark)] p-8 text-white shadow-[0_24px_70px_-30px_rgba(0,0,0,0.45)] sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/76">Onde estamos</p>
            <h2 id="contact-heading" className="mt-3 text-4xl font-semibold sm:text-5xl">
              Visite nossa loja em Rio Preto
            </h2>
            <ul className="mt-8 space-y-5 text-base">
              <li className="flex gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand-orange" />
                <div>
                  <p className="font-semibold text-white">Endereço</p>
                  <p className="text-white/72">{siteConfig.address.full}</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-brand-orange" />
                <div>
                  <p className="font-semibold text-white">Horário</p>
                  <p className="text-white/72">
                    {siteConfig.hours.weekdays}
                    <br />
                    {siteConfig.hours.saturday}
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <MessageCircle className="mt-1 h-5 w-5 shrink-0 text-brand-orange" />
                <div>
                  <p className="font-semibold text-white">Contato</p>
                  <p className="text-white/72">
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
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-dark transition hover:bg-white/92"
              >
                <MessageCircle className="h-4 w-4" /> Chamar no WhatsApp
              </a>
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-6 py-3 text-sm font-semibold text-white transition hover:border-brand-orange hover:text-brand-orange"
              >
                <MapPin className="h-4 w-4" /> Traçar rota
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-[32px] border border-border bg-white p-3 shadow-[var(--shadow-card)]">
            <iframe
              src={siteConfig.mapsEmbed}
              title={`Mapa de ${siteConfig.name}`}
              loading="lazy"
              className="h-full min-h-[440px] w-full rounded-[26px]"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}

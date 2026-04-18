import { createFileRoute, Link } from "@tanstack/react-router";
import {
  MessageCircle,
  MapPin,
  Glasses,
  Sun,
  Eye,
  Heart,
  ShieldCheck,
  Users,
  Sparkles,
  Award,
  Clock,
  CheckCircle2,
  Star,
} from "lucide-react";
import { siteConfig, buildWhatsAppUrl, whatsappMessages } from "@/config/site";
import { ReviewsSection } from "@/components/ReviewsSection";
import { buildFAQSchema } from "@/lib/schema";

const faqs = [
  {
    q: "Vocês trabalham com óculos de grau?",
    a: "Sim. Trabalhamos com armações de diversos estilos e lentes monofocais, multifocais, antirreflexo e com filtro azul, sempre com orientação personalizada.",
  },
  {
    q: "Vocês vendem óculos de sol?",
    a: "Sim. Temos modelos solares de diferentes estilos, com proteção UV e opções para quem busca estética, conforto e qualidade.",
  },
  {
    q: "Trabalham com lentes de contato?",
    a: "Sim. Atendemos com orientação especializada para adaptação, uso correto e escolha do tipo de lente mais adequado.",
  },
  {
    q: "Onde fica a loja?",
    a: `${siteConfig.address.full}. Fácil acesso no centro de ${siteConfig.cityShort}.`,
  },
  {
    q: "Posso pedir informações pelo WhatsApp?",
    a: `Sim. Atendemos pelo WhatsApp ${siteConfig.whatsapp} com agilidade e atendimento humanizado.`,
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
          "Ótica tradicional no centro de Rio Preto. Óculos de grau, óculos de sol e lentes de contato com atendimento humanizado, confiança de gerações e orientação especializada.",
      },
      {
        property: "og:title",
        content: `${siteConfig.name} — Tradição em Rio Preto desde ${siteConfig.foundedYear}`,
      },
      {
        property: "og:description",
        content:
          "Desde 1976, a Ótica São Paulo atende gerações com orientação especializada, atendimento humanizado e soluções para enxergar melhor com conforto e estilo.",
      },
      {
        property: "og:image",
        content: `${siteConfig.url}/images/home/fachada-otica-sao-paulo.png`,
      },
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
    desc: "Armações e lentes com orientação para conforto, estética e escolha segura.",
    to: "/oculos-de-grau",
    msg: whatsappMessages.grau,
  },
  {
    icon: Sun,
    title: "Óculos de Sol",
    desc: "Modelos solares para proteção, estilo e autoestima com curadoria da loja.",
    to: "/oculos-de-sol",
    msg: whatsappMessages.sol,
  },
  {
    icon: Eye,
    title: "Lentes de Contato",
    desc: "Opções com orientação cuidadosa para adaptação, uso e rotina visual.",
    to: "/lentes-de-contato",
    msg: whatsappMessages.lentes,
  },
  {
    icon: Heart,
    title: "Atendimento Consultivo",
    desc: "Atendimento com calma, clareza e ajuda real para escolher certo.",
    to: "/contato",
    msg: whatsappMessages.consultivo,
  },
];

const trustItems = [
  { icon: Award, label: `Desde ${siteConfig.foundedYear}` },
  { icon: Users, label: "Atendimento personalizado" },
  { icon: Sparkles, label: "Óculos de grau, solar e lentes" },
  { icon: MapPin, label: "Tradição no centro de Rio Preto" },
];

const differentials = [
  {
    icon: Award,
    title: "Tradição local",
    desc: `Quase 50 anos atendendo famílias em ${siteConfig.cityShort} com confiança e proximidade.`,
  },
  {
    icon: Heart,
    title: "Atendimento humanizado",
    desc: "Aqui o cliente é ouvido com calma e orientado de forma clara.",
  },
  {
    icon: ShieldCheck,
    title: "Escolha segura",
    desc: "Ajudamos você a entender o que faz sentido para sua rotina e sua visão.",
  },
  {
    icon: Sparkles,
    title: "Estilo com conforto",
    desc: "Beleza, ajuste e bem-estar no dia a dia, sem abrir mão da qualidade.",
  },
];

function HomePage() {
  return (
    <>
      {/* 1ª DOBRA */}
      <section className="bg-[#FA7806]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-20">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white/18 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white">
              <Award className="h-3.5 w-3.5" /> Desde {siteConfig.foundedYear}
            </p>

            <h1 className="mt-6 text-4xl font-semibold leading-[1.02] text-white sm:text-5xl lg:text-[4.25rem]">
              Tradição para cuidar
              <br />
              da sua visão.
              <span className="mt-2 block text-[#2A211F]">
                Modernização para facilitar sua escolha.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/92">
              Desde 1976, a Ótica São Paulo atende gerações em Rio Preto com orientação
              especializada, atendimento humanizado e soluções para enxergar melhor com
              conforto e estilo.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={buildWhatsAppUrl(whatsappMessages.consultivo)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-4 text-base font-semibold text-white shadow-lg transition hover:scale-[1.02]"
              >
                <MessageCircle className="h-5 w-5" /> Fale com especialista
              </a>

              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white px-7 py-4 text-base font-semibold text-[#2A211F] transition hover:bg-white/95"
              >
                <MapPin className="h-5 w-5" /> Ver localização
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-white/15 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-3 shadow-2xl">
              <div className="overflow-hidden rounded-[1.6rem] bg-white">
                <img
                  src="/images/home/fachada-otica-sao-paulo.png"
                  alt="Fachada da Ótica São Paulo no centro de Rio Preto"
                  className="aspect-[4/5] w-full object-cover"
                  width={1200}
                  height={1500}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2ª DOBRA */}
      <section className="bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-2xl border border-[#F3D7C8] bg-white px-5 py-4 shadow-sm"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FFF1E7] text-[#FA7806]">
                  <item.icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold leading-tight text-[#1F1A17]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3ª DOBRA */}
      <section className="bg-[#FFF4EC] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F15638]">
              Nossos serviços
            </p>
            <h2 className="mt-3 text-4xl font-semibold text-[#1F1A17] sm:text-5xl">
              Soluções para enxergar melhor com confiança
            </h2>
            <p className="mt-4 text-lg text-[#5B514B]">
              Atendimento especialista com a tradição de uma ótica que conhece o cliente pelo nome.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex h-full flex-col rounded-[1.75rem] border border-[#F2D2C1] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF1E7] text-[#FA7806]">
                  <service.icon className="h-6 w-6" />
                </span>

                <h3 className="mt-5 text-2xl font-semibold text-[#1F1A17]">
                  {service.title}
                </h3>

                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-[#5B514B]">
                  {service.desc}
                </p>

                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href={buildWhatsAppUrl(service.msg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]"
                  >
                    <MessageCircle className="h-4 w-4" /> Fale com especialista
                  </a>

                  <Link
                    to={service.to}
                    className="inline-flex items-center justify-center rounded-full border border-[#F2D2C1] px-5 py-3 text-sm font-semibold text-[#1F1A17] transition hover:border-[#FA7806] hover:text-[#FA7806]"
                  >
                    Saber mais
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4ª DOBRA */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-[#F15638]/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-[#F2D2C1] bg-white p-3 shadow-lg">
              <img
                src="/images/home/especialistas-otica-sao-paulo.jpg"
                alt="Equipe da Ótica São Paulo apresentando armações"
                className="aspect-[4/5] w-full rounded-[1.5rem] object-cover object-center"
                width={1200}
                height={1500}
              />
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F15638]">
              Especialistas acessíveis
            </p>
            <h2 className="mt-3 text-4xl font-semibold text-[#1F1A17] sm:text-5xl">
              Atendimento que orienta de verdade
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#5B514B]">
              Aqui você não escolhe no escuro. Nossa equipe explica com clareza, ajuda a comparar
              opções e recomenda o que realmente faz sentido para a sua rotina, seu conforto visual
              e sua autoestima.
            </p>

            <ul className="mt-7 space-y-3">
              {[
                "Atendimento com calma e explicação simples",
                "Ajuda para escolher armação, lente e estilo",
                "Confiança de gerações no centro de Rio Preto",
                "Pós-venda próximo e humano",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#1F1A17]">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#FA7806]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <a
                href={buildWhatsAppUrl(whatsappMessages.consultivo)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-4 text-base font-semibold text-white shadow-lg transition hover:scale-[1.02]"
              >
                <MessageCircle className="h-5 w-5" /> Fale com especialista
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5ª DOBRA */}
      <section className="bg-[linear-gradient(135deg,#F15638_0%,#FA7806_100%)] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
            Por que escolher a Ótica São Paulo
          </p>
          <h2 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">
            Tradição, confiança e escolha segura
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-white/92">
            Unimos atendimento humanizado, orientação especialista e uma loja tradicional que se
            modernizou sem perder sua essência.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {differentials.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.75rem] border border-white/20 bg-white/12 p-7 text-left backdrop-blur-sm"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#FA7806]">
                  <item.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/88">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a
              href={buildWhatsAppUrl(whatsappMessages.consultivo)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-4 text-base font-semibold text-white shadow-lg transition hover:scale-[1.02]"
            >
              <MessageCircle className="h-5 w-5" /> Fale com especialista
            </a>
          </div>
        </div>
      </section>

      {/* 6ª DOBRA */}
      <ReviewsSection />

      {/* 7ª DOBRA */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F15638]">
            Nossa história
          </p>
          <h2 className="mt-3 text-4xl font-semibold text-[#1F1A17] sm:text-5xl">
            Desde 1976 cuidando da visão de Rio Preto
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[#5B514B]">
            A Ótica São Paulo nasceu com um compromisso simples e poderoso: atender bem, orientar
            com honestidade e ajudar cada cliente a enxergar melhor com segurança. Décadas depois,
            seguimos atendendo pais, filhos e netos com a mesma atenção de sempre.
          </p>
        </div>
      </section>

      {/* 8ª DOBRA */}
      <section className="bg-[#FFF4EC] py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F15638]">
              Dúvidas frequentes
            </p>
            <h2 className="mt-3 text-4xl font-semibold text-[#1F1A17] sm:text-5xl">
              Perguntas e respostas
            </h2>
          </div>

          <div className="mt-10 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-[1.5rem] border border-[#F2D2C1] bg-white p-6 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-[#1F1A17]">
                  {faq.q}
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFF1E7] text-[#FA7806] transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-[15px] leading-relaxed text-[#5B514B]">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 9ª DOBRA */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F15638]">
              Onde estamos
            </p>
            <h2 className="mt-3 text-4xl font-semibold text-[#1F1A17] sm:text-5xl">
              Visite nossa loja em Rio Preto
            </h2>

            <ul className="mt-8 space-y-5 text-base">
              <li className="flex gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#FA7806]" />
                <div>
                  <p className="font-semibold text-[#1F1A17]">Endereço</p>
                  <p className="text-[#5B514B]">{siteConfig.address.full}</p>
                </div>
              </li>

              <li className="flex gap-3">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-[#FA7806]" />
                <div>
                  <p className="font-semibold text-[#1F1A17]">Horário</p>
                  <p className="text-[#5B514B]">
                    {siteConfig.hours.weekdays}
                    <br />
                    {siteConfig.hours.saturday}
                  </p>
                </div>
              </li>

              <li className="flex gap-3">
                <MessageCircle className="mt-1 h-5 w-5 shrink-0 text-[#FA7806]" />
                <div>
                  <p className="font-semibold text-[#1F1A17]">Contato</p>
                  <p className="text-[#5B514B]">
                    Telefone: {siteConfig.phone}
                    <br />
                    WhatsApp: {siteConfig.whatsapp}
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={buildWhatsAppUrl(whatsappMessages.consultivo)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-4 text-base font-semibold text-white shadow-lg transition hover:scale-[1.02]"
              >
                <MessageCircle className="h-5 w-5" /> Fale com especialista
              </a>

              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#F2D2C1] bg-white px-7 py-4 text-base font-semibold text-[#1F1A17] transition hover:border-[#FA7806] hover:text-[#FA7806]"
              >
                <MapPin className="h-5 w-5" /> Traçar rota
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#F2D2C1] shadow-lg">
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
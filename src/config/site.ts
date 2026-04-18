/**
 * Configuração central editável da Ótica São Paulo.
 * Todos os dados de contato, endereço, SEO e mensuração ficam aqui.
 */

const env = import.meta.env;

const googlePlaceId =
  env.VITE_GOOGLE_PLACE_ID?.trim() || "ChIJnX2jd1ytvZQRMkI31xP-bco";

const siteUrl = env.VITE_SITE_URL?.trim() || "https://oticasaopaulo.com.br";
const gtmId = env.VITE_GTM_ID?.trim() || "";

function buildGoogleReviewsUrl(placeId: string, fallbackUrl: string) {
  if (!placeId) return fallbackUrl;
  return `https://search.google.com/local/reviews?placeid=${placeId}`;
}

export const siteConfig = {
  name: "Ótica São Paulo",
  shortName: "Ótica São Paulo",
  foundedYear: 1976,
  city: "São José do Rio Preto",
  cityShort: "Rio Preto",
  state: "SP",
  description:
    "Ótica tradicional em São José do Rio Preto desde 1976. Óculos de grau, óculos de sol, lentes de contato, ajustes e consertos com atendimento humanizado e orientação especializada.",
  primaryHeadline: "Tradição para cuidar da sua visão. Modernização para facilitar sua escolha.",
  primarySubheadline:
    "Desde 1976, a Ótica São Paulo atende gerações em Rio Preto com orientação especializada, atendimento humanizado e soluções para enxergar melhor com conforto e estilo.",

  // Endereço
  address: {
    street: "R. Voluntários de São Paulo, 3056",
    neighborhood: "Centro",
    city: "São José do Rio Preto",
    state: "SP",
    zip: "15015-200",
    full: "R. Voluntários de São Paulo, 3056 - Centro, São José do Rio Preto - SP, 15015-200",
  },

  // Horários
  hours: {
    weekdays: "Segunda a sexta — 9h às 18h",
    saturday: "Sábado — 9h às 12h",
    sunday: "Domingo — fechado",
  },

  // Contatos
  phone: "(17) 3222-5730",
  phoneRaw: "1732225730",
  whatsapp: "(17) 99745-6518",
  whatsappRaw: "5517997456518",
  email: "",

  // Mapas
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Ótica+São+Paulo+R.+Voluntários+de+São+Paulo+3056+São+José+do+Rio+Preto",
  mapsEmbed:
    "https://www.google.com/maps?q=R.%20Volunt%C3%A1rios%20de%20S%C3%A3o%20Paulo%2C%203056%2C%20Centro%2C%20S%C3%A3o%20Jos%C3%A9%20do%20Rio%20Preto%20-%20SP&output=embed",

  // Redes sociais
  instagram: "https://www.instagram.com/oticasaopaulorp/",
  instagramHandle: "@oticasaopaulorp",
  facebook: "",

  // Google Business
  googleBusinessUrl:
    "https://www.google.com/search?q=OTICA+SAO+PAULO+São+José+do+Rio+Preto",
  googlePlaceId,
  googleReviewsUrl: buildGoogleReviewsUrl(
    googlePlaceId,
    "https://www.google.com/search?q=OTICA+SAO+PAULO+São+José+do+Rio+Preto"
  ),
  googleWriteReviewUrl: "https://g.page/r/CTJCN9cT_m3KEBM/review",

  // SEO / mensuração
  url: siteUrl,
  gtmId,
  defaultOgImage: `${siteUrl}/images/home/fachada-otica-sao-paulo.png`,
  keywords: [
    "ótica em São José do Rio Preto",
    "ótica em Rio Preto",
    "óculos de grau em Rio Preto",
    "óculos de sol em Rio Preto",
    "lentes de contato em Rio Preto",
    "ajuste de óculos em Rio Preto",
    "conserto de óculos em Rio Preto",
    "ótica no centro de Rio Preto",
  ],
} as const;

/**
 * Mensagens pré-preenchidas para o WhatsApp.
 */
export const whatsappMessages = {
  default: "Olá! Vim pelo site e gostaria de mais informações.",
  orcamento: "Olá! Vim pelo site e gostaria de um orçamento.",
  grau: "Olá! Vim pelo site e quero saber sobre óculos de grau.",
  sol: "Olá! Vim pelo site e quero ver opções de óculos de sol.",
  lentes: "Olá! Vim pelo site e quero saber sobre lentes de contato.",
  ajuste:
    "Olá! Vim pelo site e gostaria de informações sobre ajuste ou conserto de óculos.",
  como_chegar:
    "Olá! Vim pelo site e quero confirmar a localização da Ótica São Paulo.",
  consultivo: "Olá! Vim pelo site e gostaria de um atendimento consultivo.",
} as const;

export function buildWhatsAppUrl(message: string = whatsappMessages.default) {
  return `https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent(message)}`;
}

export function getCanonicalUrl(pathname: string = "/") {
  return `${siteConfig.url}${pathname === "/" ? "" : pathname}`;
}

export const navLinks = [
  { to: "/", label: "Início" },
  { to: "/oculos-de-grau", label: "Óculos de Grau" },
  { to: "/oculos-de-sol", label: "Óculos de Sol" },
  { to: "/lentes-de-contato", label: "Lentes de Contato" },
  { to: "/blog", label: "Blog" },
  { to: "/contato", label: "Contato" },
] as const;
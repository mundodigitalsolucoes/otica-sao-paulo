/**
 * Avaliações mockadas — substituir por integração com Google Places API.
 * Estrutura compatível com a resposta de Place Details (reviews[]).
 */

export interface GoogleReview {
  author_name: string;
  rating: number;
  relative_time_description: string;
  text: string;
  profile_photo_url?: string;
}

export interface GoogleReviewsData {
  rating: number;
  user_ratings_total: number;
  reviews: GoogleReview[];
  source: "mock" | "api";
}

export const mockReviews: GoogleReviewsData = {
  rating: 4.9,
  user_ratings_total: 287,
  source: "mock",
  reviews: [
    {
      author_name: "Maria Aparecida S.",
      rating: 5,
      relative_time_description: "há 2 semanas",
      text: "Atendimento excelente, equipe muito atenciosa. Me ajudaram a escolher uma armação perfeita para o meu rosto. Loja tradicional de Rio Preto, recomendo de olhos fechados!",
    },
    {
      author_name: "João Pedro Almeida",
      rating: 5,
      relative_time_description: "há 1 mês",
      text: "Comprei meus óculos de grau aqui e o atendimento foi impecável. Explicaram cada detalhe das lentes com paciência. Voltei depois para um ajuste e fizeram na hora.",
    },
    {
      author_name: "Cláudia Regina F.",
      rating: 5,
      relative_time_description: "há 3 semanas",
      text: "Minha família compra na Ótica São Paulo há mais de 30 anos. Tradição, confiança e atendimento humanizado. Não troco por nenhuma outra.",
    },
    {
      author_name: "Roberto Carvalho",
      rating: 5,
      relative_time_description: "há 2 meses",
      text: "Ótimas armações, preços justos e profissionais que realmente entendem do assunto. Levei meu pai e ele saiu super satisfeito.",
    },
    {
      author_name: "Beatriz Mendes",
      rating: 4,
      relative_time_description: "há 1 mês",
      text: "Loja muito bem organizada, ótima variedade de óculos solares. O vendedor foi paciente e me mostrou várias opções até eu encontrar o ideal.",
    },
    {
      author_name: "Antônio Luiz Pereira",
      rating: 5,
      relative_time_description: "há 1 semana",
      text: "Fiz o conserto da haste do meu óculos e ficou novo. Atendimento rápido, preço honesto. Excelente ótica no centro de Rio Preto.",
    },
  ],
};

/**
 * Busca avaliações reais do Google Places API.
 * Retorna mock se a API não estiver configurada.
 *
 * Para ativar:
 * 1. Configurar Place ID em src/config/site.ts
 * 2. Criar endpoint backend (server function) que faça a chamada
 *    para Place Details com sua API Key (nunca expor key no front)
 * 3. Substituir esta função para chamar o endpoint
 */
export async function fetchGoogleReviews(): Promise<GoogleReviewsData> {
  // TODO: integrar com Google Places API via backend
  return mockReviews;
}

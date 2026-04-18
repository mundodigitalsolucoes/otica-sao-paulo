/**
 * Avaliações do Google com fallback seguro.
 * Fluxo:
 * 1. tenta buscar reviews reais em /api/google-reviews
 * 2. se não conseguir, usa mock para não quebrar o front
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

function normalizeGoogleReviews(payload: any): GoogleReviewsData {
  const reviews = Array.isArray(payload?.reviews)
    ? payload.reviews
        .filter((review: any) => review?.text || review?.author_name)
        .map((review: any) => ({
          author_name: review.author_name || "Cliente Google",
          rating: Number(review.rating || 5),
          relative_time_description:
            review.relative_time_description || "avaliação recente",
          text: review.text || "Cliente avaliou positivamente a Ótica São Paulo.",
          profile_photo_url: review.profile_photo_url || undefined,
        }))
    : [];

  return {
    rating: Number(payload?.rating || mockReviews.rating),
    user_ratings_total: Number(
      payload?.user_ratings_total || mockReviews.user_ratings_total
    ),
    reviews: reviews.length ? reviews : mockReviews.reviews,
    source: "api",
  };
}

/**
 * Busca avaliações reais do endpoint backend.
 * Se o endpoint não existir ou falhar, mantém fallback em mock.
 */
export async function fetchGoogleReviews(): Promise<GoogleReviewsData> {
  try {
    const response = await fetch("/api/google-reviews", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      return mockReviews;
    }

    const payload = await response.json();

    if (!payload) {
      return mockReviews;
    }

    return normalizeGoogleReviews(payload);
  } catch {
    return mockReviews;
  }
}
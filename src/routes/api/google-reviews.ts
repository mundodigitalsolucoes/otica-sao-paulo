import { createAPIFileRoute } from "@tanstack/react-start/api";

type GooglePlacesReview = {
  rating?: number;
  relativePublishTimeDescription?: string;
  text?: {
    text?: string;
  };
  authorAttribution?: {
    displayName?: string;
    photoUri?: string;
  };
};

function getEnv(name: string) {
  if (typeof process !== "undefined" && process.env?.[name]) {
    return process.env[name] as string;
  }

  try {
    const metaEnv = (import.meta as ImportMeta & {
      env?: Record<string, string | undefined>;
    }).env;

    if (metaEnv?.[name]) {
      return metaEnv[name] as string;
    }
  } catch {
    // noop
  }

  return "";
}

export const APIRoute = createAPIFileRoute("/api/google-reviews")({
  GET: async () => {
    const apiKey = getEnv("GOOGLE_MAPS_API_KEY");
    const placeId =
      getEnv("GOOGLE_PLACE_ID") ||
      getEnv("VITE_GOOGLE_PLACE_ID") ||
      "ChIJnX2jd1ytvZQRMkI31xP-bco";

    if (!apiKey || !placeId) {
      return Response.json(
        {
          error: "GOOGLE_MAPS_API_KEY ou GOOGLE_PLACE_ID não configurado.",
        },
        { status: 500 }
      );
    }

    try {
      const response = await fetch(
        `https://places.googleapis.com/v1/places/${placeId}`,
        {
          method: "GET",
          headers: {
            "X-Goog-Api-Key": apiKey,
            "X-Goog-FieldMask":
              "rating,userRatingCount,reviews.rating,reviews.relativePublishTimeDescription,reviews.text,reviews.authorAttribution",
          },
        }
      );

      if (!response.ok) {
        const errorText = await response.text();

        return Response.json(
          {
            error: "Falha ao buscar avaliações no Google Places API.",
            details: errorText,
          },
          { status: response.status }
        );
      }

      const payload = await response.json();

      const normalized = {
        rating: Number(payload?.rating || 0),
        user_ratings_total: Number(payload?.userRatingCount || 0),
        reviews: Array.isArray(payload?.reviews)
          ? payload.reviews.map((review: GooglePlacesReview) => ({
              author_name:
                review?.authorAttribution?.displayName || "Cliente Google",
              rating: Number(review?.rating || 5),
              relative_time_description:
                review?.relativePublishTimeDescription || "avaliação recente",
              text:
                review?.text?.text ||
                "Cliente avaliou positivamente a Ótica São Paulo.",
              profile_photo_url:
                review?.authorAttribution?.photoUri || undefined,
            }))
          : [],
      };

      return Response.json(normalized, {
        status: 200,
        headers: {
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
        },
      });
    } catch (error) {
      return Response.json(
        {
          error: "Erro interno ao buscar avaliações.",
          details: error instanceof Error ? error.message : "Erro desconhecido",
        },
        { status: 500 }
      );
    }
  },
});
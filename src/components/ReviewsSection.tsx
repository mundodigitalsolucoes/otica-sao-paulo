import { Star, Quote, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { fetchGoogleReviews, type GoogleReviewsData } from "@/data/reviews";
import { siteConfig } from "@/config/site";
import { trackReviewClick } from "@/lib/analytics";

function Stars({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} de 5 estrelas`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          width={size}
          height={size}
          className={
            i <= Math.round(rating)
              ? "fill-[#FA7806] text-[#FA7806]"
              : "fill-[#F3D8C5] text-[#F3D8C5]"
          }
        />
      ))}
    </div>
  );
}

export function ReviewsSection() {
  const [data, setData] = useState<GoogleReviewsData | null>(null);

  useEffect(() => {
    fetchGoogleReviews().then(setData);
  }, []);

  if (!data) {
    return (
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-72 animate-pulse rounded-[32px] bg-[#F7F2EE]" />
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-20 sm:py-24" aria-labelledby="reviews-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
          <div className="overflow-hidden rounded-[32px] border border-[#F2D2C1] bg-[#FFF8F3] p-8 text-[#1F1A17] shadow-[0_20px_60px_-24px_rgba(241,86,56,0.22)] sm:p-10">
            <span className="inline-flex rounded-full border border-[#F2D2C1] bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#F15638]">
              Avaliações reais
            </span>

            <h2
              id="reviews-heading"
              className="mt-5 text-4xl font-semibold leading-tight text-[#1F1A17] sm:text-[3rem]"
            >
              A confiança de quem já comprou com a gente
            </h2>

            <div className="mt-7 rounded-[28px] border border-[#F2D2C1] bg-white p-6">
              <div className="flex items-end gap-3">
                <span className="text-6xl font-bold leading-none text-[#1F1A17]">
                  {data.rating.toFixed(1)}
                </span>
                <span className="pb-2 text-sm text-[#6B625C]">de 5 no Google</span>
              </div>

              <div className="mt-4">
                <Stars rating={data.rating} size={22} />
              </div>

              <p className="mt-4 text-sm leading-relaxed text-[#6B625C]">
                Baseado em {data.user_ratings_total}+ avaliações de clientes que confiaram na
                Ótica São Paulo.
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={siteConfig.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackReviewClick("view_more", "reviews_section")}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FA7806] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95"
              >
                Ver mais avaliações <ExternalLink className="h-4 w-4" />
              </a>

              <a
                href={siteConfig.googleWriteReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackReviewClick("write_review", "reviews_section")}
                className="inline-flex items-center justify-center rounded-full border border-[#F2D2C1] bg-white px-6 py-3 text-sm font-semibold text-[#1F1A17] transition hover:border-[#FA7806] hover:text-[#FA7806]"
              >
                Fazer avaliação no Google
              </a>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {data.reviews.slice(0, 6).map((r, i) => (
              <article
                key={i}
                className="flex h-full flex-col rounded-[28px] border border-[#F2D2C1] bg-white p-6 shadow-[0_8px_24px_-18px_rgba(31,26,23,0.18)]"
              >
                <div className="flex items-center justify-between gap-4">
                  <Stars rating={r.rating} />
                  <Quote className="h-5 w-5 text-[#F3D8C5]" />
                </div>

                <p className="mt-5 flex-1 text-[15px] leading-relaxed text-[#3E3732]">
                  “{r.text}”
                </p>

                <footer className="mt-6 border-t border-[#F2D2C1] pt-4">
                  <p className="font-semibold text-[#1F1A17]">{r.author_name}</p>
                  <p className="text-xs text-[#6B625C]">{r.relative_time_description}</p>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
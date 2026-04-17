import { Star, Quote, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { fetchGoogleReviews, type GoogleReviewsData } from "@/data/reviews";
import { siteConfig } from "@/config/site";

function Stars({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} de 5 estrelas`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          width={size}
          height={size}
          className={i <= Math.round(rating) ? "fill-brand-orange text-brand-orange" : "fill-white/20 text-white/20"}
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
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-72 animate-pulse rounded-[32px] bg-muted" />
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 sm:py-24" aria-labelledby="reviews-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div className="overflow-hidden rounded-[32px] bg-[var(--gradient-dark)] p-8 text-white shadow-[0_24px_70px_-30px_rgba(0,0,0,0.45)] sm:p-10">
            <span className="inline-flex rounded-full border border-white/10 bg-white/6 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
              Avaliações reais
            </span>
            <h2 id="reviews-heading" className="mt-5 text-4xl font-semibold sm:text-[3rem]">
              A confiança de quem já comprou com a gente
            </h2>
            <div className="mt-7 rounded-[28px] border border-white/8 bg-white/5 p-6">
              <div className="flex items-end gap-3">
                <span className="font-display text-6xl font-bold leading-none text-white">
                  {data.rating.toFixed(1)}
                </span>
                <span className="pb-2 text-sm text-white/68">de 5 no Google</span>
              </div>
              <div className="mt-4">
                <Stars rating={data.rating} size={22} />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/72">
                Baseado em {data.user_ratings_total}+ avaliações de clientes que confiaram na Ótica São Paulo.
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={siteConfig.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white px-6 py-3 text-sm font-semibold text-brand-dark transition hover:bg-white/90"
              >
                Ver mais avaliações <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.googleWriteReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[var(--gradient-brand)] px-6 py-3 text-sm font-semibold text-white"
              >
                Fazer avaliação no Google
              </a>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {data.reviews.slice(0, 6).map((r, i) => (
              <article
                key={i}
                className="flex h-full flex-col rounded-[28px] border border-border bg-white p-6 shadow-[var(--shadow-card)]"
              >
                <div className="flex items-center justify-between gap-4">
                  <Stars rating={r.rating} />
                  <Quote className="h-5 w-5 text-brand/25" />
                </div>
                <p className="mt-5 flex-1 text-[15px] leading-relaxed text-foreground/82">“{r.text}”</p>
                <footer className="mt-6 border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{r.author_name}</p>
                  <p className="text-xs text-muted-foreground">{r.relative_time_description}</p>
                </footer>
              </article>
            ))}
          </div>
        </div>

        {data.source === "mock" && (
          <p className="mt-5 text-center text-xs text-muted-foreground/80">
            * Avaliações representativas. Conecte a API do Google Places para exibir reviews em tempo real.
          </p>
        )}
      </div>
    </section>
  );
}

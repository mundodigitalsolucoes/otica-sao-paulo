import { Star } from "lucide-react";
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
          className={i <= Math.round(rating) ? "fill-brand-orange text-brand-orange" : "fill-muted text-muted"}
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
      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-72 animate-pulse rounded-2xl bg-muted" />
        </div>
      </section>
    );
  }

  return (
    <section className="bg-muted/40 py-20 sm:py-24" aria-labelledby="reviews-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">Avaliações reais</p>
          <h2 id="reviews-heading" className="mt-3 text-4xl font-semibold text-foreground sm:text-5xl">
            A confiança de quem já é cliente
          </h2>
          <div className="mt-6 inline-flex flex-col items-center gap-3 rounded-2xl bg-card px-8 py-5 shadow-[var(--shadow-card)]">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-5xl font-bold text-brand">{data.rating.toFixed(1)}</span>
              <span className="text-sm text-muted-foreground">de 5</span>
            </div>
            <Stars rating={data.rating} size={22} />
            <p className="text-sm text-muted-foreground">
              Baseado em {data.user_ratings_total}+ avaliações no Google
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.reviews.slice(0, 6).map((r, i) => (
            <article
              key={i}
              className="flex flex-col rounded-2xl bg-card p-7 shadow-[var(--shadow-card)] transition hover:shadow-[var(--shadow-soft)]"
            >
              <Stars rating={r.rating} />
              <p className="mt-4 flex-1 text-[15px] leading-relaxed text-foreground/85">"{r.text}"</p>
              <footer className="mt-6 border-t border-border pt-4">
                <p className="font-semibold text-foreground">{r.author_name}</p>
                <p className="text-xs text-muted-foreground">{r.relative_time_description}</p>
              </footer>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={siteConfig.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:border-brand hover:text-brand"
          >
            Ver mais avaliações no Google
          </a>
          <a
            href={siteConfig.googleWriteReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-[var(--shadow-elegant)] transition hover:scale-105"
          >
            Fazer avaliação no Google
          </a>
        </div>

        {data.source === "mock" && (
          <p className="mt-6 text-center text-xs text-muted-foreground/70">
            * Avaliações representativas. Conecte a API do Google Places para exibir reviews em tempo real.
          </p>
        )}
      </div>
    </section>
  );
}

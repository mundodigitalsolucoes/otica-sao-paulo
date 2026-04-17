import { Star, Quote } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
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
          className={i <= Math.round(rating) ? "fill-brand-orange text-brand-orange" : "fill-muted text-muted"}
        />
      ))}
    </div>
  );
}

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export function ReviewsSection() {
  const [data, setData] = useState<GoogleReviewsData | null>(null);

  useEffect(() => {
    fetchGoogleReviews().then(setData);
  }, []);

  const reviews = useMemo(() => data?.reviews.slice(0, 6) ?? [], [data]);

  if (!data) {
    return (
      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-72 animate-pulse rounded-3xl bg-muted" />
        </div>
      </section>
    );
  }

  return (
    <section className="bg-muted/40 py-20 sm:py-24" aria-labelledby="reviews-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">Avaliações reais</p>
            <h2 id="reviews-heading" className="mt-3 text-4xl font-semibold text-foreground sm:text-5xl">
              A confiança de quem já passou pela loja
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Tradição, atendimento humanizado e escolha segura. É isso que mais aparece nas avaliações
              de quem já comprou com a gente.
            </p>

            <div className="mt-8 rounded-3xl border border-border bg-white p-7 shadow-[var(--shadow-card)]">
              <div className="flex items-end gap-3">
                <span className="font-display text-6xl font-bold leading-none text-brand">
                  {data.rating.toFixed(1)}
                </span>
                <div className="pb-1">
                  <p className="text-sm font-semibold text-foreground">nota média no Google</p>
                  <p className="text-sm text-muted-foreground">
                    baseada em {data.user_ratings_total}+ avaliações
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <Stars rating={data.rating} size={22} />
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={siteConfig.googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackReviewClick("view_more", "reviews_section")}
                  className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:border-brand hover:text-brand"
                >
                  Ver mais avaliações no Google
                </a>
                <a
                  href={siteConfig.googleWriteReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackReviewClick("write_review", "reviews_section")}
                  className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-[var(--shadow-elegant)] transition hover:translate-y-[-1px]"
                >
                  Fazer avaliação no Google
                </a>
              </div>

              {data.source === "mock" && (
                <p className="mt-4 text-xs leading-relaxed text-muted-foreground/80">
                  Exibição em modo de contingência. Quando o Place ID estiver configurado com integração
                  oficial, você pode trocar estes dados por reviews em tempo real.
                </p>
              )}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {reviews.map((r, i) => (
              <article
                key={`${r.author_name}-${i}`}
                className="flex h-full flex-col rounded-3xl border border-border bg-white p-6 shadow-[var(--shadow-card)] transition hover:shadow-[var(--shadow-soft)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand/10 font-semibold text-brand">
                      {getInitials(r.author_name)}
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">{r.author_name}</p>
                      <p className="text-xs text-muted-foreground">{r.relative_time_description}</p>
                    </div>
                  </div>
                  <Quote className="h-5 w-5 shrink-0 text-brand/25" />
                </div>

                <div className="mt-4">
                  <Stars rating={r.rating} />
                </div>

                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-foreground/85">“{r.text}”</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Calendar, Clock, ArrowRight, Search, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { siteConfig, buildWhatsAppUrl, whatsappMessages, getCanonicalUrl } from "@/config/site";
import { blogPosts } from "@/data/blog";
import { trackWhatsAppClick } from "@/lib/analytics";
import { buildBreadcrumbSchema } from "@/lib/schema";
import blogCover from "@/assets/blog-cover.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      {
        title: `Blog — Dicas e novidades sobre óculos | ${siteConfig.name}`,
      },
      {
        name: "description",
        content:
          "Conteúdos sobre óculos de grau, óculos de sol, lentes de contato e cuidados com a visão. Dicas da equipe da Ótica São Paulo em Rio Preto.",
      },
      {
        property: "og:title",
        content: `Blog da ${siteConfig.name} — Dicas sobre visão e óculos`,
      },
      {
        property: "og:description",
        content:
          "Conteúdo de quem entende: orientações claras sobre armações, lentes e cuidados com a visão.",
      },
      { property: "og:image", content: siteConfig.defaultOgImage },
    ],
    links: [{ rel: "canonical", href: getCanonicalUrl("/blog") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbSchema([
            { name: "Início", url: getCanonicalUrl("/") },
            { name: "Blog", url: getCanonicalUrl("/blog") },
          ])
        ),
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [query, setQuery] = useState("");
  const categories = useMemo(
    () => ["Todos", ...Array.from(new Set(blogPosts.map((post) => post.category)))],
    []
  );
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory = activeCategory === "Todos" || post.category === activeCategory;
      const term = query.trim().toLowerCase();

      const matchesQuery =
        !term ||
        post.title.toLowerCase().includes(term) ||
        post.excerpt.toLowerCase().includes(term) ||
        post.category.toLowerCase().includes(term);

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  const [featured, ...rest] = filteredPosts;

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Conteúdo de quem cuida da sua visão"
        intro="Dicas práticas, orientações claras e conteúdo pensado para ajudar na escolha de óculos, lentes e cuidados com a visão."
        heroImage={blogCover}
      />

      <section className="py-14 sm:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="search"
                placeholder="Buscar assunto, categoria ou tema"
                className="h-13 w-full rounded-full border border-border bg-white pl-11 pr-4 text-sm text-foreground shadow-[var(--shadow-card)] outline-none transition focus:border-brand"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    activeCategory === category
                      ? "bg-brand text-brand-foreground shadow-[var(--shadow-soft)]"
                      : "border border-border bg-white text-foreground hover:border-brand/35 hover:text-brand"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {featured ? (
            <>
              <Link
                to="/blog/$slug"
                params={{ slug: featured.slug }}
                className="group mt-10 grid overflow-hidden rounded-[32px] border border-border bg-white shadow-[var(--shadow-card)] transition hover:shadow-[var(--shadow-elegant)] lg:grid-cols-2"
              >
                <div className="aspect-[4/3] overflow-hidden lg:aspect-auto">
                  <img
                    src={featured.cover}
                    alt={featured.title}
                    width={1280}
                    height={800}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col justify-center p-8 sm:p-12">
                  <span className="inline-flex w-fit items-center rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                    {featured.category}
                  </span>
                  <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{featured.excerpt}</p>
                  <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" /> {featured.dateLabel}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-4 w-4" /> {featured.readTime}
                    </span>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 font-semibold text-brand">
                    Ler artigo <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>

              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((post) => (
                  <Link
                    key={post.slug}
                    to="/blog/$slug"
                    params={{ slug: post.slug }}
                    className="group flex flex-col overflow-hidden rounded-[28px] border border-border bg-white shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={post.cover}
                        alt={post.title}
                        loading="lazy"
                        width={1600}
                        height={1000}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <span className="inline-flex w-fit items-center rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                        {post.category}
                      </span>
                      <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-foreground">
                        {post.title}
                      </h3>
                      <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted-foreground">
                        {post.excerpt}
                      </p>
                      <div className="mt-5 flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" /> {post.dateLabel}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" /> {post.readTime}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <div className="mt-10 rounded-[28px] border border-border bg-white p-10 text-center shadow-[var(--shadow-card)]">
              <h2 className="font-display text-3xl font-semibold text-foreground">Nada encontrado</h2>
              <p className="mt-3 text-muted-foreground">
                Tente outro termo de busca ou selecione outra categoria.
              </p>
            </div>
          )}

          <div className="mt-14 rounded-[32px] bg-brand-dark p-8 text-white shadow-[var(--shadow-elegant)] sm:p-10">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-orange">
                  Precisa de orientação personalizada?
                </p>
                <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
                  Fale com a equipe da Ótica São Paulo
                </h2>
                <p className="mt-3 max-w-xl text-white/80">
                  Ajudamos você a escolher com segurança, entender sua rotina visual e encontrar a melhor solução.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 lg:justify-end">
                <a
                  href={buildWhatsAppUrl(whatsappMessages.consultivo)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick("blog_cta", "blog_index")}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-dark transition hover:translate-y-[-1px]"
                >
                  <MessageCircle className="h-4 w-4 text-brand" />
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

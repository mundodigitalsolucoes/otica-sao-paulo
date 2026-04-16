import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/config/site";
import { blogPosts } from "@/data/blog";
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
      { property: "og:image", content: `${siteConfig.url}/favicon.png` },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Conteúdo de quem cuida da sua visão"
        intro="Dicas práticas, orientações claras e novidades do mundo das óticas — feitas pela equipe da Ótica São Paulo."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Featured */}
          <Link
            to="/blog/$slug"
            params={{ slug: featured.slug }}
            className="group grid overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)] transition hover:shadow-[var(--shadow-elegant)] lg:grid-cols-2"
          >
            <div className="aspect-[4/3] overflow-hidden lg:aspect-auto">
              <img
                src={blogCover}
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

          {/* Grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link
                key={post.slug}
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
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
        </div>
      </section>
    </>
  );
}

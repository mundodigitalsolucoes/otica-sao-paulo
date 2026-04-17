import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Calendar, Clock, ArrowLeft, MessageCircle, ChevronRight } from "lucide-react";
import { buildWhatsAppUrl, getCanonicalUrl, siteConfig, whatsappMessages } from "@/config/site";
import { blogPosts, getPostBySlug, type BlogPost } from "@/data/blog";
import { trackWhatsAppClick } from "@/lib/analytics";
import { buildArticleSchema, buildBreadcrumbSchema } from "@/lib/schema";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) {
      return { meta: [{ title: `Artigo não encontrado | ${siteConfig.name}` }] };
    }

    const canonical = getCanonicalUrl(`/blog/${post.slug}`);

    return {
      meta: [
        { title: `${post.title} | Blog ${siteConfig.name}` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:image", content: post.cover },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: canonical }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            buildBreadcrumbSchema([
              { name: "Início", url: getCanonicalUrl("/") },
              { name: "Blog", url: getCanonicalUrl("/blog") },
              { name: post.title, url: canonical },
            ])
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            buildArticleSchema({
              title: post.title,
              description: post.excerpt,
              url: canonical,
              image: post.cover,
              datePublished: post.date,
              dateModified: post.updatedAt ?? post.date,
              category: post.category,
            })
          ),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="font-display text-4xl font-semibold text-foreground">Artigo não encontrado</h1>
      <p className="mt-4 text-muted-foreground">O artigo que você procura não existe ou foi movido.</p>
      <Link
        to="/blog"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Voltar ao blog
      </Link>
    </div>
  ),
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const related = blogPosts.filter((p) => p.slug !== post.slug && p.category !== post.category).slice(0, 3);

  return (
    <>
      <article>
        <header className="bg-[var(--gradient-warm)] py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/" className="transition hover:text-brand">
                    Início
                  </Link>
                </li>
                <li className="text-muted-foreground/60">
                  <ChevronRight className="h-4 w-4" />
                </li>
                <li>
                  <Link to="/blog" className="transition hover:text-brand">
                    Blog
                  </Link>
                </li>
                <li className="text-muted-foreground/60">
                  <ChevronRight className="h-4 w-4" />
                </li>
                <li className="font-medium text-foreground">{post.title}</li>
              </ol>
            </nav>

            <Link
              to="/blog"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
            >
              <ArrowLeft className="h-4 w-4" /> Voltar ao blog
            </Link>

            <span className="mt-6 inline-flex w-fit items-center rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand">
              {post.category}
            </span>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">{post.excerpt}</p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" /> Publicado em {post.dateLabel}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4" /> {post.readTime}
              </span>
              <span>Por {post.author}</span>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <img
            src={post.cover}
            alt={post.title}
            width={1600}
            height={900}
            className="-mt-3 aspect-[16/9] w-full rounded-[28px] object-cover shadow-[var(--shadow-soft)]"
          />
        </div>

        <div className="mx-auto grid max-w-5xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.72fr_0.28fr] lg:px-8">
          <div>
            {post.content.map((block: BlogPost["content"][number], i: number) => {
              if (block.type === "h2") {
                return (
                  <h2 key={i} className="mt-10 font-display text-2xl font-semibold text-foreground sm:text-3xl">
                    {block.text}
                  </h2>
                );
              }

              if (block.type === "ul") {
                return (
                  <ul key={i} className="mt-6 space-y-3 text-lg text-foreground/85">
                    {block.items?.map((item: string) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2.5 inline-block h-2 w-2 shrink-0 rounded-full bg-brand" />
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }

              return (
                <p key={i} className="mt-6 text-lg leading-relaxed text-foreground/85">
                  {block.text}
                </p>
              );
            })}

            <div className="mt-12 rounded-[28px] bg-[var(--gradient-brand)] p-8 text-white shadow-[var(--shadow-elegant)] sm:p-10">
              <h3 className="font-display text-2xl font-semibold sm:text-3xl">
                Quer ajuda para escolher com mais segurança?
              </h3>
              <p className="mt-3 text-white/90">
                Fale com a nossa equipe pelo WhatsApp. Atendimento rápido, claro e humanizado.
              </p>
              <a
                href={buildWhatsAppUrl(whatsappMessages.consultivo)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("blog_post_cta", "blog_post")}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand transition hover:translate-y-[-1px]"
              >
                <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
              </a>
            </div>
          </div>

          <aside className="space-y-5">
            <div className="rounded-[24px] border border-border bg-white p-6 shadow-[var(--shadow-card)]">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand">Sobre o autor</p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-foreground">{post.author}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Conteúdo produzido pela equipe da Ótica São Paulo, com foco em orientação clara,
                conforto visual e escolha segura.
              </p>
            </div>

            <div className="rounded-[24px] border border-border bg-white p-6 shadow-[var(--shadow-card)]">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand">Atualização</p>
              <p className="mt-3 text-sm text-muted-foreground">
                Última atualização em {post.updatedLabel ?? post.dateLabel}.
              </p>
            </div>

            <div className="rounded-[24px] border border-border bg-white p-6 shadow-[var(--shadow-card)]">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand">Continue navegando</p>
              <div className="mt-4 space-y-3">
                <Link to="/oculos-de-grau" className="block text-sm font-medium text-foreground transition hover:text-brand">
                  Óculos de grau em Rio Preto
                </Link>
                <Link to="/oculos-de-sol" className="block text-sm font-medium text-foreground transition hover:text-brand">
                  Óculos de sol em Rio Preto
                </Link>
                <Link to="/lentes-de-contato" className="block text-sm font-medium text-foreground transition hover:text-brand">
                  Lentes de contato em Rio Preto
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-border bg-muted/40 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-semibold text-foreground">Artigos relacionados</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="group flex flex-col overflow-hidden rounded-[24px] border border-border bg-white shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
                >
                  <img
                    src={p.cover}
                    alt={p.title}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="aspect-[16/10] w-full object-cover"
                  />
                  <div className="p-5">
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">{p.category}</span>
                    <h3 className="mt-2 font-display text-xl font-semibold leading-snug text-foreground">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

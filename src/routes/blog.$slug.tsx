import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Calendar, Clock, ArrowLeft, MessageCircle } from "lucide-react";
import { siteConfig, buildWhatsAppUrl, whatsappMessages } from "@/config/site";
import { blogPosts, getPostBySlug } from "@/data/blog";

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
    return {
      meta: [
        { title: `${post.title} | Blog ${siteConfig.name}` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:image", content: post.cover },
        { property: "og:type", content: "article" },
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
  component: BlogPost,
});

function BlogPost() {
  const { post } = Route.useLoaderData();
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <article>
        <header className="bg-[var(--gradient-warm)] py-12 sm:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
            >
              <ArrowLeft className="h-4 w-4" /> Voltar ao blog
            </Link>
            <span className="mt-6 inline-flex w-fit items-center rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand">
              {post.category}
            </span>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              {post.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" /> {post.dateLabel}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4" /> {post.readTime}
              </span>
              <span>Por {post.author}</span>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <img
            src={post.cover}
            alt={post.title}
            width={1600}
            height={900}
            className="-mt-2 aspect-[16/9] w-full rounded-2xl object-cover shadow-[var(--shadow-soft)]"
          />
        </div>

        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
          {post.content.map((block, i: number) => {
            if (block.type === "h2") {
              return (
                <h2
                  key={i}
                  className="mt-10 font-display text-2xl font-semibold text-foreground sm:text-3xl"
                >
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

          <div className="mt-12 rounded-2xl bg-[var(--gradient-brand)] p-8 text-white shadow-[var(--shadow-elegant)] sm:p-10">
            <h3 className="font-display text-2xl font-semibold sm:text-3xl">
              Quer uma orientação personalizada?
            </h3>
            <p className="mt-3 text-white/90">
              Fale com a nossa equipe pelo WhatsApp — atendimento rápido e humanizado.
            </p>
            <a
              href={buildWhatsAppUrl(whatsappMessages.consultivo)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand transition hover:scale-105"
            >
              <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
            </a>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-border bg-muted/40 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-semibold text-foreground">Continue lendo</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="group flex gap-4 overflow-hidden rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-card)] transition hover:shadow-[var(--shadow-elegant)]"
                >
                  <img
                    src={p.cover}
                    alt={p.title}
                    loading="lazy"
                    width={400}
                    height={400}
                    className="h-24 w-24 shrink-0 rounded-xl object-cover sm:h-28 sm:w-28"
                  />
                  <div className="flex flex-col justify-center">
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
                      {p.category}
                    </span>
                    <h3 className="mt-1 font-display text-lg font-semibold leading-snug text-foreground">
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

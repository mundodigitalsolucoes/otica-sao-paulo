import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import { siteConfig } from "@/config/site";
import { blogCategories, blogPosts } from "@/data/blog";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: `Blog — ${siteConfig.name}` },
      { name: "description", content: "Dicas de saúde visual, escolha de armações, lentes e conteúdo local para fortalecer a autoridade da Ótica São Paulo." },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [category, setCategory] = useState("Todos");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return blogPosts.filter((post) => {
      const categoryMatch = category === "Todos" || post.category === category;
      const searchMatch = `${post.title} ${post.excerpt}`.toLowerCase().includes(search.toLowerCase());
      return categoryMatch && searchMatch;
    });
  }, [category, search]);

  const [featured, ...rest] = filtered;

  return (
    <>
      <section className="bg-[var(--gradient-surface)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">Blog da Ótica São Paulo</p>
            <h1 className="mt-4 text-4xl font-semibold text-foreground sm:text-5xl lg:text-6xl">Conteúdo para gerar confiança antes da visita</h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">Materiais prontos para SEO local, autoridade e apoio à conversão no WhatsApp.</p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="flex flex-wrap gap-2">
              {blogCategories.map((item) => (
                <button key={item} type="button" onClick={() => setCategory(item)} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${category === item ? "bg-brand text-white" : "border border-border bg-white text-foreground hover:border-brand hover:text-brand"}`}>
                  {item}
                </button>
              ))}
            </div>
            <label className="flex items-center gap-2 rounded-full border border-border bg-white px-4 py-3 text-sm shadow-[var(--shadow-card)]">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Buscar artigo" className="w-full bg-transparent outline-none placeholder:text-muted-foreground" />
            </label>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {featured ? (
            <Link to="/blog/$slug" params={{ slug: featured.slug }} className="group grid overflow-hidden rounded-[32px] border border-border bg-white shadow-[var(--shadow-card)] transition hover:shadow-[var(--shadow-elegant)] lg:grid-cols-[1.05fr_0.95fr]">
              <div className="aspect-[4/3] overflow-hidden lg:aspect-auto">
                <img src={featured.cover} alt={featured.title} width={1280} height={860} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-12">
                <span className="inline-flex w-fit items-center rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand">{featured.category}</span>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">{featured.title}</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{featured.excerpt}</p>
                <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {featured.dateLabel}</span>
                  <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" /> {featured.readTime}</span>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 font-semibold text-brand">Ler artigo <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
              </div>
            </Link>
          ) : (
            <div className="rounded-[32px] border border-border bg-white p-10 text-center shadow-[var(--shadow-card)]">
              <h2 className="text-2xl font-semibold text-foreground">Nenhum artigo encontrado</h2>
              <p className="mt-3 text-muted-foreground">Troque o filtro ou ajuste a busca para ver os conteúdos disponíveis.</p>
            </div>
          )}

          {rest.length > 0 && (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {rest.map((post) => (
                <Link key={post.slug} to="/blog/$slug" params={{ slug: post.slug }} className="group flex flex-col overflow-hidden rounded-[28px] border border-border bg-white shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={post.cover} alt={post.title} loading="lazy" width={1600} height={1000} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="inline-flex w-fit items-center rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand">{post.category}</span>
                    <h3 className="mt-3 text-xl font-semibold leading-snug text-foreground">{post.title}</h3>
                    <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted-foreground">{post.excerpt}</p>
                    <div className="mt-5 flex items-center gap-3 text-xs text-muted-foreground"><span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {post.dateLabel}</span><span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {post.readTime}</span></div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

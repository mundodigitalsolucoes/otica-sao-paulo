import { MessageCircle } from "lucide-react";
import { siteConfig, buildWhatsAppUrl, whatsappMessages } from "@/config/site";
import { trackWhatsAppClick } from "@/lib/analytics";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  intro: string;
  heroImage?: string;
}

export function PageHero({ eyebrow, title, intro, heroImage }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[var(--gradient-surface)] py-20 sm:py-24">
      <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-brand/12 blur-3xl" />
      <div className="absolute left-0 bottom-0 h-64 w-64 rounded-full bg-brand-orange/12 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-semibold text-foreground sm:text-5xl lg:text-[3.8rem]">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{intro}</p>
          <a
            href={buildWhatsAppUrl(whatsappMessages.consultivo)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick(`${eyebrow}_cta`, eyebrow.toLowerCase())}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-base font-semibold text-white shadow-[var(--shadow-elegant)] transition hover:scale-[1.02]"
          >
            <MessageCircle className="h-5 w-5" /> Fale com especialista
          </a>
        </div>
        {heroImage ? (
          <div className="overflow-hidden rounded-[34px] border border-white/70 bg-white p-3 shadow-[var(--shadow-elegant)] float-soft">
            <img src={heroImage} alt={title} loading="lazy" width={1280} height={960} className="aspect-[4/3] w-full rounded-[28px] object-cover" />
          </div>
        ) : null}
      </div>
    </section>
  );
}

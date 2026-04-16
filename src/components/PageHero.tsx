import { siteConfig } from "@/config/site";

interface ServicePageLayoutProps {
  eyebrow: string;
  title: string;
  intro: string;
  heroImage?: string;
  children: React.ReactNode;
}

export function PageHero({ eyebrow, title, intro, heroImage }: Omit<ServicePageLayoutProps, "children">) {
  return (
    <section className="relative overflow-hidden bg-[var(--gradient-warm)] py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-semibold text-foreground sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{intro}</p>
        </div>
        {heroImage && (
          <div className="relative">
            <img
              src={heroImage}
              alt={title}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[var(--shadow-elegant)]"
            />
          </div>
        )}
      </div>
    </section>
  );
}

export function ContactCTA({ message, label = "Falar no WhatsApp" }: { message: string; label?: string }) {
  return (
    <a
      href={`https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center rounded-full bg-brand px-7 py-4 text-base font-semibold text-brand-foreground shadow-[var(--shadow-elegant)] transition hover:scale-105"
    >
      {label}
    </a>
  );
}

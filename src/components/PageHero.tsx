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
    <section className="relative overflow-hidden bg-[var(--gradient-surface)] py-18 sm:py-24">
      <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-brand/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-brand-orange/12 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
        <div>
          <p className="inline-flex rounded-full border border-brand/20 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand shadow-[var(--shadow-card)]">
            {eyebrow}
          </p>
          <h1 className="mt-5 text-4xl font-semibold text-foreground sm:text-5xl lg:text-[3.4rem]">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{intro}</p>
        </div>
        {heroImage && (
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-[32px] bg-[var(--gradient-brand)] opacity-18 blur-2xl" />
            <div className="overflow-hidden rounded-[34px] rounded-bl-[110px] border border-white/70 bg-white p-3 shadow-[var(--shadow-elegant)]">
              <img
                src={heroImage}
                alt={title}
                loading="lazy"
                width={1400}
                height={1100}
                className="aspect-[4/3] w-full rounded-[28px] rounded-bl-[96px] object-cover"
              />
            </div>
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
      className="inline-flex items-center justify-center rounded-full bg-[var(--gradient-brand)] px-7 py-4 text-base font-semibold text-white shadow-[var(--shadow-elegant)] transition hover:scale-[1.02]"
    >
      {label}
    </a>
  );
}

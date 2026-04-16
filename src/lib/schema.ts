import { siteConfig } from "@/config/site";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Optician",
  "@id": `${siteConfig.url}/#business`,
  name: siteConfig.name,
  image: `${siteConfig.url}/favicon.png`,
  url: siteConfig.url,
  telephone: `+55${siteConfig.phoneRaw}`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.zip,
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -20.8137,
    longitude: -49.3759,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "12:00",
    },
  ],
  sameAs: [siteConfig.instagram].filter(Boolean),
  foundingDate: String(siteConfig.foundedYear),
  description: siteConfig.description,
};

export function buildFAQSchema(faqs: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

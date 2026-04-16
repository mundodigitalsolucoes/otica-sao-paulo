/**
 * Posts do blog da Ótica São Paulo.
 * Edite este arquivo para adicionar, remover ou atualizar artigos.
 */

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string; // ISO
  dateLabel: string;
  author: string;
  cover: string;
  content: { type: "p" | "h2" | "ul"; text?: string; items?: string[] }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "como-escolher-armacao-ideal",
    title: "Como escolher a armação ideal para o seu rosto",
    excerpt:
      "Formato do rosto, estilo de vida e conforto: um guia simples para acertar na escolha da armação dos seus óculos.",
    category: "Óculos de Grau",
    readTime: "5 min",
    date: "2025-01-10",
    dateLabel: "10 de janeiro de 2025",
    author: "Equipe Ótica São Paulo",
    cover:
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=1600&q=80",
    content: [
      {
        type: "p",
        text: "Escolher a armação certa vai muito além de estética. Ela precisa combinar com o seu rosto, o seu estilo de vida e, claro, com o seu conforto no dia a dia. Por isso, antes de qualquer coisa, vale entender três pontos essenciais.",
      },
      { type: "h2", text: "1. O formato do rosto" },
      {
        type: "p",
        text: "Rostos arredondados ganham com armações angulares. Rostos quadrados pedem modelos com curvas suaves. Já formatos ovais combinam com praticamente tudo. Em rostos longos, armações largas equilibram a proporção.",
      },
      { type: "h2", text: "2. O seu estilo de vida" },
      {
        type: "p",
        text: "Quem trabalha muito tempo no computador, dirige longas distâncias ou pratica esportes precisa de armações leves, resistentes e com boa fixação. Materiais como acetato e titânio costumam atender bem.",
      },
      { type: "h2", text: "3. O conforto" },
      {
        type: "ul",
        items: [
          "Hastes bem ajustadas, sem apertar atrás das orelhas",
          "Plaquetas confortáveis no nariz",
          "Peso equilibrado para uso prolongado",
          "Lentes adequadas ao seu grau e rotina",
        ],
      },
      {
        type: "p",
        text: "Na Ótica São Paulo, nosso atendimento consultivo ajuda você a unir tudo isso com calma e segurança. Venha experimentar — escolher os óculos certos faz diferença todos os dias.",
      },
    ],
  },
  {
    slug: "lentes-multifocais-vale-a-pena",
    title: "Lentes multifocais: vale a pena fazer a transição?",
    excerpt:
      "Entenda como funcionam as lentes multifocais, quem mais se beneficia delas e o que esperar nos primeiros dias de uso.",
    category: "Lentes",
    readTime: "4 min",
    date: "2024-12-18",
    dateLabel: "18 de dezembro de 2024",
    author: "Equipe Ótica São Paulo",
    cover:
      "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=1600&q=80",
    content: [
      {
        type: "p",
        text: "A partir dos 40 anos, é comum começar a sentir dificuldade para enxergar de perto. As lentes multifocais foram desenvolvidas exatamente para resolver isso: em uma única lente, você tem visão para perto, intermediário e longe.",
      },
      { type: "h2", text: "Como funcionam" },
      {
        type: "p",
        text: "A lente possui regiões com graus diferentes que se distribuem suavemente, sem linhas visíveis. O olhar segue naturalmente para baixo quando você lê, e para cima quando olha à distância.",
      },
      { type: "h2", text: "Quem se beneficia mais" },
      {
        type: "ul",
        items: [
          "Quem já usa óculos para perto e para longe",
          "Quem não quer trocar de óculos várias vezes ao dia",
          "Quem trabalha com computador, papéis e atendimento",
          "Quem busca praticidade e estética",
        ],
      },
      {
        type: "p",
        text: "Os primeiros dias exigem um pequeno período de adaptação, e por isso a orientação do profissional faz toda a diferença. Conte com a gente para escolher a lente certa para a sua rotina.",
      },
    ],
  },
  {
    slug: "cuidados-com-oculos-de-sol",
    title: "Óculos de sol: cuidados que prolongam a vida da peça",
    excerpt:
      "Limpeza, armazenamento e proteção UV: pequenas atitudes diárias que mantêm seus óculos solares como novos por muito mais tempo.",
    category: "Óculos de Sol",
    readTime: "3 min",
    date: "2024-11-22",
    dateLabel: "22 de novembro de 2024",
    author: "Equipe Ótica São Paulo",
    cover:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=1600&q=80",
    content: [
      {
        type: "p",
        text: "Óculos de sol bem cuidados duram anos sem perder a beleza ou a eficiência da proteção UV. E os cuidados são simples — basta criar bons hábitos.",
      },
      { type: "h2", text: "Limpeza correta" },
      {
        type: "p",
        text: "Use sempre água corrente e uma gota de detergente neutro. Seque com flanela própria de microfibra. Evite camisetas, papel e produtos de limpeza doméstica — eles riscam as lentes com o tempo.",
      },
      { type: "h2", text: "Armazenamento" },
      {
        type: "ul",
        items: [
          "Guarde sempre no estojo rígido",
          "Não deixe dentro do carro exposto ao calor",
          "Apoie sempre com as lentes para cima",
          "Use as duas mãos ao colocar e tirar",
        ],
      },
      { type: "h2", text: "Proteção UV" },
      {
        type: "p",
        text: "Lentes escuras sem proteção UV são piores do que não usar óculos: a pupila dilata e recebe ainda mais radiação. Garanta sempre que seus óculos solares tenham proteção UV 400 — algo que conferimos em todos os modelos da loja.",
      },
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

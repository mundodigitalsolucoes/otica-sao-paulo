export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  dateLabel: string;
  author: string;
  cover: string;
  content: { type: "p" | "h2" | "ul"; text?: string; items?: string[] }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "como-escolher-armacao-ideal-para-o-rosto",
    title: "Como escolher a armação ideal para o seu rosto",
    excerpt: "Formato do rosto, estilo de vida e conforto: um guia simples para acertar na escolha da armação.",
    category: "Guia de compra",
    readTime: "5 min",
    date: "2026-04-01",
    dateLabel: "1 de abril de 2026",
    author: "Equipe Ótica São Paulo",
    cover: "/images/gallery/armacoes-grau-close.webp",
    content: [
      { type: "p", text: "A armação certa precisa combinar com o seu rosto, a sua rotina e a sensação de conforto no dia a dia. Mais do que estética, ela influencia como você usa o óculos e como se sente com ele." },
      { type: "h2", text: "Observe o formato do rosto" },
      { type: "p", text: "Rostos arredondados costumam conversar bem com linhas mais retas. Rostos quadrados ganham equilíbrio com curvas suaves. Rostos ovais geralmente aceitam bem vários modelos." },
      { type: "h2", text: "Leve sua rotina em conta" },
      { type: "ul", items: ["Quem trabalha em tela precisa de conforto e leveza", "Quem dirige bastante precisa de visão nítida e bom ajuste", "Quem usa o óculos o dia inteiro deve priorizar encaixe e estabilidade"] },
      { type: "p", text: "Na Ótica São Paulo, a escolha é feita com calma para unir estética, conforto e segurança na compra." },
    ],
  },
  {
    slug: "quando-e-hora-de-trocar-os-oculos-de-grau",
    title: "Quando é hora de trocar seus óculos de grau",
    excerpt: "Alguns sinais passam despercebidos, mas mostram que seu óculos já não está entregando o que deveria.",
    category: "Saúde visual",
    readTime: "4 min",
    date: "2026-04-03",
    dateLabel: "3 de abril de 2026",
    author: "Equipe Ótica São Paulo",
    cover: "/images/home/especialistas-otica-sao-paulo.jpg",
    content: [
      { type: "p", text: "Muita gente se acostuma com um desconforto gradual e demora para perceber que os óculos já não estão atendendo bem. Dor de cabeça, cansaço visual e dificuldade para ler são alertas importantes." },
      { type: "h2", text: "Sinais mais comuns" },
      { type: "ul", items: ["Visão embaçada com frequência", "Cansaço ao usar celular ou computador", "Armação torta, pesada ou desconfortável", "Mudança na sua receita recente"] },
      { type: "p", text: "Trocar no momento certo evita desconforto, melhora sua produtividade e devolve segurança para atividades do dia a dia." },
    ],
  },
  {
    slug: "lentes-antirreflexo-valem-a-pena",
    title: "Lentes antirreflexo valem a pena?",
    excerpt: "Entenda quando esse tratamento faz diferença na prática e por que ele melhora conforto e estética.",
    category: "Lentes",
    readTime: "4 min",
    date: "2026-04-05",
    dateLabel: "5 de abril de 2026",
    author: "Equipe Ótica São Paulo",
    cover: "/images/home/vitrine-oculos-grau.jpg",
    content: [
      { type: "p", text: "O antirreflexo reduz brilhos incômodos e melhora a nitidez em várias situações, principalmente para quem usa telas, lê bastante ou dirige à noite." },
      { type: "h2", text: "Onde ele ajuda mais" },
      { type: "ul", items: ["Computador e celular", "Ambientes com muita iluminação artificial", "Direção noturna", "Melhor aparência das lentes nas fotos e no contato visual"] },
      { type: "p", text: "Nem sempre a lente mais barata é a que entrega o melhor resultado no uso diário. O ideal é entender sua rotina antes de decidir." },
    ],
  },
  {
    slug: "cuidados-essenciais-com-lentes-de-contato",
    title: "Cuidados essenciais com lentes de contato",
    excerpt: "Pequenos hábitos fazem toda a diferença para usar lentes com segurança e conforto.",
    category: "Lentes",
    readTime: "5 min",
    date: "2026-04-07",
    dateLabel: "7 de abril de 2026",
    author: "Equipe Ótica São Paulo",
    cover: "/images/gallery/lente-de-contato.png",
    content: [
      { type: "p", text: "As lentes de contato precisam de uma rotina correta de higiene. Isso evita irritações, melhora o conforto e aumenta a vida útil do produto." },
      { type: "h2", text: "Cuidados básicos" },
      { type: "ul", items: ["Lave bem as mãos antes de manusear", "Use a solução indicada para higienização", "Nunca durma com a lente sem orientação", "Respeite o período de troca do fabricante"] },
      { type: "p", text: "Se houver ardência, ressecamento ou desconforto fora do normal, vale conversar com a ótica e revisar a adaptação." },
    ],
  },
  {
    slug: "como-melhorar-o-conforto-visual-no-dia-a-dia",
    title: "Como melhorar o conforto visual no dia a dia",
    excerpt: "Tela, iluminação e hábitos de uso interferem muito mais na sua visão do que parece.",
    category: "Saúde visual",
    readTime: "4 min",
    date: "2026-04-09",
    dateLabel: "9 de abril de 2026",
    author: "Equipe Ótica São Paulo",
    cover: "/images/home/vitrine-oculos-solar.jpg",
    content: [
      { type: "p", text: "Conforto visual não depende só do grau. A forma como você usa tela, lê, dirige e se expõe à luz interfere direto no cansaço ocular." },
      { type: "h2", text: "Boas práticas" },
      { type: "ul", items: ["Faça pausas ao longo do dia", "Ajuste brilho e contraste das telas", "Use iluminação adequada para leitura", "Mantenha seus óculos ajustados e atualizados"] },
      { type: "p", text: "Com pequenas correções, muita gente sente menos desconforto e melhora a qualidade de vida visual." },
    ],
  },
  {
    slug: "como-escolher-uma-otica-de-confianca-em-rio-preto",
    title: "Como escolher uma ótica de confiança em São José do Rio Preto",
    excerpt: "Preço importa, mas confiança, orientação e pós-venda fazem a diferença na experiência completa.",
    category: "Conteúdo local",
    readTime: "5 min",
    date: "2026-04-11",
    dateLabel: "11 de abril de 2026",
    author: "Equipe Ótica São Paulo",
    cover: "/images/home/fachada-otica-sao-paulo.png",
    content: [
      { type: "p", text: "Escolher uma ótica vai além de comparar preço. O que garante uma boa compra é a soma entre atendimento, explicação clara, variedade, confiança e suporte depois da venda." },
      { type: "h2", text: "O que vale observar" },
      { type: "ul", items: ["Reputação no Google", "Tempo de mercado e tradição local", "Atendimento consultivo", "Qualidade de ajuste e pós-venda", "Capacidade de explicar o que está sendo indicado"] },
      { type: "p", text: "No fim, a melhor ótica é aquela em que você sente segurança para decidir bem, sem pressa e sem dúvida no que está levando." },
    ],
  },
];

export const blogCategories = ["Todos", ...new Set(blogPosts.map((post) => post.category))];

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

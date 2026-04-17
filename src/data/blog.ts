export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  dateLabel: string;
  updatedAt?: string;
  updatedLabel?: string;
  author: string;
  cover: string;
  content: { type: "p" | "h2" | "ul"; text?: string; items?: string[] }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "como-escolher-armacao-ideal-para-o-seu-rosto",
    title: "Como escolher a armação ideal para o seu rosto",
    excerpt:
      "Formato do rosto, estilo de vida e conforto: um guia simples para acertar na escolha da armação dos seus óculos.",
    category: "Guia de compra",
    readTime: "5 min",
    date: "2026-04-17",
    dateLabel: "17 de abril de 2026",
    updatedAt: "2026-04-17",
    updatedLabel: "17 de abril de 2026",
    author: "Equipe Ótica São Paulo",
    cover:
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=1600&q=80",
    content: [
      {
        type: "p",
        text: "Escolher a armação certa vai muito além da aparência. Ela precisa conversar com o seu rosto, com a sua rotina e com o conforto que você precisa no dia a dia. Quando esses três pontos se encaixam, o óculos deixa de ser apenas necessário e passa a ser uma escolha segura.",
      },
      { type: "h2", text: "Observe o formato do rosto" },
      {
        type: "p",
        text: "Rostos arredondados costumam harmonizar bem com armações mais retas. Rostos quadrados, por outro lado, geralmente ficam mais equilibrados com modelos de traços suaves. Em rostos ovais, a variedade é maior. O segredo não é seguir uma regra rígida, e sim buscar equilíbrio visual.",
      },
      { type: "h2", text: "Considere a rotina" },
      {
        type: "ul",
        items: [
          "Quem trabalha no computador o dia inteiro costuma precisar de conforto prolongado.",
          "Quem dirige bastante pode se beneficiar de lentes e armações mais leves.",
          "Quem usa o óculos o dia todo precisa de ajuste preciso no nariz e nas hastes.",
        ],
      },
      { type: "h2", text: "Conforto vem antes da pressa" },
      {
        type: "p",
        text: "Uma armação bonita, mas desconfortável, vira problema rápido. Por isso, vale experimentar sem correria, observar o encaixe e entender se o modelo acompanha bem o seu dia. Esse cuidado evita arrependimento e melhora sua experiência desde o primeiro uso.",
      },
      {
        type: "p",
        text: "Na Ótica São Paulo, nosso atendimento consultivo existe justamente para isso: ajudar você a escolher com calma, clareza e segurança.",
      },
    ],
  },
  {
    slug: "quando-e-hora-de-trocar-seus-oculos-de-grau",
    title: "Quando é hora de trocar seus óculos de grau",
    excerpt:
      "Nem sempre o problema está no olho. Às vezes, o sinal de troca está no desconforto, no encaixe ou na mudança da sua rotina visual.",
    category: "Saúde visual",
    readTime: "4 min",
    date: "2026-04-16",
    dateLabel: "16 de abril de 2026",
    updatedAt: "2026-04-16",
    updatedLabel: "16 de abril de 2026",
    author: "Equipe Ótica São Paulo",
    cover:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1600&q=80",
    content: [
      {
        type: "p",
        text: "Muita gente só pensa em trocar os óculos quando a receita muda. Só que o corpo costuma dar outros sinais antes disso. Dor de cabeça, visão cansada, dificuldade para ler e desconforto ao usar o celular são alguns deles.",
      },
      { type: "h2", text: "Sinais comuns de que o óculos já não acompanha sua rotina" },
      {
        type: "ul",
        items: [
          "Você sente cansaço visual com frequência.",
          "A armação entorta, escorrega ou aperta demais.",
          "A lente já está muito riscada.",
          "Sua visão mudou para perto, longe ou telas.",
        ],
      },
      {
        type: "p",
        text: "Outro ponto importante é a fase da vida. Quem começa a sentir mais dificuldade para leitura ou alternância entre perto e longe pode precisar de uma nova solução óptica, não apenas de uma armação nova.",
      },
      { type: "h2", text: "Trocar é também ganhar conforto" },
      {
        type: "p",
        text: "Um novo par de óculos pode melhorar não só a visão, mas a disposição no trabalho, a leitura, a direção e a qualidade do dia. A troca certa devolve praticidade e reduz o desgaste visual da rotina.",
      },
    ],
  },
  {
    slug: "lentes-antirreflexo-valem-a-pena",
    title: "Lentes antirreflexo valem a pena?",
    excerpt:
      "Para muita gente, sim. Especialmente para quem dirige, usa tela com frequência ou quer mais nitidez e conforto visual ao longo do dia.",
    category: "Lentes",
    readTime: "4 min",
    date: "2026-04-15",
    dateLabel: "15 de abril de 2026",
    updatedAt: "2026-04-15",
    updatedLabel: "15 de abril de 2026",
    author: "Equipe Ótica São Paulo",
    cover:
      "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=1600&q=80",
    content: [
      {
        type: "p",
        text: "O antirreflexo costuma fazer diferença real na rotina. Ele reduz reflexos de luz em ambientes internos, melhora a nitidez para quem dirige à noite e deixa a visão mais confortável para quem passa horas entre telas, lâmpadas e iluminação artificial.",
      },
      { type: "h2", text: "Em quais situações ele mais ajuda?" },
      {
        type: "ul",
        items: [
          "Uso frequente de computador, celular e televisão.",
          "Direção noturna com luzes fortes no campo visual.",
          "Ambientes comerciais, escritórios e clínicas.",
          "Quem busca uma estética mais limpa nas lentes.",
        ],
      },
      {
        type: "p",
        text: "Além do conforto, o antirreflexo também melhora a aparência do óculos em fotos e conversas presenciais, porque diminui o brilho que esconde os olhos atrás da lente.",
      },
      { type: "h2", text: "Vale para todo mundo?" },
      {
        type: "p",
        text: "Nem toda lente precisa do mesmo conjunto de tratamentos. O ideal é avaliar sua rotina, sua prescrição e o nível de uso do óculos. Em muitos casos, o antirreflexo faz bastante sentido. Em outros, pode ser combinado com filtro azul, fotossensível ou proteção extra contra riscos.",
      },
    ],
  },
  {
    slug: "cuidados-essenciais-com-lentes-de-contato",
    title: "Cuidados essenciais com lentes de contato",
    excerpt:
      "Usar lentes de contato exige praticidade com responsabilidade. Pequenos hábitos ajudam a manter conforto e segurança no uso diário.",
    category: "Lentes",
    readTime: "5 min",
    date: "2026-04-14",
    dateLabel: "14 de abril de 2026",
    updatedAt: "2026-04-14",
    updatedLabel: "14 de abril de 2026",
    author: "Equipe Ótica São Paulo",
    cover:
      "https://images.unsplash.com/photo-1583156093411-6f3a9b71d96d?auto=format&fit=crop&w=1600&q=80",
    content: [
      {
        type: "p",
        text: "Lentes de contato oferecem liberdade e praticidade, mas exigem rotina correta de higiene. O conforto no uso passa diretamente pelos cuidados com as mãos, com o estojo e com o tempo de troca indicado para cada tipo de lente.",
      },
      { type: "h2", text: "Hábitos que fazem diferença" },
      {
        type: "ul",
        items: [
          "Lave e seque bem as mãos antes de manusear as lentes.",
          "Use apenas a solução indicada para limpeza e armazenamento.",
          "Não durma com lentes se o modelo não for próprio para isso.",
          "Respeite o prazo de troca recomendado.",
          "Troque o estojo periodicamente.",
        ],
      },
      {
        type: "p",
        text: "Ardência, sensação de areia nos olhos ou ressecamento recorrente não devem ser ignorados. Esses sinais podem indicar adaptação ruim, uso prolongado ou necessidade de outro tipo de lente.",
      },
      {
        type: "p",
        text: "Na Ótica São Paulo, orientamos cada etapa do uso para que a experiência com lentes seja prática, confortável e segura.",
      },
    ],
  },
  {
    slug: "como-melhorar-o-conforto-visual-no-dia-a-dia",
    title: "Como melhorar o conforto visual no dia a dia",
    excerpt:
      "Telas, iluminação ruim e postura inadequada aumentam o cansaço visual. Pequenos ajustes ajudam muito na rotina.",
    category: "Saúde visual",
    readTime: "4 min",
    date: "2026-04-13",
    dateLabel: "13 de abril de 2026",
    updatedAt: "2026-04-13",
    updatedLabel: "13 de abril de 2026",
    author: "Equipe Ótica São Paulo",
    cover:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
    content: [
      {
        type: "p",
        text: "Com tantas horas em frente ao computador e ao celular, sentir os olhos cansados virou algo comum. Mas comum não significa normal. O desconforto visual pode ser reduzido com ajustes simples na rotina e no uso correto dos óculos.",
      },
      { type: "h2", text: "O que ajuda no dia a dia" },
      {
        type: "ul",
        items: [
          "Pausas curtas durante longos períodos de tela.",
          "Distância adequada entre olhos e monitor.",
          "Boa iluminação no ambiente de leitura e trabalho.",
          "Lentes adequadas para sua rotina visual.",
        ],
      },
      {
        type: "p",
        text: "Quando a lente não acompanha sua necessidade real, o esforço do olho aumenta. É aí que entram sintomas como dor de cabeça, sensação de peso nos olhos e dificuldade para manter foco.",
      },
      {
        type: "p",
        text: "Se sua rotina mudou, vale revisar também seus óculos. Às vezes, o desconforto não vem do excesso de trabalho. Vem de uma solução visual que já não acompanha você.",
      },
    ],
  },
  {
    slug: "como-escolher-uma-otica-de-confianca-em-sao-jose-do-rio-preto",
    title: "Como escolher uma ótica de confiança em São José do Rio Preto",
    excerpt:
      "Preço importa, mas confiança pesa mais. Veja o que observar antes de comprar óculos de grau, solar ou lentes na cidade.",
    category: "Conteúdo local",
    readTime: "5 min",
    date: "2026-04-12",
    dateLabel: "12 de abril de 2026",
    updatedAt: "2026-04-12",
    updatedLabel: "12 de abril de 2026",
    author: "Equipe Ótica São Paulo",
    cover:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1600&q=80",
    content: [
      {
        type: "p",
        text: "Em uma cidade com muitas óticas, escolher onde comprar vai muito além de comparar preço. A qualidade da orientação, o ajuste da armação, a procedência das lentes e o suporte pós-venda fazem diferença real na experiência do cliente.",
      },
      { type: "h2", text: "O que observar antes de decidir" },
      {
        type: "ul",
        items: [
          "Tempo de mercado e reputação local.",
          "Avaliações no Google e comentários de clientes.",
          "Clareza na explicação sobre lentes e tratamentos.",
          "Atendimento humanizado, sem pressa e sem pressão.",
          "Suporte para ajustes, consertos e pós-venda.",
        ],
      },
      {
        type: "p",
        text: "Uma ótica confiável não tenta empurrar produto. Ela entende o que você precisa, orienta com segurança e ajuda a escolher a melhor solução para sua rotina.",
      },
      {
        type: "p",
        text: "Em São José do Rio Preto, tradição, atendimento e confiança ainda contam muito. E contam mais ainda quando vêm acompanhados de presença digital forte e facilidade para falar pelo WhatsApp.",
      },
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

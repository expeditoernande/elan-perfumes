export type Tone = "ambar" | "iris" | "vetiver" | "figo" | "salvia" | "baunilha";

export type Fragrance = {
  id: string;
  name: string;
  family: string;
  description: string;
  notes: { top: string; heart: string; base: string };
  volume: string;
  price: number;
  compareAt?: number;
  tone: Tone;
  badge?: string;
};

export type Kit = {
  id: string;
  name: string;
  tagline: string;
  items: string;
  price: number;
  period?: string;
  highlight?: boolean;
};

export type Testimonial = {
  name: string;
  city: string;
  quote: string;
  rating: number;
};

export const brand = {
  name: "ÉLAN",
  suffix: "Perfumes",
  tagline: "Fragrâncias autorais em pequenos lotes",
  description:
    "Perfumes autorais em pequenos lotes: madeiras, âmbar e flores noturnas. Peça 3 amostras grátis, descubra seu signo olfativo e receba em todo o Brasil.",
  city: "São Paulo, SP",
  founded: "2021",
  instagram: "https://instagram.com/elanperfumes",
  whatsapp: "https://wa.me/5511999999999",
  email: "contato@elanperfumes.com.br",
};

export const nav = [
  { label: "Fragrâncias", href: "#fragrancias" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Kits", href: "#kits" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
];

export const stats = [
  { value: "4,9/5", label: "em 312 avaliações" },
  { value: "+2.400", label: "fragrâncias entregues" },
  { value: "48h", label: "postagem em todo o Brasil" },
];

export const guarantees = [
  {
    title: "3 amostras grátis",
    text: "2 ml de cada fragrância, com frete grátis na primeira remessa.",
  },
  {
    title: "Troca em 30 dias",
    text: "Não é a sua assinatura? Devolvemos sem perguntas.",
  },
  {
    title: "Lotes de 200 frascos",
    text: "Cada batch é numerado e nunca é reidestilado.",
  },
];

export const fragrances: Fragrance[] = [
  {
    id: "ambar-47",
    name: "Âmbar 47",
    family: "Âmbar especiado",
    description:
      "Âmbar denso e luminoso, atravessado por pimenta rosa e um fundo de baunilha queimada.",
    notes: {
      top: "Pimenta rosa, bergamota",
      heart: "Âmbar, íris",
      base: "Baunilha, cashmeran",
    },
    volume: "50 ml",
    price: 289,
    compareAt: 339,
    tone: "ambar",
    badge: "Mais vendido",
  },
  {
    id: "nevoa-de-iris",
    name: "Névoa de Íris",
    family: "Floral powder",
    description:
      "Pó de íris sobre couro macio: seco no início e aveludado no fundo.",
    notes: {
      top: "Íris, mimosa",
      heart: "Íris, flor de laranjeira",
      base: "Couro, almíscar",
    },
    volume: "50 ml",
    price: 259,
    tone: "iris",
  },
  {
    id: "vetiver-noturno",
    name: "Vetiver Noturno",
    family: "Madeira verde",
    description:
      "Terra molhada, vetiver fumegante e um toque de grapefruit só nos primeiros minutos.",
    notes: {
      top: "Grapefruit, bergamota",
      heart: "Vetiver, cipreste",
      base: "Terra, sândalo",
    },
    volume: "50 ml",
    price: 299,
    tone: "vetiver",
  },
  {
    id: "figo-verde",
    name: "Figo Verde",
    family: "Fresco verde",
    description:
      "Figo verde partido e folha de violeta, com final de brisa fresca.",
    notes: {
      top: "Figo verde, zest de lima",
      heart: "Folha de violeta, jasmim",
      base: "Madeira clara, âmbar",
    },
    volume: "30 ml",
    price: 189,
    tone: "figo",
    badge: "Tamanho de viagem",
  },
  {
    id: "salvia-e-fumaca",
    name: "Sálvia & Fumaça",
    family: "Aromático",
    description:
      "Sálvia, alecrim e uma brasa de incenso que fica na roupa por horas depois do banho.",
    notes: {
      top: "Sálvia, alecrim",
      heart: "Lavanda, íris",
      base: "Incenso, cedro",
    },
    volume: "50 ml",
    price: 269,
    tone: "salvia",
  },
  {
    id: "baunilha-salgada",
    name: "Baunilha Salgada",
    family: "Gourmand",
    description:
      "Baunilha de Madagascar com sal marinho e caramelo tostado: doce sem virar sobremesa.",
    notes: {
      top: "Sal, raspas de baunilha",
      heart: "Baunilha, flor de laranjeira",
      base: "Caramelo, tonka",
    },
    volume: "50 ml",
    price: 279,
    tone: "baunilha",
    badge: "Novo",
  },
];

export const steps = [
  {
    index: "01",
    title: "Conte seu estilo",
    text: "Responda 6 perguntas sobre luz, clima e ocasião — do fresco ao âmbar intenso.",
  },
  {
    index: "02",
    title: "Peça 3 amostras",
    text: "Você recebe 2 ml de cada fragrância, com frete grátis na primeira remessa.",
  },
  {
    index: "03",
    title: "Use por 7 dias",
    text: "Teste na pele e na roupa. O frasco cheio só é enviado depois que você escolher.",
  },
];

export const kits: Kit[] = [
  {
    id: "descoberta",
    name: "Descoberta",
    tagline: "Para quem nunca experimentou",
    items: "3 amostras de 2 ml + guia de notas",
    price: 49,
    period: "frete grátis",
  },
  {
    id: "triade",
    name: "Tríade",
    tagline: "O mais escolhido",
    items: "3 frascos de 30 ml + caixa presenteável",
    price: 649,
    period: "de R$ 799",
    highlight: true,
  },
  {
    id: "assinatura",
    name: "Assinatura Mensal",
    tagline: "Para quem coleciona",
    items: "2 frascos de 50 ml por mês, com troca de fragrância",
    price: 149,
    period: "por mês",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Mariana R.",
    city: "Curitiba, PR",
    quote:
      "Amostrei quatro e a Tríade veio logo depois. O Âmbar 47 é exatamente o que eu procurava há anos — e dura o dia todo.",
    rating: 5,
  },
  {
    name: "Diego A.",
    city: "Recife, PE",
    quote:
      "Gostei de receber 2 ml e não ter que decidir no escuro. O questionário me puxou para o Vetiver e foi certeiro.",
    rating: 5,
  },
  {
    name: "Bianca T.",
    city: "Belo Horizonte, MG",
    quote:
      "Embalagem de presente impecável e o kit chegou antes do prazo. Já assinei o segundo mês.",
    rating: 5,
  },
];

export const faq = [
  {
    question: "As amostras são realmente grátis?",
    answer:
      "Sim. As 3 amostras de 2 ml saem de graça na primeira remessa — você paga apenas o frete, quando necessário. Não pedimos cartão para participar.",
  },
  {
    question: "Quanto tempo dura um frasco de 50 ml?",
    answer:
      "De 4 a 6 meses com uso diário. A concentração é Eau de Parfum (18–22%), então uma aplicação nos pulsos e na base do pescoço é suficiente.",
  },
  {
    question: "Vocês vendem para todo o Brasil?",
    answer:
      "Sim. Enviamos por transportadora e pelos Correios para todo o território nacional, com postagem em até 48 horas úteis. Frete grátis acima de R$ 199.",
  },
  {
    question: "Posso devolver se não gostar?",
    answer:
      "Você tem 30 dias corridos a partir do recebimento para pedir a troca ou o reembolso integral. As amostras não precisam ser devolvidas.",
  },
  {
    question: "As fragrâncias são autorais ou importadas?",
    answer:
      "São 100% autorais: composições exclusivas produzidas em lotes de até 200 unidades na nossa fábrica em São Paulo, com fragranceiro parceiro e registro na ANVISA.",
  },
];

export const formatPrice = (value: number) =>
  `R$ ${value.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`;
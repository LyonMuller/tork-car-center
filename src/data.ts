import { ServiceItem, DifferentialItem, StepItem, FaqItem, TestimonialItem } from './types';
import { IMAGES } from './images';

export const WHATSAPP_NUMBER = "+5547988249993";
export const WHATSAPP_FORMATTED = "+55 47 98824-9993";
export const ADDRESS_TEXT = "R. São Paulo, 4619 - Petrópolis, Joinville - SC, 89208-545";
export const HOURS_TEXT = "Segunda a sexta, das 08h às 18h";

// Google Maps routing link for Petrópolis R. São Paulo 4619
export const GOOGLE_MAPS_LINK = "https://www.google.com/maps/dir/?api=1&destination=R.+S%C3%A3o+Paulo,+4619+-+Petr%C3%B3polis,+Joinville+-+SC,+89208-545";

// Shared logic to generate perfect WhatsApp contact link
export function getWhatsAppLink(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const HERO_CONTENT = {
  title: "Tudo o que seu carro precisa em um só lugar, em Joinville",
  subtitle: "Mecânica, ar-condicionado, elétrica e estética automotiva com atendimento prático, comunicação clara e foco em resolver o problema do seu carro sem complicação.",
  primaryCta: "Falar no WhatsApp",
  secondaryCta: "Solicitar atendimento",
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "mecanica",
    title: "Mecânica",
    description: "Manutenção e reparos para melhorar segurança, funcionamento e desempenho.",
    longDescription: "Cuidamos de freios, suspensão, embreagem, correias, motor e transmissão. Realizamos manutenções preventivas e corretivas completas para garantir que você dirija com total segurança na estrada ou na cidade.",
    iconName: "Wrench",
    imageUrl: IMAGES.diagnosticEngine,
    symptoms: [
      "Barulho estranho ao frear ou acelerar",
      "Pedal de freio baixo, mole ou duro demais",
      "Dificuldade ao dar a partida no motor",
      "Vazamento de óleo ou poça de fluido sob o carro",
      "Luz de injeção eletrônica acesa no painel",
      "Revisão preventiva geral ou troca de óleo"
    ]
  },
  {
    id: "ar-condicionado",
    title: "Ar-condicionado",
    description: "Mais conforto para dirigir com o sistema funcionando da forma certa.",
    longDescription: "Higienização completa, recarga de gás refrigerante, troca do filtro de cabine e reparo de compressores, tubulações e vazamentos. Dirija no clima ideal, respirando um ar limpo e livre de bactérias.",
    iconName: "Wind",
    imageUrl: IMAGES.heroWorkshop,
    symptoms: [
      "Ar-condicionado simplesmente não gela",
      "Vento muito fraco saindo dos difusores",
      "Cheiro forte de mofo ou umidade ao ligar o ar",
      "Ruído metálico forte ao acionar o botão do ar-condicionado",
      "Embaçamento rápido dos vidros em dias de chuva"
    ]
  },
  {
    id: "eletrica",
    title: "Elétrica",
    description: "Diagnóstico e correção de falhas para evitar transtornos e manter o carro confiável.",
    longDescription: "Diagnósticos computadorizados com scanner automotivo de última geração. Solucionamos problemas de baterias, alternadores, motores de partida, chicotes elétricos, iluminação e acessórios eletrônicos.",
    iconName: "Zap",
    imageUrl: IMAGES.diagnosticEngine,
    symptoms: [
      "Bateria descarregando com frequência",
      "Faróis, setas ou lanternas que queimam repetidamente",
      "Vidros elétricos ou travas elétricas travados",
      "Instabilidade ou oscilação na iluminação interna e do painel",
      "Pane elétrica geral ou alarmes disparando sozinhos"
    ]
  },
  {
    id: "estetica",
    title: "Estética automotiva",
    description: "Mais cuidado com a aparência, valorização e apresentação do seu veículo.",
    longDescription: "Lavagem técnica detalhada de chassi e motor, polimento comercial/técnico com eliminação de riscos superficiais, higienização interna profunda dos estofados e teto, e revitalização de plásticos e borrachas.",
    iconName: "Sparkles",
    imageUrl: IMAGES.detailingService,
    symptoms: [
      "Pintura opaca, sem brilho ou com micro-riscos",
      "Tecido/couro dos bancos manchado ou com poeira encruada",
      "Faróis amarelados e opacos prejudicando a visibilidade",
      "Odor impregnado no interior (cigarro, poeira, mofo)",
      "Acúmulo de sujeira pesada nas caixas de rodas e motor"
    ]
  }
];

export const DIFFERENTIALS_DATA: DifferentialItem[] = [
  {
    id: "atendimento-claro",
    title: "Atendimento claro e sem complicação",
    description: "Você entende melhor o que o carro precisa e tem mais segurança para decidir.",
    iconName: "MessageSquareText"
  },
  {
    id: "varios-servicos",
    title: "Vários serviços em um só lugar",
    description: "Mais praticidade para resolver diferentes necessidades sem ficar indo de oficina em oficina.",
    iconName: "Layers"
  },
  {
    id: "cuidado-completo",
    title: "Cuidado completo com o veículo",
    description: "Aqui, o foco não é apenas reparar. É cuidar do carro como um todo.",
    iconName: "ShieldCheck"
  },
  {
    id: "agilidade",
    title: "Agilidade no atendimento",
    description: "Uma estrutura pensada para facilitar sua rotina e reduzir sua dor de cabeça.",
    iconName: "Clock"
  },
  {
    id: "comodidade",
    title: "Mais comodidade para você",
    description: "Menos deslocamento, menos perda de tempo e mais facilidade para manter o carro em dia.",
    iconName: "Smile"
  },
  {
    id: "foco-solucao",
    title: "Foco em solução",
    description: "A prioridade é entregar um atendimento objetivo, útil e eficiente para quem precisa resolver.",
    iconName: "CheckCircle2"
  }
];

export const STEPS_DATA: StepItem[] = [
  {
    number: 1,
    title: "Entre em contato",
    description: "Chame no WhatsApp para informar o que seu carro está precisando."
  },
  {
    number: 2,
    title: "Receba o direcionamento",
    description: "A equipe orienta o melhor caminho para o seu atendimento."
  },
  {
    number: 3,
    title: "Leve seu carro até a unidade",
    description: "Atendimento em Joinville, no bairro Petrópolis."
  },
  {
    number: 4,
    title: "Resolva com mais praticidade",
    description: "Mecânica, elétrica, ar-condicionado e estética em um só lugar."
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    id: "faq-1",
    question: "Quais serviços a Tork Car Center oferece?",
    answer: "A Tork Car Center atua de forma integrada com serviços de mecânica preventiva e corretiva, manutenção e higienização de ar-condicionado, diagnósticos e correções eletrônicas em geral, e estética automotiva (incluindo lavagens técnicas detalhadas, polimento e higienizações internas)."
  },
  {
    id: "faq-2",
    question: "Onde a Tork Car Center está localizada?",
    answer: "Estamos localizados na R. São Paulo, 4619 - no bairro Petrópolis, em Joinville - SC, CEP 89208-545. Nosso ponto possui fácil acesso e excelente estrutura física para receber seu veículo."
  },
  {
    id: "faq-3",
    question: "Qual é o horário de atendimento?",
    answer: "Nosso horário de funcionamento padrão é de segunda a sexta-feira, das 08h às 18h (sem fechar ao meio-dia para melhor atender sua rotina de trabalho)."
  },
  {
    id: "faq-4",
    question: "Posso chamar direto no WhatsApp para agendar?",
    answer: "Sim! Você pode falar diretamente pelo número +55 47 98824-9993. Oferecemos agendamento dinâmico pelo chat para simplificar sua vinda até aqui."
  },
  {
    id: "faq-5",
    question: "A Tork Car Center atende diferentes necessidades do carro no mesmo lugar?",
    answer: "Exatamente! Esse é o nosso maior propósito. Reunimos mecânica, elétrica, ar-condicionado e estética no mesmo espaço de atendimento para que você economize tempo, evite lidar com vários fornecedores e tenha uma garantia integrada."
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "testimonial-1",
    name: "Mateus Alencastro",
    role: "Proprietário de Mitsubishi Outlander",
    quote: "Excelente serviço no ar-condicionado e na parte elétrica. Meu Outlander voltou a gelar perfeitamente. O atendimento foi muito ágil, direto ao ponto e com preço justo.",
    rating: 5,
    avatarFallback: "MA"
  },
  {
    id: "testimonial-2",
    name: "Roberta Schmidt",
    role: "Proprietária de Honda Civic",
    quote: "Levei meu Civic para fazer revisão de freios e também polimento de pintura. É incrível poder resolver mecânica e estética em um só lugar sem dor de cabeça. Serviço impecável.",
    rating: 5,
    avatarFallback: "RS"
  },
  {
    id: "testimonial-3",
    name: "Carlos E. Veiga",
    role: "Proprietário de VW Nivus",
    quote: "Finalmente uma oficina honesta e transparente em Joinville. Fizeram o diagnóstico eletrônico rápido com scanner de última geração e resolveram o problema elétrico que outras duas oficinas não acharam.",
    rating: 5,
    avatarFallback: "CV"
  },
  {
    id: "testimonial-4",
    name: "Mariana L. Ramos",
    role: "Proprietária de Jeep Compass",
    quote: "Amei a praticidade de usar o diagnóstico do site e agendar pelo WhatsApp. O pessoal é extremamente atencioso e o retorno do orçamento foi muito rápido. Indico de olhos fechados!",
    rating: 5,
    avatarFallback: "MR"
  }
];


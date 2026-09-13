export interface CardItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface BonusItem {
  tag: string;
  title: string;
  description: string;
  image: string;
}

export const SAMPLE_CARDS: CardItem[] = [
  {
    id: 1,
    title: 'Cuidados Clínicos & Intervenções Práticas de Enfermagem',
    category: 'Prática Clínica & Cuidados',
    image: 'https://i.ibb.co/PZn5FpBG/Chat-GPT-Image-2-de-set-de-2026-01-29-27.png',
  },
  {
    id: 2,
    title: 'Protocolos de Administração & Segurança Clínica',
    category: 'Protocolos & Farmacologia',
    image: 'https://i.ibb.co/2HCPQzp/Chat-GPT-Image-2-de-set-de-2026-01-32-58.png',
  },
  {
    id: 3,
    title: 'Procedimentos & Intervenções Clínicas de Enfermagem',
    category: 'Prática Clínica & Cuidados',
    image: 'https://i.ibb.co/vCqczqSn/Chat-GPT-Image-30-de-ago-de-2026-10-21-14.png',
  },
  {
    id: 4,
    title: 'Protocolos de Segurança & Administração Prática',
    category: 'Protocolos & Segurança Clínica',
    image: 'https://i.ibb.co/VZ9T8Mk/Chat-GPT-Image-30-de-ago-de-2026-10-22-01.png',
  },
  {
    id: 5,
    title: 'Monitorização, Avaliação & Intervenção Rápida',
    category: 'Monitorização & Avaliação',
    image: 'https://i.ibb.co/z1Jqfn1/Chat-GPT-Image-30-de-ago-de-2026-10-22-25.png',
  },
  {
    id: 6,
    title: 'Higiene das Mãos & Controlo de Infeção (Cards 91 a 99)',
    category: 'Controlo de Infeção & EPI',
    image: 'https://i.ibb.co/4gC5FdpJ/Chat-GPT-Image-29-de-ago-de-2026-00-43-42.png',
  },
  {
    id: 7,
    title: 'Preparação do Material & Cuidados ao Utente (Cards 100 a 108)',
    category: 'Cuidados ao Utente & Procedimentos',
    image: 'https://i.ibb.co/5WXB11Hy/Chat-GPT-Image-29-de-ago-de-2026-00-47-08.png',
  },
  {
    id: 8,
    title: 'Fundamentos de Farmacologia Clínica (Cards 1 a 9)',
    category: 'Farmacologia Básica',
    image: 'https://i.ibb.co/kgpTSnvL/Chat-GPT-Image-29-de-ago-de-2026-01-59-23.png',
  },
  {
    id: 9,
    title: 'Vias de Administração de Medicamentos (Cards 10 a 18)',
    category: 'Vias de Administração',
    image: 'https://i.ibb.co/8nsTbv1S/Chat-GPT-Image-29-de-ago-de-2026-01-59-33.png',
  },
  {
    id: 10,
    title: 'Segurança, 9 Certos & Verificação de Doses (Cards 19 a 27)',
    category: 'Segurança na Medicação',
    image: 'https://i.ibb.co/wrxmWyD2/Chat-GPT-Image-29-de-ago-de-2026-01-59-42.png',
  },
  {
    id: 11,
    title: 'Registo Clínico, Doses & Janela Terapêutica (Cards 28 a 36)',
    category: 'Cálculo de Doses & Farmacologia',
    image: 'https://i.ibb.co/FLZk76MD/Chat-GPT-Image-29-de-ago-de-2026-01-59-59.png',
  },
];

export const BONUSES: BonusItem[] = [
  {
    tag: 'Bónus 1',
    title: 'Guia de Bolso: Interações Medicamentosas',
    description: 'Manual com 80 combinações e incompatibilidades críticas.',
    image: 'https://i.ibb.co/sdtxw0js/1788010800.png',
  },
  {
    tag: 'Bónus 2',
    title: 'Manual de Diluição e Injetáveis',
    description: '+70 fármacos, diluentes compatíveis e estabilidades.',
    image: 'https://i.ibb.co/qL6xPZ7t/1788010881.png',
  },
  {
    tag: 'Bónus 3',
    title: 'Calculadoras Clínicas Essenciais',
    description: 'Tabelas práticas com fórmulas de ClCr, H₂O, MAP e Glasgow.',
    image: 'https://i.ibb.co/BHLKVsHb/1788010680.png',
  },
  {
    tag: 'Bónus 4',
    title: 'Protocolos de PCR & Emergência',
    description: 'Fluxogramas de suporte avançado, ritmos e doses de choque.',
    image: 'https://i.ibb.co/Xk2vbfhs/1788010943.png',
  },
];

export const FAQ_LIST: FaqItem[] = [
  {
    q: 'Como e quando recebo o acesso aos 300+ Cards?',
    a: 'O acesso é 100% imediato e digital. Assim que o pagamento for confirmado (instantâneo via M-Pesa, E-Mola ou Cartão Bancário), receberá o acesso imediatamente tanto no seu WhatsApp quanto no seu E-mail, com o link direto para descarregar todos os ficheiros em PDF de alta resolução (versão digital para telemóvel/tablet e versão pronta para impressão de bolso) juntamente com os 4 Guias Bónus exclusivos.',
  },
  {
    q: 'Os conteúdos estão adaptados à realidade clínica e académica em Moçambique?',
    a: 'Sim! Todos os termos técnicos, unidades laboratoriais, procedimentos de enfermagem, farmacologia e condutas de socorro e emergência estão perfeitamente adaptados para estudantes e profissionais de Moçambique, apoiando os estudos, exames, estágios e a prática em centros de saúde e hospitais.',
  },
  {
    q: 'Posso usar no telemóvel, tablet e computador?',
    a: 'Sim, os cards foram desenhados com layout otimizado tanto para leitura rápida no ecrã do telemóvel (Android e iOS), tablets quanto para computadores e leitores de PDF comuns.',
  },
  {
    q: 'Posso imprimir os cards para levar no bolso da farda?',
    a: 'Sim! Além da versão digital de alta definição, incluímos a versão em PDF pronta a imprimir em formato de bolso, ideal para organizar e consultar rapidamente nos turnos e estágios.',
  },
  {
    q: 'Quais são as formas de pagamento disponíveis?',
    a: 'Disponibilizamos os métodos de pagamento oficiais e seguros de Moçambique: M-Pesa, E-Mola e Cartão Bancário (Visa / Mastercard), com liberação imediata.',
  },
  {
    q: 'E se os cards não corresponderem às minhas expectativas?',
    a: 'Tem 7 dias de garantia incondicional de 100% de satisfação. Se por qualquer motivo sentir que o material não ajudou os seus estudos ou a sua segurança clínica, basta enviar uma mensagem e devolvemos 100% do valor pago, sem burocracia.',
  },
];

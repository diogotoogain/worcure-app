export interface ModuleContent {
  id: string;
  number: number;
  title: string;
  description: string;
  objectives: string[];
  duration: number; // minutes
  sections: ModuleSection[];
}

export interface ModuleSection {
  id: string;
  title: string;
  content: string;
  type: 'text' | 'video' | 'exercise' | 'quiz';
  duration: number;
}

export const moduleContents: Record<number, ModuleContent> = {
  1: {
    id: 'module-1',
    number: 1,
    title: 'Introdução ao WORCURE',
    description: 'Compreenda os fundamentos do programa WORCURE e como ele pode transformar sua vida pessoal e profissional.',
    objectives: [
      'Entender a metodologia WORCURE',
      'Conhecer a estrutura do programa',
      'Definir objetivos pessoais',
      'Criar um plano de ação inicial'
    ],
    duration: 60,
    sections: [
      {
        id: 'intro-1',
        title: 'Bem-vindo ao WORCURE',
        content: 'O WORCURE é um programa revolucionário que combina desenvolvimento pessoal com crescimento profissional...',
        type: 'video',
        duration: 15
      },
      {
        id: 'intro-2',
        title: 'Como funciona o programa',
        content: 'Estrutura de 13 módulos principais + 720 módulos FLIX...',
        type: 'text',
        duration: 20
      },
      {
        id: 'intro-3',
        title: 'Definindo seus objetivos',
        content: 'Exercício prático para estabelecer metas claras...',
        type: 'exercise',
        duration: 25
      }
    ]
  },
  2: {
    id: 'module-2',
    number: 2,
    title: 'Mindset de Crescimento',
    description: 'Desenvolva uma mentalidade de crescimento que possibilite alcançar seus objetivos.',
    objectives: [
      'Compreender o conceito de mindset',
      'Identificar crenças limitantes',
      'Desenvolver pensamento positivo',
      'Criar hábitos mentais saudáveis'
    ],
    duration: 90,
    sections: []
  },
  3: {
    id: 'module-3',
    number: 3,
    title: 'Produtividade e Gestão do Tempo',
    description: 'Aprenda técnicas avançadas para maximizar sua produtividade e gerenciar seu tempo de forma eficaz.',
    objectives: [
      'Dominar técnicas de gestão do tempo',
      'Eliminar procrastinação',
      'Priorizar tarefas importantes',
      'Criar sistemas de produtividade'
    ],
    duration: 120,
    sections: []
  },
  4: {
    id: 'module-4',
    number: 4,
    title: 'Liderança Pessoal',
    description: 'Desenvolva habilidades de liderança começando por liderar a si mesmo.',
    objectives: [
      'Desenvolver autoconhecimento',
      'Fortalecer inteligência emocional',
      'Tomar decisões eficazes',
      'Influenciar positivamente'
    ],
    duration: 90,
    sections: []
  },
  5: {
    id: 'module-5',
    number: 5,
    title: 'Comunicação Eficaz',
    description: 'Aprimore suas habilidades de comunicação em diferentes contextos.',
    objectives: [
      'Comunicar com clareza',
      'Escutar ativamente',
      'Desenvolver empatia',
      'Negociar com eficiência'
    ],
    duration: 90,
    sections: []
  },
  6: {
    id: 'module-6',
    number: 6,
    title: 'Planejamento Estratégico',
    description: 'Crie e execute planos estratégicos para alcançar seus objetivos de longo prazo.',
    objectives: [
      'Definir visão e missão',
      'Estabelecer metas SMART',
      'Criar planos de ação',
      'Monitorar progresso'
    ],
    duration: 120,
    sections: []
  },
  7: {
    id: 'module-7',
    number: 7,
    title: 'Inteligência Emocional',
    description: 'Desenvolva sua capacidade de reconhecer e gerenciar emoções.',
    objectives: [
      'Reconhecer emoções',
      'Regular resposta emocional',
      'Desenvolver resiliência',
      'Cultivar relacionamentos saudáveis'
    ],
    duration: 90,
    sections: []
  },
  8: {
    id: 'module-8',
    number: 8,
    title: 'Saúde e Bem-estar',
    description: 'Construa uma base sólida de saúde física e mental.',
    objectives: [
      'Estabelecer rotinas saudáveis',
      'Gerenciar estresse',
      'Melhorar qualidade do sono',
      'Cultivar bem-estar integral'
    ],
    duration: 90,
    sections: []
  },
  9: {
    id: 'module-9',
    number: 9,
    title: 'Finanças Pessoais',
    description: 'Aprenda a gerenciar suas finanças e construir riqueza.',
    objectives: [
      'Criar orçamento pessoal',
      'Eliminar dívidas',
      'Investir com inteligência',
      'Planejar o futuro financeiro'
    ],
    duration: 120,
    sections: []
  },
  10: {
    id: 'module-10',
    number: 10,
    title: 'Networking e Relacionamentos',
    description: 'Construa e mantenha uma rede de relacionamentos valiosa.',
    objectives: [
      'Desenvolver networking estratégico',
      'Construir relacionamentos autênticos',
      'Manter conexões significativas',
      'Criar valor para sua rede'
    ],
    duration: 90,
    sections: []
  },
  11: {
    id: 'module-11',
    number: 11,
    title: 'Inovação e Criatividade',
    description: 'Desperte seu potencial criativo e aprenda a inovar.',
    objectives: [
      'Estimular pensamento criativo',
      'Resolver problemas complexos',
      'Implementar inovações',
      'Superar bloqueios criativos'
    ],
    duration: 90,
    sections: []
  },
  12: {
    id: 'module-12',
    number: 12,
    title: 'Execução e Resultados',
    description: 'Transforme planos em ação e alcance resultados extraordinários.',
    objectives: [
      'Superar a procrastinação',
      'Manter foco e disciplina',
      'Medir e otimizar resultados',
      'Celebrar conquistas'
    ],
    duration: 120,
    sections: []
  },
  13: {
    id: 'module-13',
    number: 13,
    title: 'Integração e Continuidade',
    description: 'Integre todos os aprendizados e crie um plano de desenvolvimento contínuo.',
    objectives: [
      'Revisar jornada completa',
      'Integrar conhecimentos',
      'Criar plano de longo prazo',
      'Comprometer-se com crescimento contínuo'
    ],
    duration: 90,
    sections: []
  }
};

export const getModule = (moduleNumber: number): ModuleContent | undefined => {
  return moduleContents[moduleNumber];
};

export const getAllModules = (): ModuleContent[] => {
  return Object.values(moduleContents);
};

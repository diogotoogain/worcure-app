export interface FlixContent {
  id: string;
  category: 'mindset' | 'productivity' | 'leadership' | 'business' | 'health' | 'relationships';
  moduleNumber: number;
  title: string;
  description: string;
  duration: number; // minutes
  level: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
}

// Helper function to generate FLIX modules
const generateFlixModules = (
  category: FlixContent['category'],
  baseTopics: string[]
): FlixContent[] => {
  const modules: FlixContent[] = [];
  const levels: FlixContent['level'][] = ['beginner', 'intermediate', 'advanced'];
  const durations = [5, 10, 15, 20];

  for (let i = 1; i <= 120; i++) {
    const topicIndex = (i - 1) % baseTopics.length;
    const levelIndex = Math.floor((i - 1) / 40);
    const level = levels[levelIndex] || 'intermediate';

    modules.push({
      id: `${category}-${i}`,
      category,
      moduleNumber: i,
      title: `${baseTopics[topicIndex]} ${i}`,
      description: `Aprenda sobre ${baseTopics[topicIndex].toLowerCase()} neste módulo ${level}.`,
      duration: durations[i % durations.length],
      level,
      tags: [category, level, baseTopics[topicIndex].toLowerCase()],
    });
  }

  return modules;
};

// Mindset Topics (120 modules)
const mindsetTopics = [
  'Mentalidade de Crescimento',
  'Autoconfiança',
  'Pensamento Positivo',
  'Superação de Limites',
  'Foco e Concentração',
  'Resiliência Mental',
  'Gratidão Diária',
  'Visualização de Sucesso',
  'Meditação',
  'Autoconhecimento',
];

// Productivity Topics (120 modules)
const productivityTopics = [
  'Gestão do Tempo',
  'Técnica Pomodoro',
  'GTD - Getting Things Done',
  'Eliminação de Distrações',
  'Sistemas de Produtividade',
  'Automação de Tarefas',
  'Priorização',
  'Deep Work',
  'Organização Pessoal',
  'Hábitos Produtivos',
];

// Leadership Topics (120 modules)
const leadershipTopics = [
  'Liderança Servidora',
  'Tomada de Decisão',
  'Delegação Eficaz',
  'Feedback Construtivo',
  'Coaching e Mentoria',
  'Gestão de Conflitos',
  'Motivação de Equipes',
  'Cultura Organizacional',
  'Liderança pelo Exemplo',
  'Desenvolvimento de Talentos',
];

// Business Topics (120 modules)
const businessTopics = [
  'Estratégia de Negócios',
  'Marketing Digital',
  'Vendas Consultivas',
  'Gestão Financeira',
  'Empreendedorismo',
  'Análise de Mercado',
  'Inovação Empresarial',
  'Gestão de Projetos',
  'Negociação Empresarial',
  'Crescimento Escalável',
];

// Health Topics (120 modules)
const healthTopics = [
  'Nutrição Balanceada',
  'Exercícios Físicos',
  'Sono de Qualidade',
  'Gestão de Estresse',
  'Saúde Mental',
  'Hidratação',
  'Alongamento',
  'Prevenção de Doenças',
  'Bem-estar Integral',
  'Energia Vital',
];

// Relationships Topics (120 modules)
const relationshipsTopics = [
  'Comunicação Assertiva',
  'Escuta Ativa',
  'Empatia',
  'Resolução de Conflitos',
  'Relacionamentos Saudáveis',
  'Networking Eficaz',
  'Trabalho em Equipe',
  'Colaboração',
  'Construção de Confiança',
  'Inteligência Social',
];

// Generate all FLIX modules
export const flixModules: Record<string, FlixContent[]> = {
  mindset: generateFlixModules('mindset', mindsetTopics),
  productivity: generateFlixModules('productivity', productivityTopics),
  leadership: generateFlixModules('leadership', leadershipTopics),
  business: generateFlixModules('business', businessTopics),
  health: generateFlixModules('health', healthTopics),
  relationships: generateFlixModules('relationships', relationshipsTopics),
};

// Helper functions
export const getFlixByCategory = (category: string): FlixContent[] => {
  return flixModules[category] || [];
};

export const getAllFlix = (): FlixContent[] => {
  return Object.values(flixModules).flat();
};

export const getFlixById = (id: string): FlixContent | undefined => {
  return getAllFlix().find(flix => flix.id === id);
};

export const getFlixByLevel = (level: FlixContent['level']): FlixContent[] => {
  return getAllFlix().filter(flix => flix.level === level);
};

export const searchFlix = (query: string): FlixContent[] => {
  const lowerQuery = query.toLowerCase();
  return getAllFlix().filter(
    flix =>
      flix.title.toLowerCase().includes(lowerQuery) ||
      flix.description.toLowerCase().includes(lowerQuery) ||
      flix.tags.some(tag => tag.includes(lowerQuery))
  );
};

// Get FLIX statistics
export const getFlixStats = () => {
  const allFlix = getAllFlix();
  return {
    total: allFlix.length,
    byCategory: {
      mindset: flixModules.mindset.length,
      productivity: flixModules.productivity.length,
      leadership: flixModules.leadership.length,
      business: flixModules.business.length,
      health: flixModules.health.length,
      relationships: flixModules.relationships.length,
    },
    byLevel: {
      beginner: getFlixByLevel('beginner').length,
      intermediate: getFlixByLevel('intermediate').length,
      advanced: getFlixByLevel('advanced').length,
    },
    totalDuration: allFlix.reduce((sum, flix) => sum + flix.duration, 0),
  };
};

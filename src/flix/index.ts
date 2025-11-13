import React from 'react';
import { FlixModuleConfig, generateFlixModules, flixCategories } from './generator';

export { generateFlixModules, flixCategories };
export type { FlixModuleConfig };

// Export all FLIX modules organized by category
export const allFlixModules = generateFlixModules();

// Get modules by category
export const getModulesByCategory = (category: string): FlixModuleConfig[] => {
  return allFlixModules.filter(module => module.category === category);
};

// Get module by ID
export const getModuleById = (id: string): FlixModuleConfig | undefined => {
  return allFlixModules.find(module => module.id === id);
};

// Search modules
export const searchModules = (query: string): FlixModuleConfig[] => {
  const lowerQuery = query.toLowerCase();
  return allFlixModules.filter(module => 
    module.name.toLowerCase().includes(lowerQuery) ||
    module.description.toLowerCase().includes(lowerQuery) ||
    module.tags.some(tag => tag.includes(lowerQuery))
  );
};

// Get module statistics
export const getFlixStats = () => {
  return {
    total: allFlixModules.length,
    byCategory: flixCategories.map(cat => ({
      category: cat,
      count: getModulesByCategory(cat).length
    })),
    byDifficulty: {
      beginner: allFlixModules.filter(m => m.difficulty === 'beginner').length,
      intermediate: allFlixModules.filter(m => m.difficulty === 'intermediate').length,
      advanced: allFlixModules.filter(m => m.difficulty === 'advanced').length
    }
  };
};

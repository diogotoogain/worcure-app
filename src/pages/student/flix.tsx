import React, { useState } from 'react';
import styled from 'styled-components';
import { Layout } from '@/components/shared';
import { FlixCard } from '@/components/student';
import { getAllFlix, getFlixByCategory } from '@/flix';

const FlixContainer = styled.div`
  padding: 20px 0;
`;

const Header = styled.div`
  margin-bottom: 32px;
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.text.light};
  font-size: 36px;
  margin: 0 0 16px 0;
  font-weight: 700;
`;

const Description = styled.p`
  color: ${props => props.theme.colors.text.dark};
  font-size: 18px;
  line-height: 1.6;
`;

const FilterBar = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 32px;
  flex-wrap: wrap;
`;

const FilterButton = styled.button<{ active: boolean }>`
  padding: 10px 20px;
  border-radius: 20px;
  border: 2px solid ${props => props.active ? props.theme.colors.primary : 'rgba(255, 255, 255, 0.2)'};
  background: ${props => props.active ? props.theme.colors.primary : 'transparent'};
  color: ${props => props.theme.colors.text.light};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${props => props.theme.colors.primary};
  }
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 16px;
  margin-bottom: 32px;
  padding: 24px;
  background: ${props => props.theme.colors.secondary};
  border-radius: 12px;
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
`;

const StatLabel = styled.div`
  font-size: 12px;
  color: ${props => props.theme.colors.text.dark};
  margin-top: 4px;
  text-transform: uppercase;
`;

const FlixGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

type Category = 'all' | 'mindset' | 'productivity' | 'leadership' | 'business' | 'health' | 'relationships';

export default function FlixPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const allFlix = getAllFlix();

  const filteredFlix = selectedCategory === 'all' 
    ? allFlix 
    : getFlixByCategory(selectedCategory);

  const categories = [
    { id: 'all' as Category, label: 'Todos', icon: '🌟' },
    { id: 'mindset' as Category, label: 'Mindset', icon: '🧠' },
    { id: 'productivity' as Category, label: 'Produtividade', icon: '⚡' },
    { id: 'leadership' as Category, label: 'Liderança', icon: '👑' },
    { id: 'business' as Category, label: 'Negócios', icon: '💼' },
    { id: 'health' as Category, label: 'Saúde', icon: '❤️' },
    { id: 'relationships' as Category, label: 'Relacionamentos', icon: '🤝' },
  ];

  return (
    <Layout>
      <FlixContainer>
        <Header>
          <Title>FLIX - Aprendizado Rápido</Title>
          <Description>
            720 módulos rápidos e práticos em 6 categorias essenciais para seu desenvolvimento
          </Description>
        </Header>

        <Stats>
          <StatItem>
            <StatValue>{allFlix.length}</StatValue>
            <StatLabel>Total de Módulos</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>6</StatValue>
            <StatLabel>Categorias</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>120</StatValue>
            <StatLabel>Por Categoria</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>5-20</StatValue>
            <StatLabel>Minutos</StatLabel>
          </StatItem>
        </Stats>

        <FilterBar>
          {categories.map(category => (
            <FilterButton
              key={category.id}
              active={selectedCategory === category.id}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.icon} {category.label}
            </FilterButton>
          ))}
        </FilterBar>

        <FlixGrid>
          {filteredFlix.slice(0, 24).map(flix => (
            <FlixCard
              key={flix.id}
              category={flix.category}
              title={flix.title}
              duration={flix.duration}
              isCompleted={false}
              onClick={() => {
                window.location.href = `/student/flix/${flix.id}`;
              }}
            />
          ))}
        </FlixGrid>
      </FlixContainer>
    </Layout>
  );
}

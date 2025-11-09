import React from 'react';
import styled from 'styled-components';
import { Card } from '../shared';

interface FlixCardProps {
  category: 'mindset' | 'productivity' | 'leadership' | 'business' | 'health' | 'relationships';
  title: string;
  duration: number; // minutes
  isCompleted: boolean;
  onClick?: () => void;
}

const categoryIcons = {
  mindset: '🧠',
  productivity: '⚡',
  leadership: '👑',
  business: '💼',
  health: '❤️',
  relationships: '🤝'
};

const categoryColors = {
  mindset: '#9B59B6',
  productivity: '#3498DB',
  leadership: '#E74C3C',
  business: '#F39C12',
  health: '#2ECC71',
  relationships: '#E91E63'
};

const StyledFlixCard = styled(Card)<{ categoryColor: string }>`
  border-left: 4px solid ${props => props.categoryColor};
  position: relative;
`;

const FlixHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
`;

const CategoryIcon = styled.div`
  font-size: 24px;
`;

const FlixTitle = styled.h4`
  margin: 0;
  color: ${props => props.theme.colors.text.light};
  font-size: 16px;
  flex: 1;
`;

const FlixMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
`;

const Duration = styled.span`
  color: ${props => props.theme.colors.text.dark};
  font-size: 14px;
`;

const CompletedBadge = styled.span`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text.light};
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
`;

export const FlixCard: React.FC<FlixCardProps> = ({
  category,
  title,
  duration,
  isCompleted,
  onClick
}) => {
  return (
    <StyledFlixCard 
      onClick={onClick}
      categoryColor={categoryColors[category]}
    >
      <FlixHeader>
        <CategoryIcon>{categoryIcons[category]}</CategoryIcon>
        <FlixTitle>{title}</FlixTitle>
      </FlixHeader>
      <FlixMeta>
        <Duration>{duration} min</Duration>
        {isCompleted && <CompletedBadge>✓ Completo</CompletedBadge>}
      </FlixMeta>
    </StyledFlixCard>
  );
};

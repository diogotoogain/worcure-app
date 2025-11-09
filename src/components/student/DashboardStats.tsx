import React from 'react';
import styled from 'styled-components';
import { Card } from '../shared';

interface DashboardStatsProps {
  completedModules: number;
  totalModules: number;
  completedFlix: number;
  totalFlix: number;
  currentStreak: number;
  totalHours: number;
}

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 32px;
`;

const StatCard = styled(Card)`
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 8px;
`;

const StatLabel = styled.div`
  font-size: 14px;
  color: ${props => props.theme.colors.text.dark};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const StatIcon = styled.div`
  font-size: 40px;
  margin-bottom: 12px;
`;

export const DashboardStats: React.FC<DashboardStatsProps> = ({
  completedModules,
  totalModules,
  completedFlix,
  totalFlix,
  currentStreak,
  totalHours
}) => {
  return (
    <StatsGrid>
      <StatCard>
        <StatIcon>📚</StatIcon>
        <StatValue>{completedModules}/{totalModules}</StatValue>
        <StatLabel>Módulos Completados</StatLabel>
      </StatCard>
      
      <StatCard>
        <StatIcon>⚡</StatIcon>
        <StatValue>{completedFlix}/{totalFlix}</StatValue>
        <StatLabel>FLIX Completados</StatLabel>
      </StatCard>
      
      <StatCard>
        <StatIcon>🔥</StatIcon>
        <StatValue>{currentStreak}</StatValue>
        <StatLabel>Dias de Sequência</StatLabel>
      </StatCard>
      
      <StatCard>
        <StatIcon>⏱️</StatIcon>
        <StatValue>{totalHours}h</StatValue>
        <StatLabel>Horas Totais</StatLabel>
      </StatCard>
    </StatsGrid>
  );
};

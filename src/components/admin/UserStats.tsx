import React from 'react';
import styled from 'styled-components';
import { Card } from '../shared';

interface UserStatsProps {
  totalUsers: number;
  activeUsers: number;
  averageCompletion: number;
  totalRevenue: number;
}

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 32px;
`;

const StatCard = styled(Card)`
  background: linear-gradient(135deg, ${props => props.theme.colors.secondary} 0%, ${props => props.theme.colors.background} 100%);
`;

const StatContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StatInfo = styled.div`
  flex: 1;
`;

const StatValue = styled.div`
  font-size: 36px;
  font-weight: 700;
  color: ${props => props.theme.colors.text.light};
  margin-bottom: 4px;
`;

const StatLabel = styled.div`
  font-size: 14px;
  color: ${props => props.theme.colors.text.dark};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const StatIcon = styled.div`
  font-size: 48px;
  opacity: 0.7;
`;

export const UserStats: React.FC<UserStatsProps> = ({
  totalUsers,
  activeUsers,
  averageCompletion,
  totalRevenue
}) => {
  return (
    <StatsGrid>
      <StatCard>
        <StatContent>
          <StatInfo>
            <StatValue>{totalUsers}</StatValue>
            <StatLabel>Total de Usuários</StatLabel>
          </StatInfo>
          <StatIcon>👥</StatIcon>
        </StatContent>
      </StatCard>
      
      <StatCard>
        <StatContent>
          <StatInfo>
            <StatValue>{activeUsers}</StatValue>
            <StatLabel>Usuários Ativos</StatLabel>
          </StatInfo>
          <StatIcon>✅</StatIcon>
        </StatContent>
      </StatCard>
      
      <StatCard>
        <StatContent>
          <StatInfo>
            <StatValue>{averageCompletion}%</StatValue>
            <StatLabel>Conclusão Média</StatLabel>
          </StatInfo>
          <StatIcon>📊</StatIcon>
        </StatContent>
      </StatCard>
      
      <StatCard>
        <StatContent>
          <StatInfo>
            <StatValue>R$ {totalRevenue.toLocaleString('pt-BR')}</StatValue>
            <StatLabel>Receita Total</StatLabel>
          </StatInfo>
          <StatIcon>💰</StatIcon>
        </StatContent>
      </StatCard>
    </StatsGrid>
  );
};

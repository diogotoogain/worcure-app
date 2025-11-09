import React, { useState } from 'react';
import styled from 'styled-components';
import { Layout } from '@/components/shared';
import { UserStats, UserList } from '@/components/admin';

const DashboardContainer = styled.div`
  padding: 20px 0;
`;

const Section = styled.section`
  margin-bottom: 48px;
`;

const SectionTitle = styled.h2`
  color: ${props => props.theme.colors.text.light};
  font-size: 28px;
  margin: 0 0 24px 0;
  font-weight: 700;
`;

const mockUsers = [
  {
    id: '1',
    name: 'João Silva',
    email: 'joao@email.com',
    progress: 45,
    lastActive: '2024-11-09',
    subscription: 'premium' as const,
  },
  {
    id: '2',
    name: 'Maria Santos',
    email: 'maria@email.com',
    progress: 78,
    lastActive: '2024-11-08',
    subscription: 'premium' as const,
  },
  {
    id: '3',
    name: 'Pedro Costa',
    email: 'pedro@email.com',
    progress: 23,
    lastActive: '2024-11-07',
    subscription: 'free' as const,
  },
  {
    id: '4',
    name: 'Ana Oliveira',
    email: 'ana@email.com',
    progress: 90,
    lastActive: '2024-11-09',
    subscription: 'premium' as const,
  },
];

export default function AdminDashboard() {
  const [users] = useState(mockUsers);

  const stats = {
    totalUsers: 1247,
    activeUsers: 834,
    averageCompletion: 62,
    totalRevenue: 125000,
  };

  return (
    <Layout>
      <DashboardContainer>
        <Section>
          <SectionTitle>Estatísticas Gerais</SectionTitle>
          <UserStats {...stats} />
        </Section>

        <Section>
          <SectionTitle>Usuários Recentes</SectionTitle>
          <UserList 
            users={users}
            onUserClick={(user) => {
              console.log('User clicked:', user);
            }}
          />
        </Section>
      </DashboardContainer>
    </Layout>
  );
}

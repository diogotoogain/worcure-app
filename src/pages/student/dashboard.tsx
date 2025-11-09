import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Layout } from '@/components/shared';
import { DashboardStats, ModuleCard } from '@/components/student';
import { getAllModules } from '@/modules';
import { metricsService } from '@/utils/metrics';

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

const ModulesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 24px;
`;

export default function StudentDashboard() {
  const [metrics, setMetrics] = useState({
    completedModules: 0,
    totalModules: 13,
    completedFlix: 0,
    totalFlix: 720,
    currentStreak: 0,
    totalHours: 0,
  });

  const modules = getAllModules();

  useEffect(() => {
    // Load user metrics
    const loadMetrics = async () => {
      const userMetrics = await metricsService.getUserMetrics('current-user-id');
      setMetrics({
        completedModules: userMetrics.completedModules,
        totalModules: userMetrics.totalModules,
        completedFlix: userMetrics.completedFlix,
        totalFlix: userMetrics.totalFlix,
        currentStreak: userMetrics.currentStreak,
        totalHours: userMetrics.totalHours,
      });
    };

    loadMetrics();
  }, []);

  return (
    <Layout>
      <DashboardContainer>
        <Section>
          <SectionTitle>Seu Progresso</SectionTitle>
          <DashboardStats {...metrics} />
        </Section>

        <Section>
          <SectionTitle>Módulos Principais</SectionTitle>
          <ModulesGrid>
            {modules.map((module, index) => (
              <ModuleCard
                key={module.id}
                moduleNumber={module.number}
                title={module.title}
                description={module.description}
                progress={index === 0 ? 100 : index === 1 ? 45 : 0}
                isLocked={index > 1}
                onClick={() => {
                  if (index <= 1) {
                    window.location.href = `/student/module/${module.number}`;
                  }
                }}
              />
            ))}
          </ModulesGrid>
        </Section>
      </DashboardContainer>
    </Layout>
  );
}

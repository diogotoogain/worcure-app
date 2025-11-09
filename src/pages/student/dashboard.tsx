import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Layout from '@/components/shared/Layout';
import Card from '@/components/shared/Card';
import Dashboard from '@/modules/dashboard';

const PageTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.primary};
`;

const ModulesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const ModuleLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

const DashboardPage: React.FC = () => {
  const modules = [
    { name: 'Onboarding', path: '/student/onboarding', description: 'Get started with WORCURE' },
    { name: 'Profile', path: '/student/profile', description: 'Manage your profile' },
    { name: 'Metrics', path: '/student/metrics', description: 'View your metrics' },
    { name: 'Progress', path: '/student/progress', description: 'Track your progress' },
    { name: 'Assessments', path: '/student/assessments', description: 'Take assessments' },
    { name: 'Certificates', path: '/student/certificates', description: 'View certificates' },
    { name: 'Community', path: '/student/community', description: 'Join the community' },
    { name: 'Support', path: '/student/support', description: 'Get support' },
    { name: 'Settings', path: '/student/settings', description: 'Configure settings' },
    { name: 'Notifications', path: '/student/notifications', description: 'Manage notifications' },
    { name: 'Reports', path: '/student/reports', description: 'Generate reports' },
  ];

  return (
    <Layout>
      <PageTitle>Student Dashboard</PageTitle>
      <Dashboard />
      
      <h2 style={{ marginTop: '3rem', marginBottom: '1rem' }}>Quick Access</h2>
      <ModulesGrid>
        {modules.map((module) => (
          <Link key={module.path} href={module.path} passHref legacyBehavior>
            <ModuleLink>
              <Card title={module.name}>
                <p>{module.description}</p>
              </Card>
            </ModuleLink>
          </Link>
        ))}
      </ModulesGrid>
    </Layout>
  );
};

export default DashboardPage;

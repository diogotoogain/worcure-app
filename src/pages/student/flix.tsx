import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Layout from '@/components/shared/Layout';
import Card from '@/components/shared/Card';

const PageTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.primary};
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const CategoryLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

const ModuleCount = styled.span`
  display: inline-block;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.875rem;
  margin-left: 0.5rem;
`;

const FlixPage: React.FC = () => {
  const categories = [
    { name: 'Mindset', path: '/student/flix/mindset', description: 'Develop a growth mindset and mental resilience', moduleCount: 120 },
    { name: 'Productivity', path: '/student/flix/productivity', description: 'Master time management and efficiency', moduleCount: 120 },
    { name: 'Leadership', path: '/student/flix/leadership', description: 'Build leadership and team management skills', moduleCount: 120 },
    { name: 'Business', path: '/student/flix/business', description: 'Learn business strategy and operations', moduleCount: 120 },
    { name: 'Health', path: '/student/flix/health', description: 'Improve physical and mental wellness', moduleCount: 120 },
    { name: 'Relationships', path: '/student/flix/relationships', description: 'Enhance communication and connections', moduleCount: 120 },
  ];

  return (
    <Layout>
      <PageTitle>FLIX Learning Modules</PageTitle>
      <p>Explore 720 specialized learning modules across 6 core categories. Each category contains 120 focused modules designed to help you grow.</p>
      
      <CategoryGrid>
        {categories.map((category) => (
          <Link key={category.path} href={category.path} passHref legacyBehavior>
            <CategoryLink>
              <Card title={
                <>
                  {category.name}
                  <ModuleCount>{category.moduleCount} modules</ModuleCount>
                </>
              }>
                <p>{category.description}</p>
              </Card>
            </CategoryLink>
          </Link>
        ))}
      </CategoryGrid>
    </Layout>
  );
};

export default FlixPage;

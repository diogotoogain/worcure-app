import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import Layout from '@/components/shared/Layout';
import Card from '@/components/shared/Card';
import Button from '@/components/shared/Button';

const PageTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.primary};
  text-transform: capitalize;
`;

const BackLink = styled.a`
  color: ${props => props.theme.colors.text.dark};
  text-decoration: none;
  margin-bottom: 2rem;
  display: inline-block;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const ModulesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`;

const ModuleLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

const ModuleCard = styled(Card)`
  text-align: center;
  padding: 1rem;
`;

const ModuleContent = styled.div`
  margin-top: 2rem;
`;

const NavigationButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  justify-content: space-between;
`;

const FlixModulePage: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;
  
  // slug can be ['category'] or ['category', 'moduleId']
  const category = Array.isArray(slug) && slug.length > 0 ? slug[0] : null;
  const moduleId = Array.isArray(slug) && slug.length > 1 ? slug[1] : null;

  // If no category, redirect to flix home
  if (!category) {
    return (
      <Layout>
        <p>Loading...</p>
      </Layout>
    );
  }

  // If showing a specific module
  if (moduleId) {
    const moduleNumber = moduleId.replace('module-', '');
    const currentNum = parseInt(moduleNumber, 10);
    const prevModule = currentNum > 1 ? `module-${String(currentNum - 1).padStart(3, '0')}` : null;
    const nextModule = currentNum < 120 ? `module-${String(currentNum + 1).padStart(3, '0')}` : null;

    return (
      <Layout>
        <Link href={`/student/flix/${category}`} passHref legacyBehavior>
          <BackLink>← Back to {category} Modules</BackLink>
        </Link>
        
        <PageTitle>{category} - {moduleId}</PageTitle>
        
        <ModuleContent>
          <Card title="Module Content">
            <p>Welcome to module {moduleNumber} of the {category} learning path.</p>
            <p>This module is part of the comprehensive FLIX learning system designed to help you grow and develop your skills.</p>
            <p><strong>Topics covered in this module:</strong></p>
            <ul>
              <li>Topic 1: Introduction and Overview</li>
              <li>Topic 2: Core Concepts</li>
              <li>Topic 3: Practical Applications</li>
              <li>Topic 4: Exercises and Activities</li>
              <li>Topic 5: Summary and Key Takeaways</li>
            </ul>
          </Card>
          
          <NavigationButtons>
            <div>
              {prevModule && (
                <Link href={`/student/flix/${category}/${prevModule}`} passHref legacyBehavior>
                  <a><Button variant="secondary">← Previous Module</Button></a>
                </Link>
              )}
            </div>
            <div>
              {nextModule && (
                <Link href={`/student/flix/${category}/${nextModule}`} passHref legacyBehavior>
                  <a><Button>Next Module →</Button></a>
                </Link>
              )}
            </div>
          </NavigationButtons>
        </ModuleContent>
      </Layout>
    );
  }

  // If showing category listing
  const modules = Array.from({ length: 120 }, (_, i) => ({
    id: String(i + 1).padStart(3, '0'),
    name: `Module ${String(i + 1).padStart(3, '0')}`,
  }));

  return (
    <Layout>
      <Link href="/student/flix" passHref legacyBehavior>
        <BackLink>← Back to FLIX Categories</BackLink>
      </Link>
      
      <PageTitle>{category} Modules</PageTitle>
      <p>Select a module to start learning. Each module is designed to build upon the previous one.</p>
      
      <ModulesGrid>
        {modules.map((module) => (
          <Link 
            key={module.id} 
            href={`/student/flix/${category}/module-${module.id}`} 
            passHref 
            legacyBehavior
          >
            <ModuleLink>
              <ModuleCard>
                <strong>{module.name}</strong>
              </ModuleCard>
            </ModuleLink>
          </Link>
        ))}
      </ModulesGrid>
    </Layout>
  );
};

export default FlixModulePage;

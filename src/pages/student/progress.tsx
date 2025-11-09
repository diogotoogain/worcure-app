import React from 'react';
import styled from 'styled-components';
import Layout from '@/components/shared/Layout';
import Progress from '@/modules/progress';

const PageTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.primary};
`;

const ProgressPage: React.FC = () => {
  return (
    <Layout>
      <PageTitle>Your Progress</PageTitle>
      <Progress />
    </Layout>
  );
};

export default ProgressPage;

import React from 'react';
import styled from 'styled-components';
import Layout from '@/components/shared/Layout';
import Metrics from '@/modules/metrics';

const PageTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.primary};
`;

const MetricsPage: React.FC = () => {
  return (
    <Layout>
      <PageTitle>Your Metrics</PageTitle>
      <Metrics />
    </Layout>
  );
};

export default MetricsPage;

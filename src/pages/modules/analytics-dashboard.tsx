import React from 'react';
import MainLayout from '@/components/MainLayout';
import AnalyticsDashboard from '@/modules/analytics-dashboard';

const AnalyticsDashboardPage: React.FC = () => {
  return (
    <MainLayout>
      <AnalyticsDashboard />
    </MainLayout>
  );
};

export default AnalyticsDashboardPage;

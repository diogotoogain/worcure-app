import React from 'react';
import MainLayout from '@/components/MainLayout';
import MentalHealth from '@/modules/mental-health';

const MentalHealthPage: React.FC = () => {
  return (
    <MainLayout>
      <MentalHealth />
    </MainLayout>
  );
};

export default MentalHealthPage;

import React from 'react';
import MainLayout from '@/components/MainLayout';
import WellnessCore from '@/modules/wellness-core';

const WellnessCorePage: React.FC = () => {
  return (
    <MainLayout>
      <WellnessCore />
    </MainLayout>
  );
};

export default WellnessCorePage;

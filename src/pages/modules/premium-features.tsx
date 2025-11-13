import React from 'react';
import MainLayout from '@/components/MainLayout';
import PremiumFeatures from '@/modules/premium-features';

const PremiumFeaturesPage: React.FC = () => {
  return (
    <MainLayout>
      <PremiumFeatures />
    </MainLayout>
  );
};

export default PremiumFeaturesPage;

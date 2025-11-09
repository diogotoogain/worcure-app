import React from 'react';
import MainLayout from '@/components/MainLayout';
import NutritionTracker from '@/modules/nutrition-tracker';

const NutritionTrackerPage: React.FC = () => {
  return (
    <MainLayout>
      <NutritionTracker />
    </MainLayout>
  );
};

export default NutritionTrackerPage;

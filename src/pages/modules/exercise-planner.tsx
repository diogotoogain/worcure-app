import React from 'react';
import MainLayout from '@/components/MainLayout';
import ExercisePlanner from '@/modules/exercise-planner';

const ExercisePlannerPage: React.FC = () => {
  return (
    <MainLayout>
      <ExercisePlanner />
    </MainLayout>
  );
};

export default ExercisePlannerPage;

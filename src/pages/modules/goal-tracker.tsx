import React from 'react';
import MainLayout from '@/components/MainLayout';
import GoalTracker from '@/modules/goal-tracker';

const GoalTrackerPage: React.FC = () => {
  return (
    <MainLayout>
      <GoalTracker />
    </MainLayout>
  );
};

export default GoalTrackerPage;

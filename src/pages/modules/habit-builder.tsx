import React from 'react';
import MainLayout from '@/components/MainLayout';
import HabitBuilder from '@/modules/habit-builder';

const HabitBuilderPage: React.FC = () => {
  return (
    <MainLayout>
      <HabitBuilder />
    </MainLayout>
  );
};

export default HabitBuilderPage;

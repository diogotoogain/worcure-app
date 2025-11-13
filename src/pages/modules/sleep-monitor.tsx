import React from 'react';
import MainLayout from '@/components/MainLayout';
import SleepMonitor from '@/modules/sleep-monitor';

const SleepMonitorPage: React.FC = () => {
  return (
    <MainLayout>
      <SleepMonitor />
    </MainLayout>
  );
};

export default SleepMonitorPage;

import React from 'react';
import MainLayout from '@/components/MainLayout';
import AIAssistant from '@/modules/ai-assistant';

const AIAssistantPage: React.FC = () => {
  return (
    <MainLayout>
      <AIAssistant />
    </MainLayout>
  );
};

export default AIAssistantPage;

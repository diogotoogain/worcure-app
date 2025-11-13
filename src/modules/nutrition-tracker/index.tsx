import React from 'react';
import { Card, Title, Text } from '@/components/Layout';

const NutritionTracker: React.FC = () => {
  return (
    <Card>
      <Title>Nutrition Tracker</Title>
      <Text>
        Track your daily nutrition intake, monitor calories, macros, and micronutrients.
        Get personalized meal suggestions based on your goals.
      </Text>
      <Text>
        Features: Food logging, calorie counter, macro tracking, meal planning, nutritional insights.
      </Text>
    </Card>
  );
};

export default NutritionTracker;

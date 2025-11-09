import React from 'react';
import { Card, Title, Text } from '@/components/Layout';

const HabitBuilder: React.FC = () => {
  return (
    <Card>
      <Title>Habit Builder</Title>
      <Text>
        Build and maintain positive habits with streak tracking, reminders,
        and habit analytics.
      </Text>
      <Text>
        Features: Habit creation, streak tracking, reminders, habit statistics, achievement badges.
      </Text>
    </Card>
  );
};

export default HabitBuilder;

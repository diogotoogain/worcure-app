import React from 'react';
import { Card, Title, Text } from '@/components/Layout';

const ExercisePlanner: React.FC = () => {
  return (
    <Card>
      <Title>Exercise Planner</Title>
      <Text>
        Plan and track your workouts with personalized exercise routines.
        Monitor your progress and achieve your fitness goals.
      </Text>
      <Text>
        Features: Workout builder, exercise library, progress tracking, training schedules.
      </Text>
    </Card>
  );
};

export default ExercisePlanner;

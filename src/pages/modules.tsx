import React from 'react';
import MainLayout from '@/components/MainLayout';
import { Title, Text, Grid, Card } from '@/components/Layout';
import Link from 'next/link';

const modules = [
  { id: 'wellness-core', name: 'Wellness Core', path: '/modules/wellness-core' },
  { id: 'nutrition-tracker', name: 'Nutrition Tracker', path: '/modules/nutrition-tracker' },
  { id: 'exercise-planner', name: 'Exercise Planner', path: '/modules/exercise-planner' },
  { id: 'mental-health', name: 'Mental Health', path: '/modules/mental-health' },
  { id: 'sleep-monitor', name: 'Sleep Monitor', path: '/modules/sleep-monitor' },
  { id: 'habit-builder', name: 'Habit Builder', path: '/modules/habit-builder' },
  { id: 'goal-tracker', name: 'Goal Tracker', path: '/modules/goal-tracker' },
  { id: 'social-connect', name: 'Social Connect', path: '/modules/social-connect' },
  { id: 'education-hub', name: 'Education Hub', path: '/modules/education-hub' },
  { id: 'analytics-dashboard', name: 'Analytics Dashboard', path: '/modules/analytics-dashboard' },
  { id: 'ai-assistant', name: 'AI Assistant', path: '/modules/ai-assistant' },
  { id: 'community-forum', name: 'Community Forum', path: '/modules/community-forum' },
  { id: 'premium-features', name: 'Premium Features', path: '/modules/premium-features' }
];

const ModulesPage: React.FC = () => {
  return (
    <MainLayout>
      <Title>WORCURE MEMBERS Modules</Title>
      <Text>
        Explore all 13 main modules designed to support your wellness journey.
        Each module provides specialized tools and features for different aspects of your health.
      </Text>

      <Grid columns={3}>
        {modules.map((module) => (
          <Link href={module.path} key={module.id} passHref legacyBehavior>
            <Card style={{ cursor: 'pointer', transition: 'transform 0.2s' }}>
              <h3 style={{ color: '#1A9F8B', marginBottom: '12px' }}>{module.name}</h3>
              <Text>Click to explore this module</Text>
            </Card>
          </Link>
        ))}
      </Grid>
    </MainLayout>
  );
};

export default ModulesPage;

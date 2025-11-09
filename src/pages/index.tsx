import React from 'react';
import MainLayout from '@/components/MainLayout';
import { Title, Text, Grid, Card, Button } from '@/components/Layout';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <Title>Welcome to WORCURE MEMBERS</Title>
      <Text>
        Your comprehensive wellness platform with 13 main modules and 720 FLIX learning modules
        to help you achieve your health and wellness goals.
      </Text>

      <Grid columns={3}>
        <Card>
          <h3 style={{ color: '#1A9F8B' }}>13 Main Modules</h3>
          <Text>Access powerful wellness tools across nutrition, fitness, mental health, and more.</Text>
          <Link href="/modules" passHref legacyBehavior>
            <Button as="a">Explore Modules</Button>
          </Link>
        </Card>

        <Card>
          <h3 style={{ color: '#1A9F8B' }}>720 FLIX Modules</h3>
          <Text>Learn and grow with our extensive library of educational content and tutorials.</Text>
          <Link href="/flix" passHref legacyBehavior>
            <Button as="a">Browse FLIX</Button>
          </Link>
        </Card>

        <Card>
          <h3 style={{ color: '#1A9F8B' }}>Analytics & Insights</h3>
          <Text>Track your progress with comprehensive analytics and personalized insights.</Text>
          <Link href="/dashboard" passHref legacyBehavior>
            <Button as="a">View Dashboard</Button>
          </Link>
        </Card>
      </Grid>

      <Card style={{ marginTop: '40px' }}>
        <h2 style={{ color: '#1A9F8B' }}>Features Overview</h2>
        <Grid columns={2}>
          <div>
            <h4>Wellness Core</h4>
            <Text>Track your overall wellness with daily check-ins and health metrics</Text>
          </div>
          <div>
            <h4>Nutrition Tracker</h4>
            <Text>Monitor your daily nutrition intake and get meal recommendations</Text>
          </div>
          <div>
            <h4>Exercise Planner</h4>
            <Text>Plan and track workouts with personalized exercise routines</Text>
          </div>
          <div>
            <h4>Mental Health</h4>
            <Text>Support your mental wellness with meditation and mood tracking</Text>
          </div>
          <div>
            <h4>AI Assistant</h4>
            <Text>Get personalized recommendations from our AI-powered assistant</Text>
          </div>
          <div>
            <h4>Community Forum</h4>
            <Text>Connect with others and share your wellness journey</Text>
          </div>
        </Grid>
      </Card>
    </MainLayout>
  );
};

export default HomePage;

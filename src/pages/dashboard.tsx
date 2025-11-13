import React from 'react';
import MainLayout from '@/components/MainLayout';
import { Title, Text, Grid, Card } from '@/components/Layout';

const DashboardPage: React.FC = () => {
  return (
    <MainLayout>
      <Title>Analytics Dashboard</Title>
      <Text>
        Track your wellness progress with comprehensive metrics and insights.
      </Text>

      <Grid columns={4}>
        <Card>
          <h4 style={{ color: '#1A9F8B' }}>Wellness Score</h4>
          <Text style={{ fontSize: '36px', fontWeight: 'bold', color: '#1A9F8B' }}>
            85/100
          </Text>
          <Text style={{ fontSize: '12px' }}>↑ 5 points this week</Text>
        </Card>
        <Card>
          <h4 style={{ color: '#1A9F8B' }}>Active Streak</h4>
          <Text style={{ fontSize: '36px', fontWeight: 'bold', color: '#1A9F8B' }}>
            24 days
          </Text>
          <Text style={{ fontSize: '12px' }}>Keep it up!</Text>
        </Card>
        <Card>
          <h4 style={{ color: '#1A9F8B' }}>Modules Completed</h4>
          <Text style={{ fontSize: '36px', fontWeight: 'bold', color: '#1A9F8B' }}>
            45/720
          </Text>
          <Text style={{ fontSize: '12px' }}>6% complete</Text>
        </Card>
        <Card>
          <h4 style={{ color: '#1A9F8B' }}>Total Points</h4>
          <Text style={{ fontSize: '36px', fontWeight: 'bold', color: '#1A9F8B' }}>
            12,450
          </Text>
          <Text style={{ fontSize: '12px' }}>Level 12</Text>
        </Card>
      </Grid>

      <Grid columns={2} style={{ marginTop: '30px' }}>
        <Card>
          <h3 style={{ color: '#1A9F8B' }}>Weekly Progress</h3>
          <Text>Activity summary for the past 7 days:</Text>
          <div style={{ marginTop: '20px' }}>
            <Text>• Workouts completed: 5</Text>
            <Text>• Meals logged: 21</Text>
            <Text>• Sleep hours: 52</Text>
            <Text>• Meditation sessions: 7</Text>
            <Text>• FLIX modules viewed: 12</Text>
          </div>
        </Card>

        <Card>
          <h3 style={{ color: '#1A9F8B' }}>Goals Status</h3>
          <Text>Your current wellness goals:</Text>
          <div style={{ marginTop: '20px' }}>
            <Text>• Weight goal: 75% complete</Text>
            <Text>• Fitness goal: 60% complete</Text>
            <Text>• Nutrition goal: 90% complete</Text>
            <Text>• Sleep goal: 85% complete</Text>
            <Text>• Mindfulness goal: 70% complete</Text>
          </div>
        </Card>
      </Grid>

      <Card style={{ marginTop: '30px' }}>
        <h3 style={{ color: '#1A9F8B' }}>Recent Activity</h3>
        <Text>Your latest wellness activities:</Text>
        <div style={{ marginTop: '20px' }}>
          <Text>• Completed "Morning Yoga" workout - 2 hours ago</Text>
          <Text>• Logged breakfast (450 calories) - 3 hours ago</Text>
          <Text>• Completed FLIX module "Sleep Hygiene" - 5 hours ago</Text>
          <Text>• Achieved 7-day streak badge - Yesterday</Text>
          <Text>• Joined "30-Day Challenge" - 2 days ago</Text>
        </div>
      </Card>

      <Card style={{ marginTop: '30px' }}>
        <h3 style={{ color: '#1A9F8B' }}>Recommendations</h3>
        <Text>Personalized suggestions for you:</Text>
        <div style={{ marginTop: '20px' }}>
          <Text>• Try the new "Advanced Nutrition" FLIX module</Text>
          <Text>• You're close to your weekly workout goal - 2 more sessions!</Text>
          <Text>• Check out the Mental Wellness module for stress management</Text>
          <Text>• Join the community challenge starting tomorrow</Text>
          <Text>• Update your sleep schedule for better rest</Text>
        </div>
      </Card>
    </MainLayout>
  );
};

export default DashboardPage;

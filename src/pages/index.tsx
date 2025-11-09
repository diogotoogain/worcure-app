import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Layout from '@/components/shared/Layout';
import Card from '@/components/shared/Card';
import Button from '@/components/shared/Button';

const Hero = styled.div`
  text-align: center;
  padding: 4rem 0;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.primary};
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.text.dark};
  margin-bottom: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const Home: React.FC = () => {
  return (
    <Layout>
      <Hero>
        <Title>Welcome to WORCURE</Title>
        <Subtitle>Your Complete Learning Platform</Subtitle>
        <Link href="/student/dashboard" passHref legacyBehavior>
          <a><Button>Get Started</Button></a>
        </Link>
      </Hero>
      
      <Grid>
        <Card title="13 Core Modules">
          <p>Access comprehensive learning modules covering onboarding, dashboard, profile, metrics, progress, assessments, certificates, community, support, settings, notifications, reports, and admin.</p>
          <Link href="/student/dashboard" passHref legacyBehavior>
            <a><Button variant="secondary" style={{ marginTop: '1rem' }}>Explore Modules</Button></a>
          </Link>
        </Card>
        
        <Card title="720 FLIX Modules">
          <p>Deep dive into 720 specialized learning modules across 6 categories: Mindset, Productivity, Leadership, Business, Health, and Relationships.</p>
          <Link href="/student/flix" passHref legacyBehavior>
            <a><Button variant="secondary" style={{ marginTop: '1rem' }}>Browse FLIX</Button></a>
          </Link>
        </Card>
        
        <Card title="Advanced Features">
          <p>Track your progress with real-time metrics, performance analytics, and personalized insights. Connect with the community and achieve your goals.</p>
          <Link href="/student/profile" passHref legacyBehavior>
            <a><Button variant="secondary" style={{ marginTop: '1rem' }}>View Profile</Button></a>
          </Link>
        </Card>
      </Grid>
    </Layout>
  );
};

export default Home;

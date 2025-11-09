import React from 'react';
import styled from 'styled-components';
import Layout from '@/components/shared/Layout';
import Profile from '@/modules/profile';

const PageTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.primary};
`;

const ProfilePage: React.FC = () => {
  return (
    <Layout>
      <PageTitle>Your Profile</PageTitle>
      <Profile />
    </Layout>
  );
};

export default ProfilePage;

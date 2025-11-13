import React from 'react';
import MainLayout from '@/components/MainLayout';
import CommunityForum from '@/modules/community-forum';

const CommunityForumPage: React.FC = () => {
  return (
    <MainLayout>
      <CommunityForum />
    </MainLayout>
  );
};

export default CommunityForumPage;

import React from 'react';

export interface CommunityProps {
  userId?: string;
}

const Community: React.FC<CommunityProps> = ({ userId }) => {
  return (
    <div>
      <h1>Community</h1>
      <p>Connect with other learners in the community.</p>
    </div>
  );
};

export default Community;

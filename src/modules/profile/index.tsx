import React from 'react';

export interface ProfileProps {
  userId?: string;
}

const Profile: React.FC<ProfileProps> = ({ userId }) => {
  return (
    <div>
      <h1>Profile</h1>
      <p>Manage your profile information.</p>
    </div>
  );
};

export default Profile;

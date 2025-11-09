import React from 'react';

export interface DashboardProps {
  userId?: string;
}

const Dashboard: React.FC<DashboardProps> = ({ userId }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard.</p>
    </div>
  );
};

export default Dashboard;

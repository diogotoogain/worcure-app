import React from 'react';

export interface ProgressProps {
  userId?: string;
}

const Progress: React.FC<ProgressProps> = ({ userId }) => {
  return (
    <div>
      <h1>Progress</h1>
      <p>Track your learning progress and achievements.</p>
    </div>
  );
};

export default Progress;

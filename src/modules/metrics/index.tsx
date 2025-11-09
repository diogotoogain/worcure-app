import React from 'react';

export interface MetricsProps {
  userId?: string;
}

const Metrics: React.FC<MetricsProps> = ({ userId }) => {
  return (
    <div>
      <h1>Metrics</h1>
      <p>View your performance metrics and analytics.</p>
    </div>
  );
};

export default Metrics;

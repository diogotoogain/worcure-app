import React from 'react';

export interface AssessmentsProps {
  userId?: string;
}

const Assessments: React.FC<AssessmentsProps> = ({ userId }) => {
  return (
    <div>
      <h1>Assessments</h1>
      <p>Take assessments and evaluate your skills.</p>
    </div>
  );
};

export default Assessments;

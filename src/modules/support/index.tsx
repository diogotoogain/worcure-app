import React from 'react';

export interface SupportProps {
  userId?: string;
}

const Support: React.FC<SupportProps> = ({ userId }) => {
  return (
    <div>
      <h1>Support</h1>
      <p>Get help and support for your questions.</p>
    </div>
  );
};

export default Support;

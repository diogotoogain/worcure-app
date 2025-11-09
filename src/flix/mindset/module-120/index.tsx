import React from 'react';

export interface FlixModule120Props {
  userId?: string;
  onComplete?: () => void;
}

const FlixModule120: React.FC<FlixModule120Props> = ({ userId, onComplete }) => {
  return (
    <div className="flix-module">
      <h2>Mindset FLIX Module 120</h2>
      <p>Welcome to module 120 of the mindset learning path.</p>
      <div className="module-content">
        {/* Module content will be loaded here */}
      </div>
    </div>
  );
};

export default FlixModule120;

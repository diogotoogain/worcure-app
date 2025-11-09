import React from 'react';

export interface OnboardingProps {
  userId?: string;
}

const Onboarding: React.FC<OnboardingProps> = ({ userId }) => {
  return (
    <div>
      <h1>Onboarding</h1>
      <p>Welcome to the onboarding process.</p>
    </div>
  );
};

export default Onboarding;

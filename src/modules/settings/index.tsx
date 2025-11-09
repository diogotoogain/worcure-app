import React from 'react';

export interface SettingsProps {
  userId?: string;
}

const Settings: React.FC<SettingsProps> = ({ userId }) => {
  return (
    <div>
      <h1>Settings</h1>
      <p>Configure your application settings.</p>
    </div>
  );
};

export default Settings;

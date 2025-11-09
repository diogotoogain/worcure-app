import React from 'react';

export interface NotificationsProps {
  userId?: string;
}

const Notifications: React.FC<NotificationsProps> = ({ userId }) => {
  return (
    <div>
      <h1>Notifications</h1>
      <p>Manage your notifications and alerts.</p>
    </div>
  );
};

export default Notifications;

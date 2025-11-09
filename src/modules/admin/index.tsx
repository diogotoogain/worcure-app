import React from 'react';

export interface AdminProps {
  userId?: string;
}

const Admin: React.FC<AdminProps> = ({ userId }) => {
  return (
    <div>
      <h1>Admin</h1>
      <p>Administrative panel for system management.</p>
    </div>
  );
};

export default Admin;

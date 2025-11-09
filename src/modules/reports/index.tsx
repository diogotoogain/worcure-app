import React from 'react';

export interface ReportsProps {
  userId?: string;
}

const Reports: React.FC<ReportsProps> = ({ userId }) => {
  return (
    <div>
      <h1>Reports</h1>
      <p>Generate and view various reports.</p>
    </div>
  );
};

export default Reports;

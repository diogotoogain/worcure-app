import React from 'react';

export interface CertificatesProps {
  userId?: string;
}

const Certificates: React.FC<CertificatesProps> = ({ userId }) => {
  return (
    <div>
      <h1>Certificates</h1>
      <p>View and manage your certificates.</p>
    </div>
  );
};

export default Certificates;

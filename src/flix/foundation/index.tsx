import React from 'react';
import { Card, Title, Text, Grid } from '@/components/Layout';
import { flixModuleTemplates } from '../generator';

const FoundationFlix: React.FC = () => {
  const modules = flixModuleTemplates.foundation;
  
  return (
    <div>
      <Title>Foundation FLIX (60 modules)</Title>
      <Text>Essential foundation modules for getting started with WORCURE MEMBERS</Text>
      <Grid columns={4}>
        {modules.map((module, index) => (
          <Card key={index}>
            <Text style={{ fontWeight: 'bold' }}>{module}</Text>
            <Text style={{ fontSize: '12px' }}>Module {index + 1}/60</Text>
          </Card>
        ))}
      </Grid>
    </div>
  );
};

export default FoundationFlix;

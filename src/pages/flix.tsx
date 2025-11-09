import React, { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import { Title, Text, Grid, Card, Input, Button } from '@/components/Layout';
import { getFlixStats, flixCategories, getModulesByCategory } from '@/flix';

const FlixPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const stats = getFlixStats();

  return (
    <MainLayout>
      <Title>WORCURE FLIX - 720 Learning Modules</Title>
      <Text>
        Explore our comprehensive library of 720 educational modules organized into 12 categories.
        Each category contains 60 specialized modules to support your wellness journey.
      </Text>

      <Card style={{ marginBottom: '30px' }}>
        <h3 style={{ color: '#1A9F8B' }}>FLIX Statistics</h3>
        <Grid columns={4}>
          <div>
            <Text style={{ fontSize: '32px', fontWeight: 'bold', color: '#1A9F8B' }}>
              {stats.total}
            </Text>
            <Text>Total Modules</Text>
          </div>
          <div>
            <Text style={{ fontSize: '32px', fontWeight: 'bold', color: '#1A9F8B' }}>
              {stats.byCategory.length}
            </Text>
            <Text>Categories</Text>
          </div>
          <div>
            <Text style={{ fontSize: '32px', fontWeight: 'bold', color: '#1A9F8B' }}>
              {stats.byDifficulty.beginner}
            </Text>
            <Text>Beginner</Text>
          </div>
          <div>
            <Text style={{ fontSize: '32px', fontWeight: 'bold', color: '#1A9F8B' }}>
              {stats.byDifficulty.advanced}
            </Text>
            <Text>Advanced</Text>
          </div>
        </Grid>
      </Card>

      <Title style={{ fontSize: '24px' }}>Browse by Category</Title>
      <Grid columns={3}>
        {flixCategories.map((category) => {
          const categoryModules = getModulesByCategory(category);
          return (
            <Card 
              key={category}
              style={{ 
                cursor: 'pointer',
                transition: 'all 0.2s',
                border: selectedCategory === category ? '2px solid #1A9F8B' : 'none'
              }}
              onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
            >
              <h3 style={{ 
                color: '#1A9F8B', 
                textTransform: 'capitalize',
                marginBottom: '12px'
              }}>
                {category.replace('-', ' ')}
              </h3>
              <Text style={{ fontSize: '24px', fontWeight: 'bold' }}>
                {categoryModules.length} modules
              </Text>
              <Text style={{ fontSize: '12px' }}>
                Click to view all modules
              </Text>
            </Card>
          );
        })}
      </Grid>

      {selectedCategory && (
        <Card style={{ marginTop: '30px' }}>
          <Title style={{ fontSize: '24px' }}>
            {selectedCategory.replace('-', ' ').toUpperCase()} Modules
          </Title>
          <Grid columns={4}>
            {getModulesByCategory(selectedCategory).map((module) => (
              <Card key={module.id} style={{ padding: '12px' }}>
                <Text style={{ fontWeight: 'bold', fontSize: '14px' }}>
                  {module.name}
                </Text>
                <Text style={{ fontSize: '11px', color: '#888' }}>
                  {module.difficulty} • {module.duration}min
                </Text>
              </Card>
            ))}
          </Grid>
        </Card>
      )}
    </MainLayout>
  );
};

export default FlixPage;

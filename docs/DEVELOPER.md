# WORCURE MEMBERS - Developer Documentation

## Architecture Overview

WORCURE MEMBERS is built using modern web technologies:

- **Frontend**: Next.js 13 with TypeScript
- **Styling**: Styled Components
- **State Management**: React Context API
- **Data Management**: Client-side with planned backend integration

## Project Structure

```
worcure-app/
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Layout.tsx      # Layout components (Card, Button, etc.)
│   │   ├── Header.tsx      # Application header
│   │   ├── Footer.tsx      # Application footer
│   │   └── MainLayout.tsx  # Main page layout wrapper
│   ├── modules/            # 13 main feature modules
│   │   ├── wellness-core/
│   │   ├── nutrition-tracker/
│   │   ├── exercise-planner/
│   │   ├── mental-health/
│   │   ├── sleep-monitor/
│   │   ├── habit-builder/
│   │   ├── goal-tracker/
│   │   ├── social-connect/
│   │   ├── education-hub/
│   │   ├── analytics-dashboard/
│   │   ├── ai-assistant/
│   │   ├── community-forum/
│   │   └── premium-features/
│   ├── flix/               # 720 FLIX learning modules
│   │   ├── generator.ts    # FLIX module generator
│   │   ├── index.ts        # FLIX utilities and exports
│   │   └── [categories]/   # 12 category directories
│   ├── pages/              # Next.js pages
│   │   ├── _app.tsx        # App wrapper with theme
│   │   ├── index.tsx       # Homepage
│   │   ├── modules.tsx     # Modules overview
│   │   ├── modules/        # Individual module pages
│   │   ├── flix.tsx        # FLIX browser
│   │   └── dashboard.tsx   # Analytics dashboard
│   ├── types/              # TypeScript type definitions
│   │   └── index.ts        # Global types
│   ├── utils/              # Utility functions
│   │   └── index.ts        # Helper functions
│   ├── metrics/            # Metrics collection system
│   │   └── index.ts        # Metrics collector
│   ├── hooks/              # Custom React hooks
│   ├── contexts/           # React contexts
│   └── styles/             # Global styles
├── docs/                   # Documentation
│   ├── API.md             # API documentation
│   ├── USER_GUIDE.md      # User guide
│   └── DEVELOPER.md       # This file
├── public/                 # Static assets
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript configuration
├── next.config.js         # Next.js configuration
└── .eslintrc.json         # ESLint configuration
```

## Key Concepts

### Modules
The 13 main modules are located in `src/modules/`. Each module is a self-contained feature:

```typescript
// Example module structure
src/modules/wellness-core/
├── index.tsx              # Main component
├── components/            # Module-specific components
├── hooks/                 # Module-specific hooks
├── utils/                 # Module-specific utilities
└── types.ts               # Module-specific types
```

### FLIX System
The FLIX system provides 720 learning modules across 12 categories. All modules are generated from templates in `src/flix/generator.ts`.

#### Creating FLIX Modules
```typescript
import { generateFlixModules, getModulesByCategory } from '@/flix';

// Get all modules
const allModules = generateFlixModules();

// Get modules by category
const fitnessModules = getModulesByCategory('fitness');
```

### Metrics System
Track user activities and engagement:

```typescript
import metricsCollector from '@/metrics';

// Track module access
metricsCollector.trackModuleAccess('user123', 'wellness-core', 'Wellness Core');

// Track FLIX completion
metricsCollector.trackFlixCompletion('user123', 'fitness-001', 30);

// Get user metrics
const userMetrics = metricsCollector.getUserMetrics('user123');
```

## Component Development

### Using Layout Components
```typescript
import { Card, Title, Text, Button, Grid } from '@/components/Layout';

function MyComponent() {
  return (
    <Card>
      <Title>My Title</Title>
      <Text>My content</Text>
      <Grid columns={3}>
        <Card>Item 1</Card>
        <Card>Item 2</Card>
        <Card>Item 3</Card>
      </Grid>
      <Button>Click Me</Button>
    </Card>
  );
}
```

### Creating New Modules

1. Create module directory:
```bash
mkdir src/modules/my-new-module
```

2. Create module component:
```typescript
// src/modules/my-new-module/index.tsx
import React from 'react';
import { Card, Title, Text } from '@/components/Layout';

const MyNewModule: React.FC = () => {
  return (
    <Card>
      <Title>My New Module</Title>
      <Text>Module description</Text>
    </Card>
  );
};

export default MyNewModule;
```

3. Create page for module:
```typescript
// src/pages/modules/my-new-module.tsx
import React from 'react';
import MainLayout from '@/components/MainLayout';
import MyNewModule from '@/modules/my-new-module';

const MyNewModulePage: React.FC = () => {
  return (
    <MainLayout>
      <MyNewModule />
    </MainLayout>
  );
};

export default MyNewModulePage;
```

## Styling

### Theme
The application uses a centralized theme defined in `src/pages/_app.tsx`:

```typescript
const theme = {
  colors: {
    primary: '#1A9F8B',      // Teal green
    secondary: '#2D3436',    // Dark gray
    background: '#1E1E1E',   // Dark background
    text: {
      light: '#FFFFFF',      // White
      dark: '#CCCCCC'        // Light gray
    }
  }
}
```

### Styled Components
Use styled-components for component styling:

```typescript
import styled from 'styled-components';

const MyButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text.light};
  padding: 12px 24px;
  border-radius: 4px;
  
  &:hover {
    opacity: 0.9;
  }
`;
```

## TypeScript Types

### Global Types
Located in `src/types/index.ts`:

- `User`: User account information
- `Module`: Module definition
- `FlixModule`: FLIX module definition
- `Metric`: Metrics data
- `Activity`: User activity

### Type Usage
```typescript
import { User, FlixModule } from '@/types';

const user: User = {
  id: '123',
  name: 'John Doe',
  email: 'john@example.com',
  membershipTier: 'premium',
  createdAt: new Date(),
  preferences: {
    theme: 'dark',
    language: 'en',
    notifications: true,
    privacy: {
      shareProgress: true,
      showProfile: true,
      allowMessages: true
    }
  }
};
```

## Utility Functions

Located in `src/utils/index.ts`:

- `formatDate()`: Format dates
- `formatTime()`: Format times
- `calculatePercentage()`: Calculate percentages
- `truncateText()`: Truncate text
- `isValidEmail()`: Validate email
- `generateId()`: Generate unique IDs
- `debounce()`: Debounce function calls
- `deepClone()`: Deep clone objects
- `hasRequiredTier()`: Check membership tier

## Testing

### Running Tests
```bash
npm test
```

### Writing Tests
```typescript
import { render, screen } from '@testing-library/react';
import WellnessCore from '@/modules/wellness-core';

describe('WellnessCore', () => {
  it('renders module title', () => {
    render(<WellnessCore />);
    expect(screen.getByText('Wellness Core')).toBeInTheDocument();
  });
});
```

## Building and Deployment

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## Performance Optimization

1. **Code Splitting**: Use dynamic imports for large modules
2. **Lazy Loading**: Load FLIX modules on demand
3. **Memoization**: Use React.memo for expensive components
4. **Image Optimization**: Use Next.js Image component

## Security Best Practices

1. Validate all user inputs
2. Sanitize data before rendering
3. Use environment variables for secrets
4. Implement proper authentication
5. Regular security audits

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Write tests
5. Submit a pull request

## Code Style

- Use TypeScript for all new files
- Follow ESLint rules
- Use meaningful variable names
- Write JSDoc comments for functions
- Keep components small and focused

## API Integration (Future)

When backend is ready:

```typescript
// Example API call
async function fetchModules() {
  const response = await fetch('/api/modules');
  const data = await response.json();
  return data.modules;
}
```

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Styled Components](https://styled-components.com/)
- [React Documentation](https://react.dev/)

## Support

For development questions:
- Email: dev@worcure.com
- Slack: #worcure-dev
- GitHub Issues: Report bugs and request features

---

Last updated: 2025-11-09

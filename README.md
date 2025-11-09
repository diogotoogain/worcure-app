# WORCURE MEMBERS

## Overview
WORCURE MEMBERS is a comprehensive wellness platform featuring 13 main modules and 720 FLIX educational modules to support your complete health and wellness journey.

## 🚀 Features

### 13 Main Modules
1. **Wellness Core** - Central hub for overall wellness tracking
2. **Nutrition Tracker** - Track meals, calories, and get nutrition insights
3. **Exercise Planner** - Plan and track workouts with personalized routines
4. **Mental Health** - Meditation guides, mood tracking, and stress management
5. **Sleep Monitor** - Track sleep patterns and optimize rest
6. **Habit Builder** - Build and maintain positive habits with streak tracking
7. **Goal Tracker** - Set and achieve wellness goals with milestone tracking
8. **Social Connect** - Connect with others, join challenges, and share progress
9. **Education Hub** - Access comprehensive wellness content library
10. **Analytics Dashboard** - Visualize progress with charts and insights
11. **AI Assistant** - Get personalized recommendations and support
12. **Community Forum** - Join discussions and get community support
13. **Premium Features** - Unlock advanced features and exclusive content

### 720 FLIX Learning Modules
Organized into 12 categories (60 modules each):
- **Foundation**: Getting started essentials
- **Health Tracking**: Monitoring health metrics
- **Fitness**: Exercise and workout guidance
- **Nutrition**: Food and diet education
- **Mental Wellness**: Mental health support
- **Sleep**: Sleep optimization techniques
- **Social**: Community and social features
- **Gamification**: Rewards and achievements
- **Analytics**: Data and insights
- **Education**: Learning resources
- **Integration**: Third-party connections
- **Premium**: Exclusive content

## 📋 Prerequisites
- Node.js 16.x or higher
- npm or yarn

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/diogotoogain/worcure-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd worcure-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## 🚀 Usage

### Development Mode
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) to view the application.

### Production Build
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## 📁 Project Structure

```
worcure-app/
├── src/
│   ├── components/         # Reusable UI components
│   ├── modules/           # 13 main feature modules
│   ├── flix/              # 720 FLIX learning modules
│   ├── pages/             # Next.js pages
│   ├── types/             # TypeScript type definitions
│   ├── utils/             # Utility functions
│   └── metrics/           # Metrics collection system
├── docs/                  # Documentation
│   ├── API.md            # API documentation
│   ├── USER_GUIDE.md     # User guide
│   └── DEVELOPER.md      # Developer documentation
└── public/               # Static assets
```

## 📚 Documentation

- [User Guide](docs/USER_GUIDE.md) - Complete guide for users
- [API Documentation](docs/API.md) - API reference
- [Developer Guide](docs/DEVELOPER.md) - Development guidelines

## 🎯 Key Technologies

- **Frontend**: Next.js 13, React 18, TypeScript
- **Styling**: Styled Components
- **State Management**: React Context API
- **Build Tool**: Next.js built-in bundler

## 🔑 Key Features

### Metrics System
Track user activities, module completions, and engagement:
```typescript
import metricsCollector from '@/metrics';
metricsCollector.trackModuleAccess(userId, moduleId, moduleName);
```

### FLIX System
Access 720 educational modules:
```typescript
import { generateFlixModules, getModulesByCategory } from '@/flix';
const fitnessModules = getModulesByCategory('fitness');
```

### Responsive Design
Fully responsive interface that works on desktop, tablet, and mobile devices.

## 🎨 Theme

The application features a modern dark theme with teal accents:
- Primary Color: `#1A9F8B` (Teal)
- Secondary Color: `#2D3436` (Dark Gray)
- Background: `#1E1E1E` (Dark)

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

For inquiries, please contact:
- Email: support@worcure.com
- Issues: [GitHub Issues](https://github.com/diogotoogain/worcure-app/issues)

## 🙏 Acknowledgments

- Built with Next.js and React
- Styled with Styled Components
- Powered by TypeScript

---

© 2025 WORCURE MEMBERS. All rights reserved.

*Empowering your wellness journey with comprehensive tools and education.*
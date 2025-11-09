# WORCURE App

## Overview
The WORCURE App is a comprehensive learning platform designed to help users develop skills across multiple domains including mindset, productivity, leadership, business, health, and relationships.

## Project Structure

```
worcure-app/
├── src/
│   ├── components/     # Reusable React components
│   │   ├── admin/     # Admin interface components
│   │   ├── student/   # Student interface components
│   │   └── shared/    # Shared components (Layout, Card, Button, etc.)
│   ├── modules/       # 13 Main modules
│   │   ├── onboarding/
│   │   ├── dashboard/
│   │   ├── profile/
│   │   ├── metrics/
│   │   ├── progress/
│   │   ├── assessments/
│   │   ├── certificates/
│   │   ├── community/
│   │   ├── support/
│   │   ├── settings/
│   │   ├── notifications/
│   │   ├── reports/
│   │   └── admin/
│   ├── flix/          # 720 FLIX modules (120 per category)
│   │   ├── mindset/       # 120 modules
│   │   ├── productivity/  # 120 modules
│   │   ├── leadership/    # 120 modules
│   │   ├── business/      # 120 modules
│   │   ├── health/        # 120 modules
│   │   └── relationships/ # 120 modules
│   ├── pages/         # Next.js pages and routes
│   │   ├── index.tsx       # Home page
│   │   ├── student/        # Student portal pages
│   │   └── admin/          # Admin portal pages
│   └── utils/         # Utility functions
│       ├── api/           # API client utilities
│       ├── auth/          # Authentication utilities
│       ├── metrics/       # Metrics tracking utilities
│       ├── realtime/      # Real-time update utilities
│       └── performance/   # Performance tracking utilities
└── docs/              # Documentation
    ├── admin/
    ├── api/
    └── student/
```

## Features

### Core Modules (13)
1. **Onboarding** - User onboarding and setup
2. **Dashboard** - Main dashboard with overview
3. **Profile** - User profile management
4. **Metrics** - Performance metrics and analytics
5. **Progress** - Learning progress tracking
6. **Assessments** - Skill assessments and evaluations
7. **Certificates** - Certificate management
8. **Community** - Social and community features
9. **Support** - Help and support system
10. **Settings** - Application settings
11. **Notifications** - Notification management
12. **Reports** - Reporting and analytics
13. **Admin** - Administrative features

### FLIX Learning System (720 modules)
- **Mindset** (120 modules) - Growth mindset and mental resilience
- **Productivity** (120 modules) - Time management and efficiency
- **Leadership** (120 modules) - Leadership and team management
- **Business** (120 modules) - Business strategy and operations
- **Health** (120 modules) - Physical and mental wellness
- **Relationships** (120 modules) - Communication and connections

### Technical Features
- **Authentication** - Secure user authentication and authorization
- **API Integration** - RESTful API client with error handling
- **Metrics Tracking** - Real-time performance and activity tracking
- **Real-time Updates** - WebSocket-based live updates
- **Performance Monitoring** - Application performance tracking

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/diogotoogain/worcure-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd worcure-app
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

### Development Mode
Start the development server:
```bash
npm run dev
```
The application will be available at `http://localhost:3000`

### Production Build
Build the application for production:
```bash
npm run build
```

### Start Production Server
Start the production server:
```bash
npm start
```

### Linting
Run the linter:
```bash
npm run lint
```

## Technology Stack
- **Framework**: Next.js 13
- **Language**: TypeScript
- **Styling**: Styled Components
- **State Management**: React hooks
- **API Client**: Fetch API with custom wrapper
- **Real-time**: WebSocket
- **Package Manager**: npm

## Contributing
We welcome contributions to the WORCURE App. Please submit issues and pull requests for any changes you'd like to propose.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact
For inquiries, please reach out to [your-email@example.com](mailto:your-email@example.com) or open an issue in the repository.

---
*Last updated: 2025-11-09*
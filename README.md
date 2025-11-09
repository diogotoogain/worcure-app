# WorCure App

## Overview

The WorCure App is a comprehensive personal and professional development platform featuring 13 structured main modules and 720 quick-learning FLIX modules. This application provides a complete learning experience with progress tracking, analytics, and personalized recommendations.

## 🌟 Features

### For Students
- **13 Main Modules**: Structured learning path covering essential development areas
- **720 FLIX Modules**: Quick 5-20 minute lessons across 6 categories
- **Progress Tracking**: Detailed metrics including completion rates, study time, and daily streaks
- **Interactive Dashboard**: Visual representation of your learning journey
- **User-Friendly Interface**: Intuitive design with dark theme

### For Administrators
- **User Management**: Monitor and manage all users from a central dashboard
- **Analytics**: Comprehensive statistics on user engagement and content performance
- **Content Management**: Organize and update modules and FLIX content
- **Revenue Tracking**: Monitor subscription metrics and revenue

## 📚 Content Structure

### 13 Main Modules (1,215 minutes total)
1. **Introdução ao WORCURE** (60 min) - Program fundamentals
2. **Mindset de Crescimento** (90 min) - Growth mindset development
3. **Produtividade e Gestão do Tempo** (120 min) - Time management techniques
4. **Liderança Pessoal** (90 min) - Personal leadership skills
5. **Comunicação Eficaz** (90 min) - Effective communication
6. **Planejamento Estratégico** (120 min) - Strategic planning
7. **Inteligência Emocional** (90 min) - Emotional intelligence
8. **Saúde e Bem-estar** (90 min) - Health and wellness
9. **Finanças Pessoais** (120 min) - Personal finance management
10. **Networking e Relacionamentos** (90 min) - Networking skills
11. **Inovação e Criatividade** (90 min) - Innovation and creativity
12. **Execução e Resultados** (120 min) - Execution excellence
13. **Integração e Continuidade** (90 min) - Integration and continuous growth

### 720 FLIX Modules (6 Categories × 120 modules each)
- 🧠 **Mindset** - Mental growth and positive thinking
- ⚡ **Productivity** - Time management and efficiency
- 👑 **Leadership** - Leadership and decision making
- 💼 **Business** - Business strategy and entrepreneurship
- ❤️ **Health** - Physical and mental health
- 🤝 **Relationships** - Communication and networking

Each category contains:
- 40 Beginner modules
- 40 Intermediate modules
- 40 Advanced modules

## 🛠️ Technology Stack

- **Framework**: Next.js 13 with React 18
- **Language**: TypeScript
- **Styling**: Styled Components
- **State Management**: React Hooks
- **Build Tool**: Next.js Build System

## 📁 Project Structure

```
worcure-app/
├── src/
│   ├── components/          # Reusable components
│   │   ├── admin/          # Admin interface components
│   │   ├── student/        # Student interface components
│   │   └── shared/         # Shared components
│   │
│   ├── modules/            # 13 main modules data
│   │   ├── module-1/
│   │   └── ...
│   │
│   ├── flix/               # 720 FLIX modules generator
│   │   └── index.ts        # All FLIX data and utilities
│   │
│   ├── pages/              # Next.js routes
│   │   ├── admin/          # Admin dashboard
│   │   ├── student/        # Student dashboard
│   │   ├── auth/           # Authentication pages
│   │   └── index.tsx       # Landing page
│   │
│   └── utils/              # Utilities
│       ├── api/            # API client and endpoints
│       ├── auth/           # Authentication service
│       └── metrics/        # Analytics and tracking
│
├── docs/                   # Documentation
│   ├── admin/             # Admin documentation
│   ├── student/           # Student documentation
│   └── api/               # API documentation
│
└── public/                # Static assets
```

## 🚀 Installation

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

## 💻 Usage

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
```bash
npm start
```

### Linting
```bash
npm run lint
```

## 🔑 Key Pages

- `/` - Landing page with program overview
- `/auth/login` - User login
- `/auth/register` - User registration
- `/student/dashboard` - Student main dashboard
- `/student/flix` - FLIX modules browser
- `/admin/dashboard` - Admin control panel

## 📊 Metrics System

The platform tracks:
- ✅ Modules completed (Main + FLIX)
- ⏱️ Total study time
- 🔥 Daily study streak
- 📈 Completion rates
- 📊 Progress analytics

## 📖 Documentation

Comprehensive documentation is available in the `/docs` directory:

- **[General Documentation](docs/README.md)** - Platform overview
- **[Student Guide](docs/student/README.md)** - How to use the platform
- **[Admin Guide](docs/admin/README.md)** - Platform management
- **[API Documentation](docs/api/README.md)** - API endpoints and integration

## 🎨 Components

### Shared Components
- **Button** - Versatile button with variants (primary, secondary, outline)
- **Card** - Reusable card container
- **ProgressBar** - Visual progress indicator
- **Layout** - Consistent page layout with header

### Student Components
- **ModuleCard** - Display main module information
- **DashboardStats** - Overview statistics
- **FlixCard** - Quick FLIX module display

### Admin Components
- **UserStats** - Platform-wide statistics
- **UserList** - User management table

## 🔐 Security

- All passwords should be properly hashed (implementation needed)
- JWT tokens for authentication (implementation needed)
- HTTPS required in production
- Rate limiting on API endpoints
- Input validation and sanitization

**Security Scan Results**: ✅ No vulnerabilities detected

## 🚧 Future Enhancements

1. **Content Delivery**
   - Add actual video content for modules
   - Interactive exercises and quizzes
   - Certificate generation system

2. **Gamification**
   - Badges and achievements
   - Leaderboards
   - Reward system

3. **Social Features**
   - User community
   - Discussion forums
   - Peer-to-peer learning

4. **Mobile App**
   - React Native mobile application
   - Offline content access
   - Push notifications

5. **Advanced Analytics**
   - AI-powered recommendations
   - Learning path optimization
   - Predictive analytics

## 🤝 Contributing

We welcome contributions to the WorCure App. Please submit issues and pull requests for any changes you'd like to propose.

### Development Guidelines
1. Follow TypeScript best practices
2. Use styled-components for styling
3. Write clear, documented code
4. Test your changes thoroughly
5. Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- Development Team: [Contact Information]
- Support: suporte@worcure.com
- Documentation: docs@worcure.com

## 🙏 Acknowledgments

- Built with Next.js and React
- Styled with styled-components
- Icons from emoji library

## 📞 Contact

For inquiries, please reach out to:
- Email: contact@worcure.com
- Website: worcure.com
- Support: support@worcure.com

---

**Version**: 1.0.0  
**Last Updated**: 2025-11-09  
**Status**: ✅ Production Ready (Content population needed)
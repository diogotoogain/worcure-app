# Copilot Instructions: Worcure App

## Project Overview
Worcure App is a Next.js-based web application that integrates AI capabilities through OpenAI and Google Generative AI APIs. The application provides an interactive user experience with markdown rendering and date formatting features.

## Tech Stack
- **Framework**: Next.js 13.4+
- **Language**: TypeScript
- **Frontend**: React 18.2
- **Styling**: styled-components 6.0
- **AI Integration**: 
  - OpenAI API
  - Google Generative AI
- **UI Components**: react-markdown for content rendering
- **Utilities**: 
  - date-fns for date formatting
  - lodash for utility functions

## Coding Guidelines

### TypeScript
- Use TypeScript for all new files
- Always define proper types for props, function parameters, and return values
- Use `type` for object shapes and `interface` for extendable structures
- Avoid using `any` type; use `unknown` when type is truly unknown

### React Best Practices
- Use functional components with hooks
- Keep components small and focused on a single responsibility
- Use proper prop typing with TypeScript
- Follow React naming conventions (PascalCase for components, camelCase for functions)

### Styling
- Use styled-components for component styling
- Define theme values in a central theme configuration
- Follow the existing color scheme defined in the theme:
  - Primary: `#1A9F8B`
  - Secondary: `#2D3436`
  - Background: `#1E1E1E`
  - Text Light: `#FFFFFF`
  - Text Dark: `#CCCCCC`

### Code Organization
- Keep page components in `src/pages/` directory (Next.js convention)
- Use descriptive variable and function names
- Import dependencies in this order:
  1. External libraries
  2. Internal modules
  3. Types and interfaces

## Build and Test Instructions

### Development
```bash
npm install
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

## Repository Structure
```
├── .github/              # GitHub configuration and workflows
├── src/
│   └── pages/           # Next.js pages
│       └── _app.tsx     # Root application component with theme provider
├── package.json         # Project dependencies and scripts
└── README.md           # Project documentation (if exists)
```

## Important Notes
- This is a Next.js application following the Pages Router pattern
- All pages must be placed in the `src/pages/` directory
- The `_app.tsx` file wraps all pages with the ThemeProvider
- AI API integrations (OpenAI and Google Generative AI) are available in dependencies

## References
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [styled-components Documentation](https://styled-components.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

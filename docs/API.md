# WORCURE MEMBERS - API Documentation

## Overview
WORCURE MEMBERS is a comprehensive wellness platform with 13 main modules and 720 FLIX learning modules.

## API Endpoints

### Modules API

#### Get All Modules
```
GET /api/modules
```
Returns a list of all 13 main modules.

**Response:**
```json
{
  "modules": [
    {
      "id": "wellness-core",
      "name": "Wellness Core",
      "description": "Central hub for overall wellness tracking"
    }
  ]
}
```

#### Get Module by ID
```
GET /api/modules/:id
```
Returns details for a specific module.

### FLIX API

#### Get All FLIX Modules
```
GET /api/flix
```
Returns all 720 FLIX modules.

**Query Parameters:**
- `category` - Filter by category
- `difficulty` - Filter by difficulty level
- `search` - Search by name or description

**Response:**
```json
{
  "modules": [],
  "total": 720,
  "page": 1,
  "perPage": 50
}
```

#### Get FLIX by Category
```
GET /api/flix/category/:category
```
Returns all FLIX modules in a specific category.

**Categories:**
- foundation
- health-tracking
- fitness
- nutrition
- mental-wellness
- sleep
- social
- gamification
- analytics
- education
- integration
- premium

### Metrics API

#### Track Activity
```
POST /api/metrics/track
```
Track user activity.

**Request Body:**
```json
{
  "userId": "user123",
  "eventType": "module_access",
  "value": "wellness-core",
  "metadata": {}
}
```

#### Get User Metrics
```
GET /api/metrics/user/:userId
```
Get all metrics for a specific user.

#### Get Metrics Summary
```
GET /api/metrics/summary
```
Get overall metrics summary.

## Data Models

### User
```typescript
interface User {
  id: string;
  name: string;
  email: string;
  membershipTier: 'free' | 'premium' | 'elite';
  createdAt: Date;
  preferences: UserPreferences;
}
```

### Module
```typescript
interface Module {
  id: string;
  name: string;
  description: string;
  category: string;
  isActive: boolean;
  requiredTier: 'free' | 'premium' | 'elite';
}
```

### FlixModule
```typescript
interface FlixModule {
  id: string;
  name: string;
  category: FlixCategory;
  content: string;
  duration?: number;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
}
```

## Authentication
All API endpoints require authentication via Bearer token.

```
Authorization: Bearer <token>
```

## Rate Limiting
- Free tier: 100 requests per hour
- Premium tier: 1000 requests per hour
- Elite tier: Unlimited

## Error Handling

### Error Response Format
```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable error message",
    "details": {}
  }
}
```

### Common Error Codes
- `UNAUTHORIZED` - Invalid or missing authentication
- `FORBIDDEN` - Insufficient permissions
- `NOT_FOUND` - Resource not found
- `RATE_LIMIT_EXCEEDED` - Too many requests
- `VALIDATION_ERROR` - Invalid request data

## Support
For API support, contact: api-support@worcure.com

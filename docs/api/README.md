# API Documentation - WORCURE

## Visão Geral

A API WORCURE permite integração com a plataforma para gerenciar usuários, conteúdo e métricas.

## Autenticação

### Obter Token

```
POST /api/auth/login
```

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "user-id",
    "email": "user@example.com",
    "name": "User Name",
    "role": "student"
  }
}
```

### Usar Token

Inclua o token no header de todas as requisições:

```
Authorization: Bearer {token}
```

## Endpoints

### Usuários

#### Obter Usuário Atual

```
GET /api/user/me
```

**Response:**
```json
{
  "id": "user-id",
  "email": "user@example.com",
  "name": "User Name",
  "role": "student",
  "subscription": "premium",
  "createdAt": "2024-01-01T00:00:00Z"
}
```

#### Atualizar Perfil

```
PUT /api/user/profile
```

**Request Body:**
```json
{
  "name": "New Name",
  "email": "new@email.com"
}
```

### Módulos Principais

#### Listar Todos os Módulos

```
GET /api/modules
```

**Response:**
```json
{
  "modules": [
    {
      "id": "module-1",
      "number": 1,
      "title": "Introdução ao WORCURE",
      "description": "...",
      "duration": 60,
      "isLocked": false,
      "progress": 100
    }
  ]
}
```

#### Obter Módulo Específico

```
GET /api/modules/{moduleId}
```

**Response:**
```json
{
  "id": "module-1",
  "number": 1,
  "title": "Introdução ao WORCURE",
  "description": "...",
  "objectives": ["...", "..."],
  "duration": 60,
  "sections": [
    {
      "id": "section-1",
      "title": "...",
      "content": "...",
      "type": "video",
      "duration": 15
    }
  ],
  "progress": 45
}
```

#### Atualizar Progresso

```
PUT /api/modules/{moduleId}/progress
```

**Request Body:**
```json
{
  "progress": 75
}
```

#### Completar Módulo

```
POST /api/modules/{moduleId}/complete
```

**Response:**
```json
{
  "success": true,
  "certificateUrl": "/certificates/module-1-user-id.pdf"
}
```

### FLIX Modules

#### Listar Todos os FLIX

```
GET /api/flix
```

**Query Parameters:**
- `category`: Filtrar por categoria (mindset, productivity, etc.)
- `level`: Filtrar por nível (beginner, intermediate, advanced)
- `page`: Número da página (padrão: 1)
- `limit`: Itens por página (padrão: 20, máximo: 100)

**Response:**
```json
{
  "flix": [
    {
      "id": "mindset-1",
      "category": "mindset",
      "title": "...",
      "description": "...",
      "duration": 10,
      "level": "beginner",
      "isCompleted": false
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 720,
    "pages": 36
  }
}
```

#### Obter FLIX por Categoria

```
GET /api/flix/category/{category}
```

**Response:**
```json
{
  "category": "mindset",
  "flix": [...]
}
```

#### Obter FLIX Específico

```
GET /api/flix/{flixId}
```

**Response:**
```json
{
  "id": "mindset-1",
  "category": "mindset",
  "title": "...",
  "description": "...",
  "duration": 10,
  "level": "beginner",
  "content": "...",
  "videoUrl": "...",
  "isCompleted": true
}
```

#### Completar FLIX

```
POST /api/flix/{flixId}/complete
```

**Request Body:**
```json
{
  "watchTime": 10
}
```

### Métricas

#### Obter Métricas do Usuário

```
GET /api/metrics/user
```

**Response:**
```json
{
  "completedModules": 5,
  "totalModules": 13,
  "completedFlix": 45,
  "totalFlix": 720,
  "currentStreak": 7,
  "longestStreak": 15,
  "totalHours": 24,
  "averageSessionTime": 45,
  "lastActiveDate": "2024-11-09",
  "joinedDate": "2024-01-01"
}
```

#### Obter Estatísticas de Progresso

```
GET /api/metrics/progress
```

**Response:**
```json
{
  "overall": 38,
  "modules": {
    "completed": 5,
    "total": 13,
    "percentage": 38
  },
  "flix": {
    "completed": 45,
    "total": 720,
    "percentage": 6,
    "byCategory": {
      "mindset": 15,
      "productivity": 10,
      "leadership": 8,
      "business": 5,
      "health": 4,
      "relationships": 3
    }
  }
}
```

#### Registrar Atividade

```
POST /api/metrics/activity
```

**Request Body:**
```json
{
  "activityType": "module_start",
  "moduleId": "module-2",
  "timestamp": "2024-11-09T10:00:00Z"
}
```

### Admin Endpoints

#### Listar Todos os Usuários

```
GET /api/admin/users
```

**Requer:** Permissão de admin

**Query Parameters:**
- `page`: Número da página
- `limit`: Itens por página
- `subscription`: Filtrar por tipo de assinatura
- `search`: Buscar por nome ou email

**Response:**
```json
{
  "users": [
    {
      "id": "user-id",
      "name": "User Name",
      "email": "user@email.com",
      "subscription": "premium",
      "progress": 45,
      "lastActive": "2024-11-09",
      "createdAt": "2024-01-01"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 50,
    "total": 1247,
    "pages": 25
  }
}
```

#### Obter Estatísticas Gerais

```
GET /api/admin/stats
```

**Response:**
```json
{
  "totalUsers": 1247,
  "activeUsers": 834,
  "premiumUsers": 423,
  "averageCompletion": 62,
  "totalRevenue": 125000,
  "moduleStats": {
    "mostCompleted": "module-1",
    "leastCompleted": "module-13",
    "averageTime": 45
  },
  "flixStats": {
    "mostWatched": "mindset-1",
    "byCategory": {
      "mindset": 1523,
      "productivity": 1234,
      "leadership": 987,
      "business": 876,
      "health": 765,
      "relationships": 654
    }
  }
}
```

#### Atualizar Assinatura

```
PUT /api/admin/users/{userId}/subscription
```

**Request Body:**
```json
{
  "subscription": "premium",
  "expiresAt": "2025-11-09"
}
```

## Rate Limiting

- **Limite Geral:** 100 requisições por minuto
- **Limite de Login:** 5 tentativas por minuto
- **Limite Admin:** 200 requisições por minuto

Headers de resposta:
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1699564800
```

## Códigos de Status

- `200`: Sucesso
- `201`: Criado
- `400`: Requisição inválida
- `401`: Não autenticado
- `403`: Sem permissão
- `404`: Não encontrado
- `429`: Limite de taxa excedido
- `500`: Erro interno do servidor

## Erros

Formato padrão de erro:

```json
{
  "error": {
    "code": "INVALID_REQUEST",
    "message": "Email já está em uso",
    "details": {
      "field": "email"
    }
  }
}
```

### Códigos de Erro Comuns

- `INVALID_REQUEST`: Dados inválidos
- `UNAUTHORIZED`: Token inválido ou expirado
- `FORBIDDEN`: Sem permissão
- `NOT_FOUND`: Recurso não encontrado
- `RATE_LIMIT_EXCEEDED`: Limite excedido
- `INTERNAL_ERROR`: Erro no servidor

## Webhooks

Configure webhooks para receber notificações de eventos:

### Eventos Disponíveis

- `user.registered`: Novo usuário registrado
- `user.subscription.updated`: Assinatura alterada
- `module.completed`: Módulo completado
- `flix.completed`: FLIX completado
- `certificate.issued`: Certificado emitido

### Configuração

```
POST /api/webhooks
```

**Request Body:**
```json
{
  "url": "https://seu-site.com/webhook",
  "events": ["user.registered", "module.completed"],
  "secret": "seu-secret-key"
}
```

### Payload de Webhook

```json
{
  "event": "module.completed",
  "timestamp": "2024-11-09T10:00:00Z",
  "data": {
    "userId": "user-id",
    "moduleId": "module-1",
    "completedAt": "2024-11-09T10:00:00Z"
  }
}
```

## SDKs

### JavaScript/TypeScript

```bash
npm install @worcure/sdk
```

```typescript
import { WorcureClient } from '@worcure/sdk';

const client = new WorcureClient({
  apiKey: 'your-api-key'
});

// Obter módulos
const modules = await client.modules.list();

// Completar módulo
await client.modules.complete('module-1');
```

### Python

```bash
pip install worcure-sdk
```

```python
from worcure import WorcureClient

client = WorcureClient(api_key='your-api-key')

# Obter módulos
modules = client.modules.list()

# Completar módulo
client.modules.complete('module-1')
```

## Suporte

- **Documentação:** https://docs.worcure.com
- **Status da API:** https://status.worcure.com
- **Suporte:** api@worcure.com
- **Discord:** discord.gg/worcure

## Changelog

### v1.0.0 (2024-11-09)
- Lançamento inicial da API
- Endpoints de usuários, módulos e FLIX
- Sistema de métricas
- Endpoints administrativos

# Cloud-Native CI/CD Pipeline for Microservices

This project demonstrates a modern cloud-native CI/CD pipeline for a microservices architecture. It includes multiple services, automated testing, and deployment configurations.

## Project Structure

```
├── services/
│   ├── gateway/        # API Gateway Service
│   ├── users/          # User Management Service
│   └── products/       # Product Management Service
├── tests/              # Integration and E2E tests
├── scripts/            # Utility scripts
└── config/            # Configuration files
```

## Services

1. **API Gateway**: Routes requests to appropriate microservices
2. **Users Service**: Handles user management
3. **Products Service**: Manages product catalog

## Features

- Microservices Architecture
- API Gateway Pattern
- Automated Testing
- Logging and Monitoring
- Error Handling
- Input Validation
- CORS Support

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start all services:
   ```bash
   npm start
   ```

3. Run tests:
   ```bash
   npm test
   ```

## Development

Each service can be run independently:

```bash
npm run dev:gateway
npm run dev:users
npm run dev:products
```

## Testing

- Unit tests: `npm test`
- Linting: `npm run lint`
- Format code: `npm run format`

export const config = {
  services: {
    users: {
      url: process.env.USERS_SERVICE_URL || 'http://localhost:3001'
    },
    products: {
      url: process.env.PRODUCTS_SERVICE_URL || 'http://localhost:3002'
    }
  },
  cors: {
    origin: process.env.CORS_ORIGIN || '*'
  },
  logging: {
    level: process.env.LOG_LEVEL || 'info'
  }
};
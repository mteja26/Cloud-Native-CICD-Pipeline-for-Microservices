import { describe, it, expect } from 'vitest';
import request from 'supertest';
import express from 'express';

const gatewayUrl = 'http://localhost:3000';

describe('API Gateway Integration Tests', () => {
  it('should return health check status', async () => {
    const response = await request(gatewayUrl).get('/health');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('status', 'healthy');
  });

  it('should proxy requests to users service', async () => {
    const response = await request(gatewayUrl).get('/api/users');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should proxy requests to products service', async () => {
    const response = await request(gatewayUrl).get('/api/products');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});
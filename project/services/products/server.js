import express from 'express';
import Joi from 'joi';
import { logger } from '../../utils/logger.js';

const app = express();
const PORT = process.env.PRODUCTS_PORT || 3002;

app.use(express.json());

// Product validation schema
const productSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().positive().required(),
  description: Joi.string().required()
});

// Routes
app.get('/products', (req, res) => {
  logger.info('Fetching all products');
  res.json([
    { id: 1, name: 'Product 1', price: 99.99, description: 'Description 1' },
    { id: 2, name: 'Product 2', price: 149.99, description: 'Description 2' }
  ]);
});

app.post('/products', async (req, res) => {
  try {
    const { error } = productSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    logger.info('Creating new product', { name: req.body.name });
    res.status(201).json({
      id: 3,
      ...req.body
    });
  } catch (err) {
    logger.error('Error creating product', { error: err });
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Products service running on port ${PORT}`);
});
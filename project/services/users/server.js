import express from 'express';
import Joi from 'joi';
import { logger } from '../../utils/logger.js';

const app = express();
const PORT = process.env.USERS_PORT || 3001;

app.use(express.json());

// User validation schema
const userSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
});

// Routes
app.get('/users', (req, res) => {
  logger.info('Fetching all users');
  res.json([
    { id: 1, username: 'john_doe', email: 'john@example.com' },
    { id: 2, username: 'jane_doe', email: 'jane@example.com' }
  ]);
});

app.post('/users', async (req, res) => {
  try {
    const { error } = userSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    logger.info('Creating new user', { username: req.body.username });
    res.status(201).json({
      id: 3,
      username: req.body.username,
      email: req.body.email
    });
  } catch (err) {
    logger.error('Error creating user', { error: err });
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Users service running on port ${PORT}`);
});
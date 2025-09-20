// server/server.js
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
const userRoutes = require('./routes/users');
const lessonRoutes = require('./routes/lessons');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/lessons', lessonRoutes);

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'LinguaFluent Backend - Running!' });
});

// Sync DB & Start Server
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
  });
}).catch(err => console.log('DB Connection Error: ', err));
// backend/index.js

const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Example route for root URL
app.get('/', (req, res) => {
  res.send('Hello, Maziwa! Your backend is running.');
});

// Import routes (for savings, microloans, etc.)
const savingsRoutes = require('./routes/savings');
const microloansRoutes = require('./routes/microloans');

// Use routes
app.use('/api/savings', savingsRoutes);
app.use('/api/microloans', microloansRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

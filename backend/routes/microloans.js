// routes/microloans.js

const express = require('express');
const router = express.Router();

// Example: GET request to fetch microloans data
router.get('/', (req, res) => {
  const microloansData = [
    { id: 1, amount: 2000, currency: 'KES', interest: 12 },
    { id: 2, amount: 5000, currency: 'KES', interest: 10 }
  ];
  res.json(microloansData);
});

module.exports = router;

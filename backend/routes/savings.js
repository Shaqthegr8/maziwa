// routes/savings.js

const express = require('express');
const router = express.Router();
const { getAllSavings } = require('../controllers/savingsController');

// Use the controller for the route
router.get('/', getAllSavings);

module.exports = router;

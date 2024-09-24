// controllers/savingsController.js

const getAllSavings = (req, res) => {
    const savingsData = [
      { id: 1, amount: 500, currency: 'KES' },
      { id: 2, amount: 1500, currency: 'KES' }
    ];
    res.json(savingsData);
  };
  
  module.exports = { getAllSavings };
  
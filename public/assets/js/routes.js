// Import necessary modules
const path = require('path');
const express = require('express');

// Create a router instance
const router = express.Router();

// Define HTML routes
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'notes.html'));
});

// Export the router
module.exports = router;

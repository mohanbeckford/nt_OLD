const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Import the routes module
const routes = require('./routes');

// Use the routes module for HTML routes
app.use('/', routes);

// Read notes from the db.json file
app.get('/notes', (req, res) => {
  const notes = JSON.parse(fs.readFileSync('db.json', 'utf8'));
  res.json(notes);
});

// Create a new note and save it to the db.json file
app.post('/notes', (req, res) => {
  const newNote = req.body;
  const notes = JSON.parse(fs.readFileSync('db.json', 'utf8'));
  notes.push(newNote);
  fs.writeFileSync('db.json', JSON.stringify(notes));
  res.json(newNote);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

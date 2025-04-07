const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// About route
app.get('/about', (req, res) => {
  res.send('This is a simple Node.js app using Express.');
});

// Post example
app.post('/echo', (req, res) => {
  res.json({
    message: 'You sent this:',
    body: req.body
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


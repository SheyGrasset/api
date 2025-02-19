// Import the express module
const express = require('express');

// Create an instance of express
const app = express();

// Define a route for the root URL ("/")
app.get('/', (req, res) => {
  res.send('Hola Mundo');
});

// Set the server to listen on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
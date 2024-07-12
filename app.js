const express = require('express');
const routes = require('./routes');
const { initDb } = require('./database');
const appConfig = require('./config');

const app = express();
const port = process.env.PORT || 3000;

// Initialize database connection
initDb();

// Use routes
app.use('/api', routes);

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


const express = require('express');
const app     = express();
const path    = require('path');

// Routes
const { todoRoutes } = require('./routes');

// HOST & PORT
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser
app.use(express.json());

// Set the template engine and DIR
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use('/', todoRoutes);

// Run the server
app.listen(PORT, HOST, function() {
    console.info(`Host: http://${HOST}:${PORT}`);
});
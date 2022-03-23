// Create Express App
const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

const PORT = process.env.PORT || 3000;

// Enable Pug
app.set('view engine', 'pug');

// Static route
app.use(express.static(path.join(__dirname, 'public')));

// Add the views folder
app.set('views', path.join(__dirname, './views'));

app.use('/', routes);

app.listen(PORT, function() {
    console.log(`Host: http://localhost:${PORT}`);
});
// Initialize express
const express = require('express');
const app = express();

// Config dotenv (environment variables)
require('dotenv').config({ path: './config/.env' });

// Import CORS
const cors = require('cors');
app.use(cors());

// Set view engine, views folder path and ejs layouts path
const path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
app.set('layout', path.join(__dirname, 'views/layouts/layout'));

// Set parsing methods
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set public folder (static serving)
app.use(express.static(path.join(__dirname, 'public')));

// Connect to DB
const connectDB = require('./config/connectDB');
connectDB();

// Set routes
const routes = require('./routes/routes');
app.use('/api', routes);

// Start server
app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});

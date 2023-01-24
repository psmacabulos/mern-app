const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const { errorHandler } = require('./middleware/errorMiddleware');

// setup middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// use the routes folder for API
app.use('/api/goals', require('./routes/goalRoutes'));
app.use(errorHandler); // placement of this is important. Should be after using routes

const port = process.env.PORT || 5000;

app.listen(5000, () => console.log(`Server started at port ${port}`));

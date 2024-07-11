const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/routes');
const sendWeatherReports = require('./controllers/cron');
const { db } = require('./db/db');

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to the database and start the server
const server = () => {
  db();

  // Use user routes
  app.use('/api', userRoutes);

  // Start the server
  app.listen(PORT, () => {
    console.log("Listening to port:", PORT);

    // Initialize the cron job for sending weather reports
    sendWeatherReports();
  });
};

server();

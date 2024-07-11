const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

// Route to store user details
router.post('/users', userController.storeUser);

// Route to update user location
router.put('/users/:id/location', userController.updateUserLocation);

// Route to get user's weather data for a given day
router.get('/users/:id/weather', userController.getUserWeatherData);

module.exports = router;

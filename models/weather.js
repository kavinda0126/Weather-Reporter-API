const mongoose = require('mongoose');

const WeatherSchema = new mongoose.Schema({
  date: Date,
  weatherData: Object,
});

module.exports = mongoose.model('Weather', WeatherSchema);
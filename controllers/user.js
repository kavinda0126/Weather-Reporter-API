const User = require('../models/user');
const getWeatherData = require('./getData');

const storeUser = async (req, res) => {
  const { email, lat,long } = req.body;
  try {
    const user = new User({ email, location: { latitude: lat, longitude: long }});
    await user.save();  // This will create the 'users' collection if it doesn't exist
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

const updateUserLocation = async (req, res) => {
    const { id } = req.params;
    const { lat } = req.body;
    const { long } = req.body;

    const location = { latitude: lat, longitude: long };
  try {
    const user = await User.findByIdAndUpdate(id, { location }, { new: true });
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getUserWeatherData = async (req, res) => {
  const { id } = req.params;
  const { date } = req.query;
  try {
    const user = await User.findById(id);
    const weatherData = user.weather.find(w => w.date.toISOString().split('T')[0] === date);
    if (weatherData) {
      res.status(200).send(weatherData);
    } else {
      res.status(404).send({ message: 'No weather data found for this date' });
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  storeUser,
  updateUserLocation,
  getUserWeatherData,
};

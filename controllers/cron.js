const cron = require('node-cron');
const User = require('../models/user');
const getWeatherData = require('./getData');
const { sendMail } = require('../config/nodemailer');

const sendWeatherReports = async () => {
  const users = await User.find();
  for (const user of users) {
    const weatherData = await getWeatherData(user.location.latitude, user.location.longitude);
    user.weather.push({ date: new Date(), weatherData });
    await user.save();

    const data = {
      to: user.email,
      subject: 'Weather Report',
      text: `The Weather Report :  ${weatherData.weather[0].description} with a temperature of ${weatherData.main.temp}°C`,
      html: `<p>The Weather Report : ${weatherData.weather[0].description} with a temperature of ${weatherData.main.temp}°C</p>`,
    };
    await sendMail(data);
  }
};

// Schedule the task to run every 3 hours
cron.schedule('0 */3 * * *', () => {
  console.log('Running the weather report job');
  sendWeatherReports().catch(error => console.error('Error in sending weather reports:', error));
});

module.exports = sendWeatherReports;

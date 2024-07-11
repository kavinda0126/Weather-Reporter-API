const nodemailer = require("nodemailer");
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  },
});

const sendMail = async ({ to, subject, text, html, attachments }) => {
  try {
    const mailOptions = {
      from: {
        name: 'WEATHER APP',
        address: process.env.EMAIL
      },
      to,
      subject,
      text,
      html,
      attachments
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

const sendMailHandler = async (req, res) => {
  const { to, subject, text, html, attachments } = req.body;

  try {
    await sendMail({ to, subject, text, html, attachments });
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = { sendMail, sendMailHandler };
``

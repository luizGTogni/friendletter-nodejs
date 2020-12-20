const nodemailer = require("nodemailer");

const sender = nodemailer.createTransport({
  host: process.env.HOST,
  service: "",
  port: process.env.PORT,
  secure: process.env.SECURE,
  auth: {
    user: process.env.USER,
    pass: process.env.PASS
  }
});

module.exports = sender;
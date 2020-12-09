const nodemailer = require("nodemailer");

const sender = nodemailer.createTransport({
  host: "smtp.gmail.com",
  service: "",
  port: 465,
  secure: true,
  auth: {
    user: process.env.USER,
    pass: process.env.PASS
  }
});

module.exports = sender;
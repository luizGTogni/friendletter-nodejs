const nodemailer = require("nodemailer");

const sender = nodemailer.createTransport({
  host: "smtp.gmail.com",
  service: "",
  port: 465,
  secure: true,
  auth: {
    user: "youremail@domain.com",
    pass: "yourpassword"
  }
});

module.exports = sender;
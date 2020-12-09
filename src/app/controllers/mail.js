const { checkFieldRequired, checkFieldRequiredAnonymous } = require("../../lib/checkFields");
const { hasError } = require("../../lib/verifications");
const { emailSending } = require("../../lib/sendEmail");

function index(req, res) {
  return res.render("mail/form");
}

function send(req, res) {
  const warnings = { errors: [] };
  const { emailTo, msg, checkedAnonymous } = req.body;
  let { nameFrom } = req.body;
  
  checkFieldRequired(emailTo, warnings, "Preencha o campo de email");
  checkFieldRequired(msg, warnings, "Preencha o campo de mensagem");
  checkFieldRequiredAnonymous(checkedAnonymous, nameFrom, warnings, "Preencha o campo de nome");

  const isError = hasError(warnings);

  if (isError) {
    return res.render("mail/form", { warnings, checkedAnonymous });
  }

  if (checkedAnonymous === "on") {
    nameFrom = "anônimo"
  }

  emailSending(emailTo, msg, nameFrom);
  
  return res.render("mail/form");
}

module.exports = {
  index,
  send
}
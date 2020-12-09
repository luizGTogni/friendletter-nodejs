const sender = require("./configSMTP");
const templateEmail = {
  from: "correioelegante.friendletter@gmail.com",
  to: "email@dapessoa.com",
  subject: "CORREIO ELEGANTE - Um amigo anônimo mandou para você",
  text: "MENSAGEM"
};

function emailSending(emailTo, msg, nameFrom) {
  templateEmail.to = emailTo;
  templateEmail.subject = `CORREIO ELEGANTE - Um amigo ${nameFrom} mandou para você`
  templateEmail.text = msg;

  sender.sendMail(templateEmail, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email enviado com sucesso");
    }
  });
}

module.exports = {
  emailSending,
}
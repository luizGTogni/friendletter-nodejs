function checkFieldRequired(field, warnings, msg) {
  if (field === "") {
    warnings.errors.push(msg);
  }
}

function checkFieldRequiredAnonymous(checkAnonymous, field, warnings, msg) {
  if (checkAnonymous !== "on") {
    checkFieldRequired(field, warnings, msg);
  }
}

module.exports = {
  checkFieldRequired,
  checkFieldRequiredAnonymous
}
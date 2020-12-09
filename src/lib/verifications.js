function hasError(warnings) {
  if (warnings.errors.length > 0) {
    return true;
  }
  return false;
}

module.exports = {
  hasError,
}
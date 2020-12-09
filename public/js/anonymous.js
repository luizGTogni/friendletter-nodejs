const anonymousCheck = document.querySelector("#anonymous");

function showName(isShow) {
  const formAnonymous = document.querySelector("#form-anonymous");
  const fieldAnonymous = document.querySelector("#name-from");
  if (isShow) {
    formAnonymous.classList.remove("form__control--hidden");
    return
  }

  fieldAnonymous.value = "";
  formAnonymous.classList.add("form__control--hidden");
}

function checkChecked() {
  if (anonymousCheck.checked) {
    showName(false);
    return;
  }
  showName(true);
}

anonymousCheck.addEventListener("click", checkChecked);

checkChecked();
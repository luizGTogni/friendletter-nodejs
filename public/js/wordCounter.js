const numberCharactersElement = document.querySelector("#number-characters");
const msgElement = document.querySelector("#msg");
let numberCharacters = 0;

function countCharacters() {
  numberCharacters = msgElement.value.length;

  showNumberWords(numberCharacters);
}

function showNumberWords(number) {
  numberCharactersElement.textContent = `${number} caracteres`;
}

msgElement.addEventListener("input", countCharacters);

showNumberWords(numberCharacters);
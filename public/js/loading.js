import redirect from "./redirect.js";

let firstWord = document.querySelector("#first-word");
let secondWord = document.querySelector("#second-word");

const words = [
  { first: "r", second: "e" },
  { first: "i", second: "t" },
  { first: "e", second: "t" },
  { first: "n", second: "e" },
  { first: "d", second: "r" },
]

let i = 0;
let time = 600;
function buildTitle(words) {
  firstWord.textContent += words[i].first;
  secondWord.textContent += words[i].second;

  if (i === 4) {
    setTimeout(() => {
      firstWord.classList.add("loading--title__active");
      secondWord.classList.add("loading--title__active");
    }, 1000);
  }

  i++;
}

function loading() {
  if (firstWord.textContent + secondWord.textContent === "FriendLetter") {
    redirect("/letter");
  } else {
    buildTitle(words);
  }
}

setInterval(loading, time);
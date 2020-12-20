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
      firstWord.style.fontSize = "12rem";
      firstWord.style.textShadow = "4px 4px 8px rgba(0, 0, 0, 0.40)";
      secondWord.style.fontSize = "12rem";
      secondWord.style.textShadow = "4px 4px 8px rgba(0, 0, 0, 0.40)";
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
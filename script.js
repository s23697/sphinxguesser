const MIN_NUMBER = 1;
const MAX_NUMBER = 9999;

const rangeLabelEl = document.querySelector(".range-label");
const guessEl = document.querySelector("#guess");
const statusEl = document.querySelector("#status");
const lessBtn = document.querySelector("#lessBtn");
const moreBtn = document.querySelector("#moreBtn");
const resetBtn = document.querySelector("#resetBtn");

let low = MIN_NUMBER;
let high = MAX_NUMBER;
let guess = getMiddle(low, high);

function getMiddle(min, max) {
  return Math.floor((min + max) / 2);
}

function formatNumber(value) {
  return String(value).padStart(4, "0");
}

function setStatus(message, type = "") {
  statusEl.textContent = message;
  statusEl.className = `status ${type}`.trim();
}

function render() {
  rangeLabelEl.textContent = `${formatNumber(low)}-${formatNumber(high)}`;
  guessEl.textContent = formatNumber(guess);
}

function makeNextGuess() {
  if (low > high) {
    setStatus("No number fits those answers. Try reset.", "error");
    return;
  }

  guess = getMiddle(low, high);
  //setStatus(`Is your number ${formatNumber(guess)}?`);
  render();
}

lessBtn.addEventListener("click", () => {
  high = guess - 1;
  makeNextGuess();
});

moreBtn.addEventListener("click", () => {
  low = guess + 1;
  makeNextGuess();
});

resetBtn.addEventListener("click", () => {
  low = MIN_NUMBER;
  high = MAX_NUMBER;
  guess = getMiddle(low, high);
  //setStatus(`Is your number ${formatNumber(guess)}?`);
  render();
});

render();

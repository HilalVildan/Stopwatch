let seconds = 00;
let tens = 00;
let minutes = 00;
const getSeconds = document.querySelector(".seconds");
const getTens = document.querySelector(".tens");
const getMinutes = document.querySelector(".minute");
const start = document.querySelector(".buton-play"),
  reset = document.querySelector(".buton-reset");
// const butondiv = document.querySelectorAll(".buton")
const stop = document.querySelector(".buton-pause");
let interval;

start.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
  stop.style.display = "block";
  start.style.display = "none";
});

stop.addEventListener("click", () => {
  clearInterval(interval);
  start.style.display = "block";
  stop.style.display = "none";
});

reset.addEventListener("click", () => {
  clearInterval(interval);
  start.style.display = "block";
  stop.style.display = "none";
  getMinutes.textContent = "00";
  getSeconds.textContent = "00";
  getTens.textContent = "00";
  tens = 0;
  seconds = 0;
  minutes = 0;
});

function startTimer() {
  tens++;
  if (tens <= 9) {
    getTens.textContent = "0" + tens;
  }
  if (tens > 9) {
    getTens.textContent = tens;
  }
  if (tens > 99) {
    seconds++;
    getSeconds.textContent = "0" + seconds;
    tens = 0;
    getTens.textContent = "0" + 0;
  }
  if (seconds > 9) {
    getSeconds.textContent = seconds;
  }
  if (seconds > 59) {
    minutes++;
    seconds = 0;
    getSeconds.textContent = "0" + seconds;
    getMinutes.textContent = "0" + minutes;
  }
  if (minutes > 9) {
    getMinutes.innerHTML = minutes;
  }
}

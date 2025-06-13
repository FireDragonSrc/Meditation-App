const configButton = document.querySelector(".config");
const optionsConfig = document.querySelector(".options");
const closeButton = document.querySelector(".close");
const aplicarTempo = document.querySelector(".aplicar");
const minInput = document.querySelector(".min");
const segInput = document.querySelector(".seg");

configButton.addEventListener("click", () => {
  optionsConfig.classList.remove("none");
  configButton.style.backgroundColor = "purple";
});
closeButton.addEventListener("click", () => {
  optionsConfig.classList.add("none");
  configButton.style.backgroundColor = "white";
});

// Áudio
const audioButton = document.querySelector(".audioButtons");
const audio = document.querySelector(".audio");

audioButton.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    audioButton.style.backgroundColor = "purple";
  } else {
    audio.pause();
    audioButton.style.backgroundColor = "white";
  }
});

// Cronômetro
const cron = document.querySelector(".cron");
const startButton = document.querySelector(".startButton");
const pauseButton = document.querySelector(".pauseButton");
const resetButton = document.querySelector(".resetButton");

let cronValue = cron.innerText;

aplicarTempo.addEventListener("click", () => {
  if (minInput.value.length <= 2 && segInput.value.length <= 2) {
    let minSave = Number(minInput.value);
    let segSave = Number(segInput.value);
    cronValue = `${minSave}:${segSave}`;
    cron.innerHTML = `${minSave}:${segSave}`;
    num = minSave * 60 + segSave;
    numSave = num;
  } else {
    cron.innerText = "15:00";
    num = min * 60 + seg;
    numSave = num;
  }
});

let [min, seg] = cronValue.split(":").map(Number);
let num = min * 60 + seg;
let numSave = num;
let start = null;

startButton.addEventListener("click", () => {
  if (start) return;
  const minAtual = Math.floor(num / 60)
    .toString()
    .padStart(2, "0");
  const segAtual = (num % 60).toString().padStart(2, "0");
  cron.innerText = `${minAtual}:${segAtual}`;

  start = setInterval(() => {
    num--;
    if (num >= 0) {
      const minAtual = Math.floor(num / 60)
        .toString()
        .padStart(2, "0");
      const segAtual = (num % 60).toString().padStart(2, "0");
      cron.innerText = `${minAtual}:${segAtual}`;
    } else {
      clearInterval(start);
      start = null;
    }
  }, 1000);
});

pauseButton.addEventListener("click", () => {
  clearInterval(start);
  start = null;
});

resetButton.addEventListener("click", () => {
  clearInterval(start);
  start = null;
  num = numSave;
  const minReset = Math.floor(num / 60)
    .toString()
    .padStart(2, "0");
  const segReset = (num % 60).toString().padStart(2, "0");
  cron.innerText = `${minReset}:${segReset}`;
});

//*\theme/*
const themeDefault = document.querySelector(".padrao");
const themeFlorest = document.querySelector(".floresta");
const themeGalaxy = document.querySelector(".space");

const body = document.querySelector("body");
const headerLine = document.querySelector("header");
const section = document.querySelector("section");
const divContainer = document.querySelector(".divContainer");
const cronBar = document.querySelector(".cronometro");

themeDefault.addEventListener("click", () => {
  body.style.backgroundColor = "#9A9A9A";
  headerLine.style.borderBottom = "2px solid rgba(0, 0, 0, 0.13)";
  section.style.backgroundColor = "#AFAFAF";
  divContainer.style.backgroundColor = "#AFAFAF";
  startButton.style.backgroundColor = "white";
  pauseButton.style.backgroundColor = "white";
  resetButton.style.backgroundColor = "white";
});
themeFlorest.addEventListener("click", () => {
  body.style.backgroundColor = "#52b20d";
  headerLine.style.borderBottom = "2px solid rgb(0, 0, 0)";
  section.style.backgroundColor = "#67c51a";
  divContainer.style.backgroundColor = "#67c51a";
  startButton.style.backgroundColor = "#3d9f00";
  pauseButton.style.backgroundColor = "#3d9f00";
  resetButton.style.backgroundColor = "#3d9f00";
});
themeGalaxy.addEventListener("click", () => {
  body.style.backgroundColor = "#341373";
  headerLine.style.borderBottom = "2px solid rgb(0, 0, 0)";
  section.style.backgroundColor = "#4d298b";
  divContainer.style.backgroundColor = "#4d298b";
  startButton.style.backgroundColor = "#653fa4";
  pauseButton.style.backgroundColor = "#653fa4";
  resetButton.style.backgroundColor = "#653fa4";
});

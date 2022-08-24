const watchTime = document.querySelector(".watchTime");
const inputTime = document.querySelector(".inputTime");
const inputTimeMinutes = document.querySelector(".inputTime__minutes");
const inputTimeSeconds = document.querySelector(".inputTime__seconds");
const watchMinutes = document.querySelector(".watchTime__minutes");
const watchSeconds = document.querySelector(".watchTime__seconds");
const song = document.querySelector("#audioComplete");
let intervalId;

function startCounting() {
  watchTime.style.display = "block";
  inputTime.style.display = "none";

  let inputMinutes = parseInt(60 * inputTimeMinutes.value);
  let inputSeconds = parseInt(inputTimeSeconds.value);
  let timer = inputMinutes + inputSeconds;

  intervalId = setInterval(function () {
    let minutes = parseInt(timer / 60, 10);
    let seconds = parseInt(timer % 60, 10);

    watchMinutes.innerHTML = minutes.toString().padStart(2, "0");
    watchSeconds.innerHTML = seconds.toString().padStart(2, "0");
    if (timer > 0) timer--;
    else {
      clearInterval(intervalId);
      song.play();
      watchTime.style.display = "none";
      inputTime.style.display = "block";
    }
  }, 1000);
}

function pauseCounting() {
  clearInterval(intervalId);
  let inputMinutes = document.querySelector(".inputTime__minutes");
  let inputSeconds = document.querySelector(".inputTime__seconds");
  let watchMinutes = document.querySelector(".watchTime__minutes").innerText;
  let watchSeconds = document.querySelector(".watchTime__seconds").innerText;

  inputMinutes.value = watchMinutes;
  inputSeconds.value = watchSeconds;
}

function stopCounting() {
  clearInterval(intervalId);

  watchTime.style.display = "none";
  inputTime.style.display = "block";
}

function startCounting() {
  let inputMinutes = parseInt(60 * document.querySelector(".inputTime__minutes").value);
  let inputSeconds = parseInt(document.querySelector(".inputTime__seconds").value);
  let timer = inputMinutes + inputSeconds;

  setInterval(function() {
    let minutes = parseInt(timer / 60, 10);
    let seconds = parseInt(timer % 60, 10);
    let watchMinutes = document.querySelector(".watchTime__minutes");
    let watchSeconds = document.querySelector(".watchTime__seconds");

    watchMinutes.innerHTML = minutes.toString().padStart(2, "0");
    watchSeconds.innerHTML = seconds.toString().padStart(2, "0");
    console.log("timer", timer);
    if(timer > 0) timer--;
    else{
      clearInterval(1);
      document.querySelector("#audioComplete").play();
    } 
  }, 1000);
}

function pauseCounting() {
  clearInterval(1);
  let inputMinutes = document.querySelector(".inputTime__minutes");
  let inputSeconds = document.querySelector(".inputTime__seconds");
  let watchMinutes = document.querySelector(".watchTime__minutes").innerText;
  let watchSeconds = document.querySelector(".watchTime__seconds").innerText;

  inputMinutes.value = watchMinutes;
  inputSeconds.value = watchSeconds;
}

function stopCounting() {
  clearInterval(1);
  let minutes = 0;
  let seconds = 0;
  
  let watchMinutes = document.querySelector(".watchTime__minutes");
  let watchSeconds = document.querySelector(".watchTime__seconds");

  watchMinutes.innerHTML = minutes.toString().padStart(2, "0");
  watchSeconds.innerHTML = seconds.toString().padStart(2, "0");
}
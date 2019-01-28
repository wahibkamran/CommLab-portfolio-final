var player = document.getElementById("player");

var startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", playerStart);
startBtn.disabled=false;

var pauseBtn = document.getElementById("pauseBtn");
pauseBtn.addEventListener("click", playerPause);
pauseBtn.style.opacity=0;
pauseBtn.disabled=true;

var continueBtn = document.getElementById("continueBtn");
continueBtn.addEventListener("click", playerStart);
continueBtn.style.opacity=0;
continueBtn.disabled=true;

function playerStart() {
  startBtn.style.opacity = 0;
  pauseBtn.style.opacity=1;
  pauseBtn.disabled=false;
  continueBtn.style.opacity=0;
  player.play();
  startBtn.disabled=true;
}

function playerPause() {
  player.pause();
  pauseBtn.style.opacity=0;
  pauseBtn.disabled=true;
  continueBtn.style.opacity=1;
  continueBtn.disabled=false;
}

player.onended=function(){
  pauseBtn.style.opacity=0;
}
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

var wave = document.getElementById("wv");
wave.style.opacity=0;


function playerStart() {
  startBtn.style.opacity = 0;
  pauseBtn.style.opacity=1;
  pauseBtn.disabled=false;
  continueBtn.style.opacity=0;
  player.play();
  wave.style.opacity=1;
  startBtn.disabled=true;
}

function playerPause() {
  player.pause();
  wave.style.opacity=0;
  pauseBtn.style.opacity=0;
  pauseBtn.disabled=true;
  continueBtn.style.opacity=1;
  continueBtn.disabled=false;
}

player.onended=function(){
  wave.style.opacity=0;
  pauseBtn.style.opacity=0;
}
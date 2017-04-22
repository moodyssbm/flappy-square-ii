let c = document.getElementById('container');
let ctx = c.getContext('2d');

let apple = 'rgb(60,245,25)';
let fonts = '20px Helvetica'

let mainClock;

const GAME_W = window.innerWidth;
const GAME_H = window.innerHeight;
c.width = GAME_W;
c.height = GAME_H;

let birb = {
  x: 32,
  y: GAME_H/2-16,
  w: 32,
  h: 32,
  v: 0,
  c: apple
}

function drawBirb(o) {
  ctx.fillStyle = o.c;
  ctx.fillRect(o.x, o.y, o.w, o.h);
}

// TITLE SCREEN
ctx.fillStyle = apple;
ctx.font = fonts;
ctx.fillText('FLAPPY SQUARE II',GAME_W/2-95,GAME_H/2-50);
ctx.fillText('CLICK TO START', GAME_W/2-83, GAME_H/2-25);
c.addEventListener('click', function() {
  startGameClock();
});

// MAIN CLOCK
function startGameClock() {
  c.removeEventListener('click', function() {return 0;});
  mainClock = setInterval(function() {
    ctx.clearRect(0, 0, GAME_W, GAME_H);
    drawBirb(birb);
  },1000/60);
}

let c = document.getElementById('container');
let ctx = c.getContext('2d');

let apple = 'rgb(60,245,25)';
let fonts = '20px Helvetica';

let termVel = 5;

let mainClock;

let clockKey = true;

const GAME_W = window.innerWidth;
const GAME_H = window.innerHeight;
c.width = GAME_W;
c.height = GAME_H;

let birb = {
  x: 32,
  y: 32,
  w: 32,
  h: 32,
  v: 0,
  c: apple
}

function drawBirb(o) {
  ctx.fillStyle = o.c;
  ctx.fillRect(o.x, o.y, o.w, o.h);
}

function moveBirb(o) {
  o.y += o.v;
  if(o.v < termVel) {
    o.v += 0.25;
  }
  console.log('moving');
}

// TITLE SCREEN
ctx.fillStyle = apple;
ctx.font = fonts;
ctx.fillText('FLAPPY SQUARE II',GAME_W/2-95,GAME_H/2-50);
ctx.fillText('CLICK TO START', GAME_W/2-83, GAME_H/2-25);
c.addEventListener('click', function() {
  startGameClock(clockKey);
});

// MAIN CLOCK
function startGameClock(n) {
  c.removeEventListener('click', function() { startGameClock(); }, false);
  c.addEventListener('click', function() {
    birb.v = -5;
  });
  if(clockKey) {
    clockKey = false;
    mainClock = setInterval(function() {
      ctx.clearRect(0, 0, GAME_W, GAME_H);
      drawBirb(birb);
      moveBirb(birb);
    },1000/60);
  }
}

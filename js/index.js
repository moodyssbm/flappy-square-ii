let c = document.getElementById('container');
let ctx = c.getContext('2d');

let apple = 'rgb(60,245,25)';
let fonts = '20px Helvetica'

let mainClock;

const GAME_W = window.innerWidth;
const GAME_H = window.innerHeight;
c.width = GAME_W;
c.height = GAME_H;

// TITLE SCREEN
ctx.fillStyle = apple;
ctx.font = fonts;
ctx.fillText('FLAPPY SQUARE II',GAME_W/2-95,GAME_H/2-50);
ctx.fillText('CLICK TO START', GAME_W/2-83, GAME_H/2-25);

// MAIN CLOCK
mainClock = setInterval(function() {

},1000/60);
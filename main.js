let e = require('electron');

let app = e.app;
let BrowserWindow = e.BrowserWindow;

let debugMode = false;

let winOpts = {
	width: 640,
	height: 480
}

app.on('ready', function() {
	let win = new BroswerWindow(winOpts);
	win.loadURL(`file://{__dirname}/index.html`);

	if(debugMode) {
		win.webContents.openDevTools();
	}
});

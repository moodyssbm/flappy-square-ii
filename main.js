let e = require('electron');

let app = e.app;
let BrowserWindow = e.BrowserWindow;

let debugMode = false;

let winOpts = {
	width: 800,
	height: 600
}

app.on('ready', function() {
	let win = new BrowserWindow(winOpts);
	win.loadURL(`file://${__dirname}/index.html`);

	if(debugMode) {
		win.webContents.openDevTools();
	}
});

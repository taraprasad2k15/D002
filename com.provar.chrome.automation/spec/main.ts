// In the main process.
import { app, BrowserWindow } from 'electron';
// Or use `remote` from the renderer process.
// const {BrowserWindow} = require('electron').remote
function init() {
	let win = new BrowserWindow({ width: 800, height: 600 });
	win.on('closed', () => {
		win = null;
	});

	// Load a remote URL
	// win.loadURL('https://github.com');

	// Or load a local HTML file
	win.loadURL(`file://${__dirname}/index.html`);
}
app.commandLine.appendSwitch('js-flags', '--max-old-space-size=10240');
app.on('ready', () => {
	init();
});

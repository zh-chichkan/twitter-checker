const app = require('app');
const BrowserWindow = require('browser-window');
let win;

require('crash-reporter').start();

let createWndow = () => {
  win = new BrowserWindow({ width: 1360, height: 800 });
  win.loadUrl('file://' + __dirname + '/public/index.html');
  win.openDevTools();
  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWndow);

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
});

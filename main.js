'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let win;

let createWndow = () => {
  win = new BrowserWindow({ width: 1360, height: 800 });
  win.loadURL('file://' + __dirname + '/public/index.html');
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

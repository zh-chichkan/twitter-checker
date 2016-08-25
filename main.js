'use strict';
const electron = require('electron');
const ipcMain = electron.ipcMain;
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let win;
let isWinInFocuse = true;

let createWndow = () => {
  win = new BrowserWindow({ width: 900, height: 600 });
  win.loadURL('file://' + __dirname + '/public/index.html');
  win.openDevTools();
  win.on('closed', () => win = null);
  win.on('focus', () => {
    win.setProgressBar(0);
    isWinInFocuse = true;
  });
  win.on('blur', () => isWinInFocuse = false);
};

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

ipcMain.on('notify-tray', (event) => {
  if (!isWinInFocuse) {
    win.setProgressBar(1);
  }

  event.returnValue = 'done';
});

const {app, BrowserWindow, ipcMain} = require('electron');
const url = require('url');
const path = require('path');

function createMainWindow() {

  const mainWindow = new BrowserWindow({
      title : 'ElecApp',

      width : 1000,
      height : 600,
    
      webPreferences : {

        contextIsolation : true,
        nodeIntegration : true,
        preload : path.join(__dirname, 'preload.js')

      }

  });

  mainWindow.webContents.openDevTools();

  const startUrl = url.format({
    pathname: path.join(__dirname, './app/build/index.html'),
    protocol : 'file'
  });


  mainWindow.loadURL('http://localhost:3000');

}

app.whenReady().then(createMainWindow);


ipcMain.on('submit:todoForm' , (event, opts) => {
    console.log({"Data : " : opts});
})

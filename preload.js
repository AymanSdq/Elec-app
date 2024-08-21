// This file is the file that will preload before the app launch
const {contextBridge} = require("electron");
const os = require("os");



contextBridge.exposeInMainWorld('electron', {

  homeDir : () => os.homedir(),
  osVersion : () => os.version(),
  arch: () => os.arch(),

})

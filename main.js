const {
  app, BrowserWindow, clipboard, globalShortcut, Menu, MenuItem
} = require('electron');
const request = require('request');
const url = require('url');
const path = require('path');
const nativeImage = require('electron').nativeImage;
require('v8-compile-cache');
const fs = require('fs');
require('electron-debug')({
  showDevTools: false
});

let win;
var image = nativeImage.createFromPath(__dirname + 'assets/icons/png/logo.png');
image.setTemplateImage(true);

function createWindow() {
  win = new BrowserWindow({
    // titleBarStyle: 'true',
    title: 'BinanceTradingBot',
    backgroundColor: '#ffffff',
    width: "100%",
    height: "100%",
    frame: true,
    fullscreen: true,
    resizable: true,
    movable: true,
    modal: true,
    center: true,
    transparent: false,
    icon: image,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: true,
      enableRemoteModule: false
    }
  })
  win.loadFile('index.html')
  win.on('closed', () => {
    win = null
  })
  win.once('ready-to-show', () => {
    win.show()
  })
}

const template = [
{
  label: 'BinanceTradingBot',
  submenu: [
  { 
    label:'Acerca de...',
    role: 'about',
    submenu: [
    {
      label: 'Visita el proyecto',
      click: async () => {
        const { shell } = require('electron')
        await shell.openExternal('https://berkinalex.com/bot-trading-binance-criptomonedas')
      }
    },
    {
      label: 'Contactar con el desarrollador',
      click: async () => {
        const { shell } = require('electron')
        await shell.openExternal('mailto:info@berkinalex.com')
      }
    }
    ]
  }
  ]
},
{
  label: "Editar",
  submenu: [
  { label: "Retroceder", accelerator: "CmdOrCtrl+Z", selector: "undo:" },
  { label: "Adelantar", accelerator: "Shift+CmdOrCtrl+Z", selector: "redo:" },
  { type: "separator" },
  { label: "Cortar", accelerator: "CmdOrCtrl+X", selector: "cut:" },
  { label: "Copiar", accelerator: "CmdOrCtrl+C", selector: "copy:" },
  { label: "Pegar", accelerator: "CmdOrCtrl+V", selector: "paste:" },
  { label: "Seleccionar todo", accelerator: "CmdOrCtrl+A", selector: "selectAll:" }
  ]},
  {
    label: 'Opciones',
    submenu: [
    {
      label:'Reiniciar',
      role: 'reload'
    },
    {
      label: 'Salir',
      role: 'quit'
    },
    { 
      label: 'Herramientas de desarrollo',
      role: 'toggledevtools'
    },
    {
      label: 'Speech (macOS)',
      submenu: [
      { role: 'startspeaking' },
      { role: 'stopspeaking' }
      ]
    },
    {
      type: 'separator'
    },
    {
      label:'Reiniciar Zoom',
      role: 'resetzoom'
    },
    {
      label:'Zoom +',
      role: 'zoomin'
    },
    {
      label:'Zoom -',
      role: 'zoomout'
    }
    ]
  }
  ]

  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
  app.on('ready', createWindow)

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

  app.on('activate', () => {
    if (win === null) {
      createWindow()
    }
  })
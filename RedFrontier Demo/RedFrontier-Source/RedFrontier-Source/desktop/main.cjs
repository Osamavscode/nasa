// Electron entry point — runs the game as a Windows desktop application
const { app, BrowserWindow, ipcMain, Menu } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1600, height: 900, minWidth: 1280, minHeight: 720,
    backgroundColor: '#040814', title: 'Red Frontier — Mars Mission Designer',
    icon: path.join(__dirname, 'icon.png'),
    autoHideMenuBar: true, show: false,
    webPreferences: { preload: path.join(__dirname, 'preload.cjs'), contextIsolation: true, nodeIntegration: false, backgroundThrottling: false },
  });
  Menu.setApplicationMenu(null);
  win.loadFile(path.join(__dirname, 'game', 'index.html'));
  win.once('ready-to-show', () => { win.maximize(); win.show(); });
  win.webContents.on('before-input-event', (e, input) => {
    if (input.type === 'keyDown' && input.key === 'F11') { win.setFullScreen(!win.isFullScreen()); e.preventDefault(); }
    if (input.type === 'keyDown' && input.key === 'F12') win.webContents.toggleDevTools();
  });
}
ipcMain.on('quit', () => app.quit());
app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());

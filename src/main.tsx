import ReactDOM from 'react-dom/client';
import App from './App';
import React from 'react';
import './index.css';
import './demos/ipc';
import { app, BrowserWindow, ipcMain, shell } from 'electron';
import path from 'path';
// If you want use Node.js, the`nodeIntegration` needs to be enabled in the Main process.
// import './demos/node'

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: false,
      enableRemoteModule: true,
      nodeIntegration: true
    }
  });

  win.loadURL('http://localhost:3000'); // or loadFile if you are loading an HTML file directly
}

app.on('ready', createWindow);

ipcMain.on('open-file', (event, filePath) => {
  shell.openPath(filePath).then((error) => {
    if (error) {
      console.error(`Error: ${error.message}`);
    }
  });
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

postMessage({ payload: 'removeLoading' }, '*');

const OpenGoogle = () => {
  const openGoogle = useCallback(() => {
    window.ipcRenderer.invoke('open-browser', 'https://www.google.com');
  }, []);

  return (
    <button onClick={openGoogle}>
      Open Google
    </button>
  );
};

export default OpenGoogle;


postMessage({ payload: 'removeLoading' }, '*')

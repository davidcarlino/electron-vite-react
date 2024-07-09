import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './index.css'

import './demos/ipc'
// If you want use Node.js, the`nodeIntegration` needs to be enabled in the Main process.
// import './demos/node'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
import { useCallback } from 'react';

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

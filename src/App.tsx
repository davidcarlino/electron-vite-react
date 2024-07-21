import { useState } from 'react';
import UpdateElectron from '@/components/update';
import logoVite from './assets/itsd-cover.png';
import logoElectron from './assets/logo-electron.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const openPdf = () => {
    window.electron.openFile('C:/temp/document.pdf');
  };

  return (
    <div className='App'>
      <div className='logo-box'>
        <a href='https://ipartners.atlassian.net/servicedesk/customer/portals' target='_blank'>
          <img src={logoVite} className='logo vite' alt='Electron + Vite logo' />
        </a>
      </div>
      <h1>iPartners Self Service</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          Fix Google Drive Not Working
        </button>
        <br /><br />
        <button onClick={openPdf}>
          Fix Slack Not Working
        </button>
        <br /><br />
        <button onClick={() => setCount((count) => count + 1)}>
          Fix Taskbar Glitch
        </button>
        <br /><br />
        <a href='https://ipartners.atlassian.net/servicedesk/customer/portals' target='_blank'>
          Fix Google Drive Not Working
        </a>
        <br /><br /><br />
      </div>
      <p className='read-the-docs'>
        Still Need Help? Click Below to Raise A Ticket
      </p>
      <a href='https://ipartners.atlassian.net/servicedesk/customer/portals' target='_blank'>
        <button id="googleButton">Raise A Ticket</button>
      </a>
    </div>
  );
}

export default App;

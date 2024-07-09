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

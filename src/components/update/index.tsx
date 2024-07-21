import { useCallback } from 'react';

window.electron.invoke('open-browser', 'https://www.google.com');

const OpenGoogle = () => {
  const openGoogle = useCallback(() => {
    window.electron.invoke('open-browser', 'https://www.google.com');
  }, []);

  return (
    <button onClick={openGoogle}>
      Open Google
    </button>
  );
};

export default OpenGoogle;

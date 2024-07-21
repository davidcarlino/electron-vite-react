/// <reference types="vite/client" />

interface ElectronAPI {
  openFile: (filePath: string) => void;
  invoke: (channel: string, ...args: any[]) => Promise<any>;
  on: (channel: string, listener: (event: any, ...args: any[]) => void) => void;
}

interface Window {
  electron: ElectronAPI;
}

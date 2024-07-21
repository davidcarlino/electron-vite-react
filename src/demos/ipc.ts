window.electron.on('main-process-message', (_event, ...args) => {
  console.log(args);
});

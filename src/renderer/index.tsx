import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store/index';
import { parseCDUScreenData } from './store/cdu/cduData';
import { parseISFDScreenData } from './store/displays/ISFDData';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// calling IPC exposed from preload script
window.electron.ipcRenderer.on('ipc-example', (arg) => {
  // eslint-disable-next-line no-console
  console.log(arg);
});

// Here we subscribe to the cdu updates from the main application
window.electron.ipcRenderer.on('update/cdu', (arg) => {
  // eslint-disable-next-line no-console
  // console.log(arg);
  // receiveCDUDataPackage(arg);
  store.dispatch(parseCDUScreenData(arg));
});

window.electron.ipcRenderer.on('update/isfd', (arg) => {
  // eslint-disable-next-line no-console
  // console.log(arg);
  // receiveCDUDataPackage(arg);
  // console.log(arg);
  store.dispatch(parseISFDScreenData(arg));
});

window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store/index';
import { receiveCDUDataPackage } from './store/cdu/cduDataListener';
import { parseScreenData } from './store/cdu/cduData';

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
  store.dispatch(parseScreenData(arg));
});

window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);

import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import ContextProvider from '../store/showSelectContext/showSelectContext';
import "../src/sass/style.scss";
import { Provider } from 'react-redux';
import { store } from '../store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <ContextProvider>
      <App />
    </ContextProvider>
  </Provider>
);

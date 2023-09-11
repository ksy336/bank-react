import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import ContextProvider from '../store/FormsContext/stepContext';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import ScoringContextProvider from '../store/FormsContext/scoringContext';
import ScheduleContextProvider from '../store/FormsContext/scheduleContext';
import DocumentContextProvider from '../store/FormsContext/documentContext';
import "../src/sass/style.scss";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <ContextProvider>
      <ScoringContextProvider>
        <ScheduleContextProvider>
          <DocumentContextProvider>
            <App />
          </DocumentContextProvider>
        </ScheduleContextProvider>
      </ScoringContextProvider>
    </ContextProvider>
  </Provider>
);

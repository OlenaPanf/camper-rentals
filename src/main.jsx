import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize';
import { Provider } from 'react-redux';
import App from '../src/components/App/App';
import './index.css';
import store from './redux/store';
// import { persistor } from './redux/store';
// import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <App />
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);

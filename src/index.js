import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

import { App } from 'components/App';
import { theme } from './utils/theme';
import './index.css';
import 'modern-normalize/modern-normalize.css';
import { store } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    {/* <React.StrictMode> */}
    <BrowserRouter basename="/project-team-4-react-node.js">
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
        <App />
        {/* </PersistGate> */}
      </Provider>
    </BrowserRouter>

    {/* </React.StrictMode> */}
  </ThemeProvider>
);

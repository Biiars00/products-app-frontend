import React from 'react';
import ReactDOM from 'react-dom/client';
import theme from './theme';
import App from './App';

import { ThemeProvider as MuiThemeProvider } from 'styled-components';
import { ThemeProvider } from 'styled-components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </MuiThemeProvider>
  </React.StrictMode>
);
import React from 'react';
import ReactDOM from 'react-dom/client';
import {ThemeProvider} from "styled-components";
import {Global} from "./themes/Global";
import App from './App';
import {lightTheme} from "./themes/LightTheme";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <ThemeProvider theme={lightTheme}>
          <Global/>
          <App />
      </ThemeProvider>
  </React.StrictMode>
);

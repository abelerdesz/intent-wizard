import { ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { IntentsPage } from './IntentsPage';
import './index.css';
import { theme } from './theme/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <IntentsPage />
    </ThemeProvider>
  </React.StrictMode>
);

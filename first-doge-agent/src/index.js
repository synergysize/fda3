import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: "'Inter', sans-serif",
    body: "'Inter', sans-serif",
  },
  colors: {
    brand: {
      50: '#f9f0ff',
      100: '#e9d5ff',
      200: '#d8b4fe',
      300: '#c084fc',
      400: '#a855f7',
      500: '#8B5CF6',  // Main brand color
      600: '#7c3aed',
      700: '#6d28d9',
      800: '#5b21b6',
      900: '#4c1d95',
    },
    doge: {
      50: '#FFF9E6',
      100: '#FFEEC2',
      200: '#FFE499',
      300: '#FFD970',
      400: '#FFCF47',
      500: '#F6A623',  // Doge gold
      600: '#D98E00',
      700: '#B37300',
      800: '#8C5B00',
      900: '#664200',
    },
    dark: {
      100: '#1E293B',  // Dark navy
      200: '#0F172A',  // Deep navy
      300: '#0F1A2D',  // Official dark background
    }
  },
  styles: {
    global: {
      body: {
        bg: 'dark.300',
        color: 'white',
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

reportWebVitals();
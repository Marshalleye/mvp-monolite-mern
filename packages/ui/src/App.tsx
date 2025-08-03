import React from 'react';
import { MVPThemeProvider } from './theme';
import { AppRouter } from './components/test';

function App() {
  return (
    <MVPThemeProvider 
      initialVariant="glassmorphism"
      initialColorScheme="light"
    >
      <AppRouter />
    </MVPThemeProvider>
  );
}

export default App;
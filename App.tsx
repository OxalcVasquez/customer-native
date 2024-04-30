import React from 'react';
import Navigation from './Navigation';
import ToastProvider from 'react-native-toast-message';

function App() {
  return (
    <>
      <Navigation />
      <ToastProvider position="bottom" bottomOffset={20} />
    </>
  );
}


export default App;

import React from 'react';
import Navigation from './Navigation';
import Toast from 'react-native-toast-message';

function App() {
  return (
    <>
      <Navigation />
      <Toast position="bottom" bottomOffset={20} />
    </>
  );
}


export default App;

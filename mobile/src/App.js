import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './routes';

function App() {
  return (
    <>
      <Routes />
      <StatusBar barStyle="light-content" backgroundColor="#7d40e7"/>
    </>
  );
};



export default App;

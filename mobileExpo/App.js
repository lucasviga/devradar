import React from 'react';
import { StatusBar, YellowBox } from 'react-native';

import Routes from './src/routes';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
]);

function App() {
  return (
    <>
      <Routes />
      <StatusBar barStyle="light-content" backgroundColor="#7d40e7"/>
    </>
  );
};



export default App;

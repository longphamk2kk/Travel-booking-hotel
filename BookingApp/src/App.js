import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './navigators/Navigation';

function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}

export default App;

import 'react-native-gesture-handler';
import React from 'react';
import {Navigator} from './src/routes/Navigator';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
};

export default App;

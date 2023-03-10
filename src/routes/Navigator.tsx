import React from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../screens';
import {SearchCompanyScreen} from '../screens/SearchCompanyScreen';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <SafeAreaProvider>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: 'white',
          },
        }}>
        <Stack.Screen name="Welcome" component={LoginScreen} />
        <Stack.Screen name="NavigatorUser" component={SearchCompanyScreen} />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
};

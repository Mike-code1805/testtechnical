import React from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createStackNavigator} from '@react-navigation/stack';
import {
  LoginScreen,
  SearchCompanyScreen,
  MonthlyReportScreen,
} from '../screens';

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
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen
          name="MonthlyReportScreen"
          component={MonthlyReportScreen}
        />
        <Stack.Screen
          name="SearchCompanyScreen"
          component={SearchCompanyScreen}
        />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
};

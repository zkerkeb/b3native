import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Characters from '../screens/characters';
import Details from '../screens/details';
const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Characters"
        component={Characters}
        options={{title: 'Personnages'}}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{title: 'Details'}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;

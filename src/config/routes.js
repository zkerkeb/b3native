import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/login';
import Characters from '../screens/characters';
import Details from '../screens/details';

const Stack = createNativeStackNavigator();

//Création du router
const Routes = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Connexion'}}
        />
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
    </NavigationContainer>
  );
};

export default Routes;

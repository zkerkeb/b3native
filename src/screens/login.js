import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const Login = ({navigation}) => {
  return (
    <View>
      <Text>Login</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Characters')}>
        <Text>TO Characters</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

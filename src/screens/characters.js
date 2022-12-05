import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, Touchable, TouchableOpacity, View} from 'react-native';

const Characters = () => {
  const navigation = useNavigation(); // deux manières de faire
  return (
    <View>
      <Text>Characters</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>TO Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Characters;

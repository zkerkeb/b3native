import React from 'react';
import {Text, View} from 'react-native';

//Destructuration ES6 de la props
const Header = ({title = 'Ecris un truc ici'}) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default Header;

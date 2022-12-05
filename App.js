import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Counter from './src/components/counter';
import Header from './src/components/header';
import Styled from 'styled-components';
import Routes from './src/config/routes';

//On mets les routes dans un composant "Routes"
const App = () => {
  return <Routes />;
};

const StyledText = Styled.Text`
  color: red;
`;

export default App;

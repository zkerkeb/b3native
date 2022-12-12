import React, {useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Counter from './src/components/counter';
import Header from './src/components/header';
import Styled from 'styled-components';
import Routes from './src/config/routes';

import './src/config/axiosInterceptor';
import axios from 'axios';

//On mets les routes dans un composant "Routes"
const App = () => {
  // useEffect(() => {
  //   axios
  //     .get('https://login.hikkary.com/protected ')
  //     .then(res => res)
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }, []);
  return <Routes />;
};

const StyledText = Styled.Text`
  color: red;
`;

export default App;

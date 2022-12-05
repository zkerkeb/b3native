import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const [inputs, setInputs] = React.useState({
    username: '',
    password: '',
  });
  //fonction pour récuperer un token
  const logMeIn = async () => {
    //Verification des champs
    if (inputs.password.length < 8) {
      alert('Password must be at least 8 characters long');
      return;
    }

    axios({
      method: 'post',
      url: 'https://login.hikkary.com/users/login',
      data: {
        username: inputs.username,
        password: inputs.password,
      },
    })
      .then(async response => {
        console.log(response.headers['x-access-token']);
        await AsyncStorage.setItem('token', response.headers['x-access-token']);
        navigation.navigate('Characters');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <View>
      <Text>Login</Text>
      <View>
        <TextInputContainer>
          <TextInputStyled
            value={inputs.username}
            onChangeText={text => setInputs({...inputs, username: text})}
          />
        </TextInputContainer>
        <TextInputContainer>
          <TextInputStyled
            value={inputs.password}
            onChangeText={text => setInputs({...inputs, password: text})}
            secureTextEntry={true}
          />
        </TextInputContainer>
        <LoginButton onPress={logMeIn}>
          <Text>Login</Text>
        </LoginButton>
      </View>
    </View>
  );
};

//Utilisation des styled components
const LoginButton = styled.TouchableOpacity`
  background-color: red;
  padding: 12px;
  border-radius: 4px;
`;

const TextInputContainer = styled.View`
  margin: 10px;
`;

const TextInputStyled = styled.TextInput`
  background-color: red;
  padding: 12px;
  border-radius: 12px;
  color: white;
`;

export default Login;

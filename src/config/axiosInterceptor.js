import * as RootNavigation from './rootNavigation';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // ajouter le token dans le header
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if (response.status === 200) {
      alert('incroyable !');
    }

    return response;
  },
  async function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // if (error.status === 403) { // Tout depend de ce que renvoie l'API
    await AsyncStorage.removeItem('token');
    RootNavigation.navigate('Public');
    // }
    return Promise.reject(error);
  },
);

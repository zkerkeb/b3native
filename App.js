import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Counter from './src/components/counter';
import Header from './src/components/header';

const App = () => {
  return (
    <SafeAreaView>
      <Header title="Breaking News: Des sacs gratuits a Ynov" />
      <Counter />
    </SafeAreaView>
  );
};

export default App;

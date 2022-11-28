import React, {useState, useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
//TouchableOpacity rend un élément cliquable avec un effet visuel (utiliser onPress)

//Initialisation du component compteur
const Counter = () => {
  //Initialisation de la state count à 0
  //count -> valeur
  //setCount -> setter
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    alert(count);
  }, []);
  // surveiller les states/props que l'on souhaite

  return (
    <View>
      <View>
        <Text
          style={{
            fontSize: 30,
          }}>
          {count}
        </Text>
      </View>
      <View>
        {/* Fonction fléchée -> écrire une fonction plus courte */}
        <TouchableOpacity onPress={() => setCount(count - 1)}>
          <Text
            style={{
              fontSize: 30,
            }}>
            -
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={increment}>
          <Text
            style={{
              fontSize: 30,
            }}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Counter;

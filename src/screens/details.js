import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';
import {PUBLIC_API_KEY} from '@env';
import Avatar from '../components/avatar';

//On recupere la props route à laquelle on a passé l'id d'un héro
const Details = ({route}) => {
  const [character, setCharacter] = React.useState({});

  // Exemple optional Chaining
  console.log(character);
  console.log(character.series);
  console.log(character.series?.available); // si character.series n'existe pas, sa plante, c'est pour ça qu'on utilise le optional chaining

  useEffect(() => {
    axios({
      method: 'get',
      //On fetch le héro en utilisant le template string (ES6)
      url: `https://gateway.marvel.com:443/v1/public/characters/${route.params?.id}`,
      params: {
        ts: 1,
        apikey: PUBLIC_API_KEY,
        hash: '9d1d8b5327a0c456b3b485ec147a0d86',
      },
    })
      .then(response => {
        //Fuck les devs marvels (c pas propre)
        // console.log(response.data.data.results[0]);
        setCharacter(response.data.data.results[0]);
      })
      .catch(error => {
        console.log(error);
      });
  }, [route.params?.id]);
  return (
    <View>
      <Text>Details</Text>
      <Avatar
        imageSource={`https://${character.thumbnail?.path?.split('://')[1]}.${
          character.thumbnail?.extension
        }`}
      />
      <Text>
        {character.description
          ? character.description
          : 'Pas de description disponible'}
      </Text>
    </View>
  );
};

export default Details;

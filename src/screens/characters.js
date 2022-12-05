import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {PUBLIC_API_KEY} from '@env';

const Characters = () => {
  const [characters, setCharacters] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const offset = 20;
  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://gateway.marvel.com:443/v1/public/characters',
      params: {
        ts: 1,
        apikey: PUBLIC_API_KEY,
        hash: '9d1d8b5327a0c456b3b485ec147a0d86',
        limit: 20,
        offset: page * offset,
      },
    })
      .then(response => {
        console.log(response.data.data.results);
        setCharacters([...characters, ...response.data.data.results]);
      })
      .catch(error => {
        console.log(error);
      });
  }, [page]);

  const navigation = useNavigation(); // deux manières de faire

  const renderItem = ({item}) => {
    console.log(
      '🚀 ~ file: characters.js:39 ~ renderItem ~ item',
      `https://${item.thumbnail.path.split('://')[1]}.${
        item.thumbnail.extension
      }`,
    );
    return (
      <TouchableOpacity>
        <Image
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'red',
          }}
          source={{
            uri: `https://${item.thumbnail.path.split('://')[1]}.${
              item.thumbnail.extension
            }`,
          }}
        />
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Text>Characters</Text>
      <FlatList
        data={characters}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onEndReached={() => {
          setPage(page + 1);
        }}
        onEndReachedThreshold={0.4}
      />
    </View>
  );
};

export default Characters;

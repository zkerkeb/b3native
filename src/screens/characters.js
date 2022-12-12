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
import Avatar from '../components/avatar';

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
    return (
      <TouchableOpacity
        onPress={() => {
          //On fait passer en params de la route l'id de l'item (props)
          navigation.navigate('Details', {id: item.id});
        }}>
        <Avatar
          imageSource={`https://${item.thumbnail?.path.split('://')[1]}.${
            item.thumbnail?.extension
          }`}
        />
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          fontFamily: 'Harry P',
        }}>
        Characters
      </Text>
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

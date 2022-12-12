import React from 'react';
import {Image} from 'react-native';

const Avatar = ({imageSource}) => {
  const imageOption = {
    uri: imageSource,
  };

  return (
    <Image
      style={{
        width: 100,
        height: 100,
        backgroundColor: 'red',
      }}
      source={imageOption}
      // source={{
      //   uri: imageSource,
      // }}
    />
  );
};

export default Avatar;

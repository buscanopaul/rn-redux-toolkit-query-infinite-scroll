import React from 'react';
import { Image, Text, View } from 'react-native';
import { formatDate } from '../utils/formatDate';

type Props = {
  item: {
    artworkUrl100: string;
  };
};

const Item = ({ item }: Props) => {
  return (
    <View>
      <Image
        source={{ uri: item.artworkUrl100 }}
        style={{ height: 100, width: 100 }}
        resizeMode="cover"
      />
      <Text>{item.artistName}</Text>
      <Text>{item.trackPrice}</Text>
      <Text>{formatDate(item.releaseDate)}</Text>
    </View>
  );
};

export default Item;

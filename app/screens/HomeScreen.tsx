import React, { useState } from 'react';
import { FlatList, SafeAreaView, Text, TextInput, View } from 'react-native';
import Item from '../components/Item';
import { itemsAdapter, itemsSelector, useSearchQuery } from '../redux/api';

type Props = {};

const HomeScreen = (props: Props) => {
  const [offset, setOffset] = useState(0);
  const { data } = useSearchQuery(
    {
      term: 'happy',
      offset,
    },
    {
      selectFromResult: ({ data, ...otherParams }) => ({
        data: itemsSelector.selectAll(data ?? itemsAdapter.getInitialState()),
        ...otherParams,
      }),
    }
  );

  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
      <TextInput placeholder="Search Itunes" />
      <FlatList
        data={data ?? []}
        renderItem={({ item }) => <Item item={item} />}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        onEndReached={() => setOffset(offset + 10)}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

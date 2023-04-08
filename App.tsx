/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import type { PropsWithChildren } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

const App: React.FunctionComponent = (): JSX.Element => {
  // const [inp, setInp] = useState("");

  // const handleChange = (e: string) => {
  //   setInp(e);
  //   console.log(e);

  // };

  // const handlePress = () => {
  //   setInp("");
  // };

  interface List {
    serial: number;
    name: string;
  }

  const list: List[] = [
    {
      serial: 1,
      name: 'sadi',
    },
    {
      serial: 2,
      name: 'tanvir',
    },
    {
      serial: 3,
      name: 'tahmid',
    },
    {
      serial: 4,
      name: 'sami',
    },
    {
      serial: 1,
      name: 'sadi',
    },
    {
      serial: 2,
      name: 'tanvir',
    },
    {
      serial: 3,
      name: 'tahmid',
    },
    {
      serial: 4,
      name: 'sami',
    },
    {
      serial: 1,
      name: 'sadi',
    },
    {
      serial: 2,
      name: 'tanvir',
    },
    {
      serial: 3,
      name: 'tahmid',
    },
    {
      serial: 4,
      name: 'sami',
    },
    {
      serial: 1,
      name: 'sadi',
    },
    {
      serial: 2,
      name: 'tanvir',
    },
    {
      serial: 3,
      name: 'tahmid',
    },
    {
      serial: 4,
      name: 'sami',
    },
    {
      serial: 1,
      name: 'sadi',
    },
    {
      serial: 2,
      name: 'tanvir',
    },
    {
      serial: 3,
      name: 'tahmid',
    },
    {
      serial: 4,
      name: 'sami',
    },
    {
      serial: 3,
      name: 'tahmid',
    },
    {
      serial: 4,
      name: 'sami',
    },
    {
      serial: 1,
      name: 'sadi',
    },
    {
      serial: 2,
      name: 'tanvir',
    },
    {
      serial: 3,
      name: 'tahmid',
    },
    {
      serial: 4,
      name: 'sami',
    },
    {
      serial: 3,
      name: 'tahmid',
    },
    {
      serial: 4,
      name: 'sami',
    },
    {
      serial: 1,
      name: 'sadi',
    },
    {
      serial: 2,
      name: 'tanvir',
    },
    {
      serial: 3,
      name: 'tahmid',
    },
    {
      serial: 4,
      name: 'sami',
    },
    {
      serial: 3,
      name: 'tahmid',
    },
    {
      serial: 4,
      name: 'sami',
    },
    {
      serial: 1,
      name: 'sadi',
    },
    {
      serial: 2,
      name: 'tanvir',
    },
    {
      serial: 3,
      name: 'tahmid',
    },
    {
      serial: 4,
      name: 'sami',
    },
    {
      serial: 3,
      name: 'tahmid',
    },
    {
      serial: 4,
      name: 'sami',
    },
    {
      serial: 1,
      name: 'sadi',
    },
    {
      serial: 2,
      name: 'tanvir',
    },
    {
      serial: 3,
      name: 'tahmid',
    },
    {
      serial: 4,
      name: 'sami',
    },
    {
      serial: 3,
      name: 'tahmid',
    },
    {
      serial: 4,
      name: 'sami',
    },
    {
      serial: 1,
      name: 'sadi',
    },
    {
      serial: 2,
      name: 'tanvir',
    },
    {
      serial: 3,
      name: 'tahmid',
    },
    {
      serial: 4,
      name: 'sami',
    },
    {
      serial: 3,
      name: 'tahmid',
    },
    {
      serial: 4,
      name: 'sami',
    },
    {
      serial: 1,
      name: 'sadi',
    },
    {
      serial: 2,
      name: 'tanvir',
    },
    {
      serial: 3,
      name: 'tahmid',
    },
    {
      serial: 4,
      name: 'sami',
    },
    {
      serial: 3,
      name: 'tahmid',
    },
    {
      serial: 4,
      name: 'sami',
    },
    {
      serial: 1,
      name: 'sadi',
    },
    {
      serial: 2,
      name: 'tanvir',
    },
    {
      serial: 3,
      name: 'tahmid',
    },
    {
      serial: 4,
      name: 'sami',
    },
    {
      serial: 3,
      name: 'tahmid',
    },
    {
      serial: 4,
      name: 'sami',
    },
    {
      serial: 1,
      name: 'sadi',
    },
    {
      serial: 2,
      name: 'tanvir',
    },
    {
      serial: 3,
      name: 'tahmid',
    },
    {
      serial: 4,
      name: 'sami',
    },
    {
      serial: 3,
      name: 'tahmid',
    },
    {
      serial: 4,
      name: 'sami',
    },
    {
      serial: 1,
      name: 'sadi',
    },
    {
      serial: 2,
      name: 'tanvir',
    },
    {
      serial: 3,
      name: 'tahmid',
    },
    {
      serial: 4,
      name: 'sami',
    },
    {
      serial: 3,
      name: 'tahmid',
    },
    {
      serial: 4,
      name: 'sami',
    },
    {
      serial: 1,
      name: 'sadi',
    },
    {
      serial: 2,
      name: 'tanvir',
    },
    {
      serial: 3,
      name: 'tahmid',
    },
    {
      serial: 4,
      name: 'sami',
    },
    {
      serial: 3,
      name: 'tahmid',
    },
    {
      serial: 4,
      name: 'sami',
    },
    {
      serial: 1,
      name: 'sadi',
    },
    {
      serial: 2,
      name: 'tanvir',
    },
    {
      serial: 3,
      name: 'tahmid',
    },
    {
      serial: 4,
      name: 'sami',
    },
    {
      serial: 3,
      name: 'tahmid',
    },
    {
      serial: 4,
      name: 'sami',
    },
    {
      serial: 1,
      name: 'sadi',
    },
    {
      serial: 2,
      name: 'tanvir',
    },
    {
      serial: 3,
      name: 'tahmid',
    },
    {
      serial: 4,
      name: 'sami',
    },
    {
      serial: 3,
      name: 'tahmid',
    },
    {
      serial: 4,
      name: 'sami',
    },
    {
      serial: 1,
      name: 'sadi',
    },
    {
      serial: 2,
      name: 'tanvir',
    },
    {
      serial: 3,
      name: 'tahmid',
    },
    {
      serial: 4,
      name: 'sami',
    },
    {
      serial: 3,
      name: 'tahmid',
    },
    {
      serial: 4,
      name: 'sami',
    },
    {
      serial: 1,
      name: 'sadi',
    },
    {
      serial: 2,
      name: 'tanvir',
    },
    {
      serial: 3,
      name: 'tahmid',
    },
    {
      serial: 4,
      name: 'sami',
    },
  ];

  return (
    <ScrollView>
      <View style={style.flexStyle}>
        <FlatList
          data={list}
          renderItem={({ item }: { item: List }):JSX.Element => (
            <Text style={style.textBox}>{item.name}</Text>
          )}
        />
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  flexStyle: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  textBox: {
    backgroundColor: 'red',
    padding: 5,
    margin: 2,
    color: 'white',
    font: 'bold',
    fontSize: 25,
  },
});

export default App;
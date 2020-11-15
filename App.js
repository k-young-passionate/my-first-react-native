/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  Button,
  View,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';

import StartScreen from './screens/StartScreen';
import GameScreen from './screens/GameScreen';
import EndScreen from './screens/EndScreen';

const App = () => {
  const [gameState, setGameState] = useState('start');

  const gameStateHandler = (state) => {
    setGameState(state);
  };

  let content = <StartScreen stateHandler={gameStateHandler} />;
  if (gameState === 'game') {
    content = <GameScreen stateHandler={gameStateHandler} />;
  } else if (gameState === 'end') {
    content = <EndScreen stateHandler={gameStateHandler} />;
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.screen}>
        <Text style={styles.headerText}> Hello, world! </Text>
      </View>
      {content}
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red',
    borderRadius: 10,
  },
  headerText: {
    fontSize: 20,
  },
  button: {
    height: 20,
    width: 60,
  },
  buttonSet: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    width: 200,
    padding: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
});

export default App;

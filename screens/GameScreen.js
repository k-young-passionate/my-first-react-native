import React from 'react';
import {StyleSheet, Button, View, TextInput} from 'react-native';

const GameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TextInput style={styles.textInput} />
      <View style={styles.buttonSet}>
        <Button title="+" style={styles.button} />
        <Button title="-" style={styles.button} />
      </View>
      <View style={styles.screen}>
        <Button title="stop" onPress={() => props.stateHandler('end')} />
      </View>
    </View>
  );
};

export default GameScreen;

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

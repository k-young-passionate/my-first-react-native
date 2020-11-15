import React from 'react';
import {StyleSheet, Button, View} from 'react-native';

const StartScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Button
        title="let's start"
        style={styles.button}
        onPress={() => props.stateHandler('game')}
      />
    </View>
  );
};

export default StartScreen;

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

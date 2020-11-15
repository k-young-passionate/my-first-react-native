import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const EndScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>END</Text>
    </View>
  );
};

export default EndScreen;

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

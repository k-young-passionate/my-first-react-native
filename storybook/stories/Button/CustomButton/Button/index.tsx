import React from 'react';
import { Button } from 'react-native';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableHighlight } from 'react-native';

export default function CustomButton({ onPress, color, children }) {
  return (
    <Button
      title={children}
      color={color}
      onPress={onPress}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    color: 'red',
    borderRadius: 10,
  }
});
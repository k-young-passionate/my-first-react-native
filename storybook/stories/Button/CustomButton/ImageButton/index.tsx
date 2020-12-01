import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Pressable, Text, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

export const TNFButton = function ({ onPress, children }) {
  return <TouchableNativeFeedback onPress={onPress}>{children}</TouchableNativeFeedback>;
}

export const THButton = function ({ onPress, children }) {
  return <TouchableHighlight onPress={onPress}>{children}</TouchableHighlight>;
}

export const TOButton = function ({ onPress, children }) {
  return <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>;
}

export const TWFButton = function ({ onPress, children }) {
  return <TouchableWithoutFeedback onPress={onPress}>{children}</TouchableWithoutFeedback>;
}

export const PressButton = function ({ onPress, onLongPress, children }) {
  return (
    <Pressable onPress={onPress}
      //onPressIn={onPressIn} onPressOut={onPressOut}
      onLongPress={onLongPress}
      delayLongPress={1000}
    >
      {({pressed}) => {
        return (
          <Text>
            {pressed ? 'Pressed!' : 'Press me'}
          </Text>
        );
      }}
    </Pressable>);
}


// Button.defaultProps = {
//   children: null,
//   onPress: () => { },
// };

// Button.propTypes = {
//   children: PropTypes.node,
//   onPress: PropTypes.func,
// };


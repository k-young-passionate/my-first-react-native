import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

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


// Button.defaultProps = {
//   children: null,
//   onPress: () => { },
// };

// Button.propTypes = {
//   children: PropTypes.node,
//   onPress: PropTypes.func,
// };

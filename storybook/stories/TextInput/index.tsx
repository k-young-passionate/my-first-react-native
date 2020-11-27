import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';

export const CustomTextInput = props => {
    const [value, onChangeText] = React.useState('');
    return (
        <TextInput
            {...props}
            onChangeText={text => onChangeText(text)}
            value={value}
        />
    );
}
import { Text, View, StyleSheet } from 'react-native';

import React from 'react';
import { storiesOf } from '@storybook/react-native';

import GetUserInfo from './index';

storiesOf('Axios', module).add('Get', () => (
    <GetUserInfo text={'Axios works!'} />
));

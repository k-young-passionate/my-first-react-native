import { Text, View, StyleSheet, Button, SafeAreaView } from 'react-native';

import React from 'react';
import { storiesOf } from '@storybook/react-native';

import CenterView from '../CenterView';
import CustomModal from '.';

storiesOf('Modal', module)
    .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
    .add('Modal', () => (
        <CustomModal />
    ));

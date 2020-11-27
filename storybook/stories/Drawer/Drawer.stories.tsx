import { Text, View, StyleSheet, Button, SafeAreaView } from 'react-native';

import React, { useState } from 'react';
import { storiesOf } from '@storybook/react-native';

import CenterView from '../CenterView';
import CustomDrawer from '.';

storiesOf('Custom Drawer', module)
    .add('Custom Drawer', () => (
        <CustomDrawer />
    ));

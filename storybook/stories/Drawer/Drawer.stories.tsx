import React from 'react';
import { storiesOf } from '@storybook/react-native';

import CustomDrawer from '.';

storiesOf('Custom Drawer', module)
    .add('Custom Drawer', () => (
        <CustomDrawer />
    ));

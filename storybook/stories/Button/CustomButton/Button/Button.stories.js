import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import CustomButton from '.';
import CenterView from '../../../CenterView';

storiesOf('Custom Button', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('General Custom Button', () => (
    <CustomButton 
      color="red"
      onPress={action('custom-button-clicked')}>
      {'Button text'}
    </CustomButton>
  ));

import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { StyleSheet, Text, Image } from 'react-native';
import { TNFButton, THButton, TOButton, TWFButton } from '.';
import CenterView from '../../../CenterView';

const button = require('../../../../../data/img/button.jpg')

storiesOf('Custom Button', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Touchable Native Feedback', () => (
    <TNFButton onPress={action('clicked-tnf')}>
      <Image source={button} style={styles.buttonImg} />
    </TNFButton>
  ))
  .add('Touchable Highlight', () => (
    <THButton onPress={action('clicked-th')}>
      <Image source={button} style={styles.buttonImg} />
    </THButton>
  ))
  .add('Touchable Opacity', () => (
    <TOButton onPress={action('clicked-to')}>
      <Image source={button} style={styles.buttonImg} />
    </TOButton>
  ))
  .add('Touchable without Feedback', () => (
    <TWFButton onPress={action('clicked-twf')}>
      <Image source={button} style={styles.buttonImg} />
    </TWFButton>
  ));


  const styles = StyleSheet.create({
    buttonImg: {
      width: 300,
      height: 100,
    }
  });
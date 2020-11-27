import { Text, View, StyleSheet, Button, SafeAreaView } from 'react-native';

import React, { useState } from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import CenterView from '../CenterView';
import { CustomTextInput } from '.';

storiesOf('Text Input', module)
    .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
    .add('Text Inputs', () => (
        <SafeAreaView>
            <View style={styles.unit}>
                <Text>General Text</Text>
                <CustomTextInput style={{ ...styles.box, ...styles.common }} />
            </View>
            <View style={{ ...styles.multiline, ...styles.unit }}>
                <Text>Multiline Text</Text>
                <CustomTextInput
                    {...styles.common}
                    multiline
                    numberOfLines={4}
                    editable
                    maxLength={100}
                />
            </View>

            <View style={styles.unit}>
                <Text>Phone Number Text</Text>
                <CustomTextInput
                    style={{ ...styles.number, ...styles.common }}
                    dataDetectorTypes='phoneNumber'
                    keyboardType='phone-pad'
                    textContentType='telephoneNumber'
                />
            </View>

            <View style={styles.unit}>
                <Text>Password Text</Text>
                <CustomTextInput
                    style={{ ...styles.number, ...styles.common }}
                    secureTextEntry={true}
                    textContentType='password'
                />
            </View>
            <View style={styles.unit}>
                <Button title="submit" onPress={ action('button pushed') } />
            </View>
        </SafeAreaView>

    ));

const styles = StyleSheet.create({
    box: {
        borderColor: 'gray',
        borderWidth: 1,
        height: 40,
    },
    multiline: {

    },
    number: {
        borderColor: 'red',
        borderWidth: 1,
    },
    common: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        backgroundColor: 'gray'
    },
    unit: {
        flex: 1,
        flexDirection: 'column',
        width: 300,
        borderColor: 'blue',
        borderWidth: 1,
    }

});
import { Text, View, StyleSheet } from 'react-native';

import React, { useState, useEffect } from 'react';
import { storiesOf } from '@storybook/react-native';
import axios, { AxiosResponse } from 'axios';

import UserInfoType from './UserInfo';

interface Props {
    text: string;
}

const Simple: React.FC<Props> = (props) => {
    const [userInfo, setUserInfo] = useState<UserInfoType>();
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    const userInfoHandler = (userInfo: UserInfoType) => {
        setUserInfo(userInfo);
        setIsLoaded(true);
    }



    useEffect(() => {
        axios.get('https://gist.githubusercontent.com/k-young-passionate/7bad3a4ca592bd95b9791008eda93fd4/raw/08afed44e835551a287d95b988a6492f3b9de7ad/myFetchTester.json')
            .then((response) => {
                const userInfo: UserInfoType = {
                    id: response.data.id,
                    name: response.data.name,
                    job: response.data.job,
                    hobby: response.data.hobby,
                };
                userInfoHandler(userInfo);
            })
    }, []);

    let data = (<Text>{props.text}</Text>);
    if (isLoaded) {
        data = (
            <View>
                <Text>{props.text}</Text>
                <UserData userInfo={userInfo}/>
            </View>
        );
    }

    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {data}
        </View>
    )
};

storiesOf('Typescript', module).add('default', () => (
    <Simple text={'Typescript works!'} />
));

const styles = StyleSheet.create({
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 10,
    },
    content: {
        fontSize: 10,
        marginStart: 5,
    }
});

const UserData = (props: any) => {
    return (
        <View>
            <Text style={styles.title}>Name</Text>
            <Text style={styles.content}>{props.userInfo.name}</Text>
            <Text style={styles.title}>Job</Text>
            <Text style={styles.content}>{props.userInfo.job}</Text>
            <Text style={styles.title}>Hobbies</Text>
            {props.userInfo?.hobby.map( (hobby: string) => {
                return (<Text style={styles.content}>{hobby}</Text>)
            }
            )}
        </View>
    );
}
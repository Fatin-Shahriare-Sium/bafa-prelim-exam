import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DrawerRouter} from '@react-navigation/native';

const Home = ({navigation}) => {
    return (
        <View>
            <Text>Homergvbiherpbgawjrbhqpo</Text>
            <Text onPress={() => navigation.navigate('Detail')}>Detail</Text>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({});

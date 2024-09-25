import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Details = ({navigation}) => {
    return (
        <View>
            <Text onPress={() => navigation.navigate('IqSec')}>Iq</Text>
            <Text>Details</Text>
        </View>
    );
};

export default Details;

const styles = StyleSheet.create({});

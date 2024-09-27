/* eslint-disable react-native/no-inline-styles */
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SingleSyllabus: React.FC<{text: string}> = ({text}) => {
    return (
        <View style={styles.singleSyllabus}>
            <Text style={{color: 'white', fontSize: 23, fontWeight: 'bold'}}>{text}</Text>
        </View>
    );
};

export default SingleSyllabus;

const styles = StyleSheet.create({
    singleSyllabus: {
        width: Dimensions.get('window').width * 0.9,
        backgroundColor: '#121111',
        padding: 5,
        borderRadius: 5,
        margin: 5,
    },
});

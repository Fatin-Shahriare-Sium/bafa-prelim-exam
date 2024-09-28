/* eslint-disable react-native/no-inline-styles */
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SingleSyllabus from '../../components/singleSyllabus';

const EngSyllabus = () => {
    return (
        <View style={styles.EngSyllabusWrapper}>
            <Text style={{textAlign: 'center', fontSize: 30, color: 'white', fontWeight: '700', margin: 9}}>🎯 English Topics</Text>
            <SingleSyllabus text="1.Parts of Speech ⭐⭐⭐ " />
            <SingleSyllabus text="2.Identify Parts of Speech  ⭐⭐" />
            <SingleSyllabus text="3.Tense ⭐ " />
            <SingleSyllabus text="4.Narration(Indirect/Direct speech conversion) ⭐⭐⭐⭐⭐" />
            <SingleSyllabus text="5.Tag Questions ⭐⭐⭐" />
            <SingleSyllabus text="6.Transformation of sentences ⭐⭐⭐⭐" />
            <SingleSyllabus text="7.Clauses ⭐" />
            <SingleSyllabus text="8.Voice ⭐⭐⭐⭐" />
        </View>
    );
};

export default EngSyllabus;

const styles = StyleSheet.create({
    EngSyllabusWrapper: {
        backgroundColor: 'black',
        display: 'flex',
        alignItems: 'center',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    },
});

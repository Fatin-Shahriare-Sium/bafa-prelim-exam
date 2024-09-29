/* eslint-disable react-native/no-inline-styles */
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SingleSyllabus from '../../components/singleSyllabus';

const PmSyllabus = () => {
    return (
        <View style={styles.PMSyllabusWrapper}>
            <ScrollView>
                <Text style={{textAlign: 'center', fontSize: 30, color: 'white', fontWeight: '700', margin: 9}}>🎯 PhyMath Topics</Text>
                <SingleSyllabus text="1.😴 Just First Paper of Both ⭐⭐⭐⭐⭐" />
                <SingleSyllabus text="2.Vector ⭐⭐⭐⭐⭐" />
                <SingleSyllabus text="3.Newtonian mechanics⭐⭐⭐⭐⭐" />
                <SingleSyllabus text="4.Work and energy ⭐⭐  " />
                <SingleSyllabus text="5.Lose and profit math ⭐⭐⭐⭐⭐" />
                <SingleSyllabus text="6.Diffrention  ⭐⭐⭐" />
                <SingleSyllabus text="7.Intregation ⭐" />
                <SingleSyllabus text="8.Others topics within only first paper ⭐⭐⭐" />
            </ScrollView>
        </View>
    );
};

export default PmSyllabus;

const styles = StyleSheet.create({
    PMSyllabusWrapper: {
        backgroundColor: 'black',
        display: 'flex',
        alignItems: 'center',
        height: Dimensions.get('window').height * 0.78,
        width: Dimensions.get('window').width,
    },
});

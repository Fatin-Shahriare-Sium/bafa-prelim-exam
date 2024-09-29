/* eslint-disable react-native/no-inline-styles */
import {Button, Dimensions, Linking, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Details = () => {
    return (
        <View style={styles.detailsWrapper}>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 30, fontWeight: '900', letterSpacing: 3}}>About</Text>
            <View style={{marginTop: '5%'}}>
                <Text style={{color: 'white', textAlign: 'left', fontSize: 23, fontWeight: '500'}}>
                    I am F.F.Sium and ex-NotreDamian.I have attended several times in BAFA preliminary exam.I have also qualified in preliminary written exam several times.So,I have a lot of experiences.When,i first time wanted to attend this exam,i had not much information about question pattern like what types of question usually comes in exam.So,I have built this app to share my experiences with you.So that,it will make easier to crack BAFA preliminary exam. In Shaa Allah,this app is going to help you a lot undoubtedly.
                </Text>
            </View>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 25, fontWeight: 'bold', letterSpacing: 3, marginTop: '10%'}}>Contract:</Text>
            <View style={{marginTop: '3%'}}>
                <Button color="#121111" onPress={() => Linking.openURL('mailto:sium1206@gmail.com')} title="My Gmail" />
            </View>
        </View>
    );
};

export default Details;

const styles = StyleSheet.create({
    detailsWrapper: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: 'black',
        padding: 10,
    },
});

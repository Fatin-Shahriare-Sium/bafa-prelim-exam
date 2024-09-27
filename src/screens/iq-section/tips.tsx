/* eslint-disable react-native/no-inline-styles */
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const IQTips = () => {
    return (
        <View style={styles.iqTipsWrapper}>
            <Text style={{textAlign: 'center', fontSize: 30, color: 'white', fontWeight: '700', margin: 9}}>💡 IQ Tips</Text>
            <View>
                <Text style={{textAlign: 'center', fontSize: 23, color: 'white', fontWeight: '500', margin: 9}}>Try to clear the all concepts of IQ types.Then,try to practise ✍️ it every single day.At first,try 100 IQ for 50 minutes.then,try 100 IQ for 40 minutes and finally,try to do it in 30 minutes.Try to do it with StopWatch ⏱️ and this app also provides this facilities. It will gradually improve your iq skills.</Text>
                <Text style={{textAlign: 'center', fontSize: 23, color: '#ff0000', margin: 9}}> In BAFA preliminary test,we need to qualify in IQ test.Otherwise,we will not go forward.But,maximum candidates usually disqualifies 😥 in IQ test.At least,you should get 65+ mark to avoid yourself from being disqualified</Text>
                <Text style={{textAlign: 'center', fontSize: 23, color: 'white'}}>So,we should practise IQ every single day to save us from being disqualified.Best thing of BAFA prelim is that there is 😀 no negative marking for wrong answer.Try to answer All.</Text>
                <Text style={{textAlign: 'center', fontSize: 23, color: '#7cff00', margin: 9}}>Best of Luck 💪</Text>
            </View>
        </View>
    );
};

export default IQTips;

const styles = StyleSheet.create({
    iqTipsWrapper: {
        height: Dimensions.get('window').height,
        backgroundColor: 'black',
    },
});

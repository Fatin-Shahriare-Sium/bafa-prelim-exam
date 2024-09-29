/* eslint-disable react-native/no-inline-styles */
import {Dimensions, ScrollView, StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import React from 'react';

const IQTips = () => {
    let {fontScale} = useWindowDimensions();
    return (
        <View style={styles.iqTipsWrapper}>
            <ScrollView>
                <Text style={{textAlign: 'center', fontSize: 30 / fontScale, color: 'white', fontWeight: '700', margin: '1%'}}>💡 IQ Tips</Text>
                <Text style={{textAlign: 'center', fontSize: 20 / fontScale, color: 'white', fontWeight: '500', margin: '1%'}}>Try to clear the all concepts of IQ types.Then,try to practise ✍️ it every single day.At first,try 100 IQ for 50 minutes.then,try 100 IQ for 40 minutes and finally,try to do it in 30 minutes.Try to do it with StopWatch ⏱️ and this app also provides this facilities. It will gradually improve your iq skills.</Text>
                <Text style={{textAlign: 'center', fontSize: 20 / fontScale, color: '#ff0000', margin: '1%'}}> In BAFA preliminary test,we need to qualify in IQ test.Otherwise,we will not go forward.But,maximum candidates usually disqualifies 😥 in IQ test.At least,you should get 65+ mark to avoid yourself from being disqualified</Text>
                <Text style={{textAlign: 'center', fontSize: 20 / fontScale, color: 'white'}}>So,we should practise IQ every single day to save us from being disqualified.Best thing of BAFA prelim is that there is 😀 no negative marking for wrong answer.Try to answer All.</Text>
                <Text style={{textAlign: 'center', fontSize: 20 / fontScale, color: '#7cff00', margin: 9}}>Best of Luck 💪</Text>
            </ScrollView>
        </View>
    );
};

export default IQTips;

const styles = StyleSheet.create({
    iqTipsWrapper: {
        backgroundColor: 'black',
        flex: 1,
    },
});

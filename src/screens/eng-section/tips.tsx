/* eslint-disable react-native/no-inline-styles */
import {Dimensions, ScrollView, StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import React from 'react';

const EngTips = () => {
    let {fontScale} = useWindowDimensions();
    return (
        <View style={styles.engTipsWrapper}>
            <ScrollView>
                <Text style={{textAlign: 'center', fontSize: 30, color: 'white', fontWeight: '700', margin: '1%'}}>💡 Englsih Tips</Text>
                <View>
                    <Text style={{textAlign: 'left', fontSize: 20 / fontScale, color: 'white', fontWeight: '500', marginTop: '30%', marginLeft: '3%'}}>English exam is pretty much easier.Only,50 mcq in 30 minutes.Usually,2-5 candidates disqualify in english exam. The question usually comes from basic english grammer. If anyone has good basic knowledge about english,this exam will be very much easier surely</Text>
                </View>
            </ScrollView>
        </View>
    );
};

export default EngTips;

const styles = StyleSheet.create({
    engTipsWrapper: {
        backgroundColor: 'black',
        height: Dimensions.get('window').height * 0.78,
    },
});

/* eslint-disable react-native/no-inline-styles */
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CautionIocn from '../assets/caution-icon.png';
const CustomCautionBox = () => {
    return (
        <View style={styles.cautionContainer}>
            <View>
                <Image style={{width: 40, height: 40}} source={CautionIocn} />
                <Text style={{color: 'red', fontSize: 25}}>Caution.</Text>
            </View>
            <View>
                <Text style={{color: 'white', fontWeight: '400', fontSize: 21}}>We have tried to make questions using our experiences as we have also appeared this BAFA preliminary examination.We have tried to gather the experiences and make these questions. In Shaa Allah,your chances of being qualified in BAFA preliminary exam will increase surely if you practise properly our exam tests.</Text>
            </View>
        </View>
    );
};

export default CustomCautionBox;

const styles = StyleSheet.create({
    cautionContainer: {
        width: Dimensions.get('window').width * 0.9,
        backgroundColor: '#121111',
        padding: 10,
        borderRadius: 10,
    },
});

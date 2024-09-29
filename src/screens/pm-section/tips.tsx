/* eslint-disable react-native/no-inline-styles */
import {Dimensions, ScrollView, StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import React from 'react';

const PmTips = () => {
    let {fontScale} = useWindowDimensions();
    return (
        <View style={styles.pmTipsWrapper}>
            <ScrollView>
                <Text style={{textAlign: 'center', fontSize: 30, color: 'white', fontWeight: '700', margin: '1%'}}>💡 PhyMath Tips</Text>
                <View>
                    <Text style={{textAlign: 'left', fontSize: 20 / fontScale, color: 'white', fontWeight: '500', marginTop: '3%', marginLeft: '3%'}}>
                        Phy+Math exam is not that much easy.Here,approximately 7-10 candidates disqualified.Math and Physics exam will be held in one question paper.25 math +25 Physics questions in 25 minutes<Text style={{color: 'red', fontWeight: 'bold'}}>You can not use calculator here.</Text>
                        <Text>You should practise popular mcq of Physics and Math that frequently comes in H.S.C examination.</Text>
                        <Text style={{color: '#3ee33c', fontWeight: 'bold'}}>The most important thing is that you should study only First paper of Physics and Math as the maximum questions come from first paper not from second paper</Text>
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
};

export default PmTips;

const styles = StyleSheet.create({
    pmTipsWrapper: {
        height: Dimensions.get('window').height * 0.78,
        backgroundColor: 'black',
    },
});

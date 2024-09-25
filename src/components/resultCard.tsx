/* eslint-disable react-native/no-inline-styles */
import {Dimensions, Modal, StyleSheet, Text, View} from 'react-native';
import React from 'react';
interface resultCardPropsType {
    quesName: string;
    resultObj: {
        score: string;
        correct: number;
        incorrect: number;
        notTouched: number;
    };
}
const ResultCard: React.FC<resultCardPropsType> = ({quesName, resultObj}) => {
    return (
        <Modal visible={true}>
            <View style={styles.resultCardContainer}>
                <View style={styles.resultCard}>
                    <Text style={{color: 'white', textAlign: 'center', fontSize: 30, fontWeight: 'bold'}}>{quesName}</Text>
                    <Text style={{color: 'white', textAlign: 'center', fontSize: 25}}>{`Score:${resultObj.score}`}</Text>
                    <View style={{margin: 3, padding: 3}}>
                        <Text style={{color: '#20f94b', fontSize: 20}}>{`Correct:${resultObj.correct}`}</Text>
                        <Text style={{color: '#f84f4f', fontSize: 20}}>{`Incorrect:${resultObj.incorrect}`}</Text>
                        <Text style={{color: '#e9f920', fontSize: 20}}>{`Not Touched:${resultObj.notTouched}`}</Text>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default ResultCard;

const styles = StyleSheet.create({
    resultCardContainer: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#a7a9a9',
    },
    resultCard: {
        height: Dimensions.get('window').height * 0.4,
        width: Dimensions.get('window').width * 0.9,
        backgroundColor: 'black',
        borderRadius: 17,
        color: 'white',
    },
});

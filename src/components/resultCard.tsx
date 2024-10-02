/* eslint-disable react-native/no-inline-styles */
import {Dimensions, Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useRef} from 'react';
import LottieView from 'lottie-react-native';
import Sound from 'react-native-sound';
interface resultCardPropsType {
    quesName: string;
    resultObj: {
        score: string;
        correct: number;
        incorrect: number;
        notTouched: number;
        totalQ: number;
    };
    handleOkBtn: () => any;
    handleViewBtn: () => any;
}

const ResultCard: React.FC<resultCardPropsType> = ({quesName, resultObj, handleOkBtn, handleViewBtn}) => {
    const animationRef = useRef<LottieView>(null);
    let song = new Sound(resultObj.correct / resultObj.totalQ >= 0.66 ? 'suii.mp3' : 'sad.mp3', Sound.MAIN_BUNDLE, e => {
        console.log(e);
        song.play();
    });
    return (
        <Modal style={{zIndex: 700}} visible={true}>
            <View style={styles.resultCardContainer}>
                <LottieView ref={animationRef} style={styles.lottieAnimation} autoPlay={true} source={resultObj.correct / resultObj.totalQ >= 0.66 ? require('../assets/congo.json') : require('../assets/sad.json')} />
                <View style={styles.resultCard}>
                    <Text style={{color: 'white', textAlign: 'center', fontSize: 30, fontWeight: 'bold'}}>{quesName}</Text>
                    <Text style={{color: 'white', textAlign: 'center', fontSize: 25}}>{`Score:${resultObj.score}`}</Text>
                    <View style={{margin: 10, padding: 3}}>
                        <Text style={{color: '#20f94b', fontSize: 23}}>{`Correct:${resultObj.correct}`}</Text>
                        <Text style={{color: '#f84f4f', fontSize: 23}}>{`Incorrect:${resultObj.incorrect}`}</Text>
                        <Text style={{color: '#e9f920', fontSize: 23}}>{`Not Touched:${resultObj.notTouched}`}</Text>
                    </View>
                    <View style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row', width: '100%', top: '5%', zIndex: 400}}>
                        <TouchableOpacity onPress={() => handleOkBtn()} style={{...styles.resultCardBtn, backgroundColor: '#93c6d0'}}>
                            <Text style={{color: 'black', fontWeight: '700', fontSize: 25}}>Ok</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleViewBtn()} style={{...styles.resultCardBtn, backgroundColor: '#fcc002'}}>
                            <Text style={{color: 'black', fontWeight: '700', fontSize: 25}}>View</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default ResultCard;

const styles = StyleSheet.create({
    resultCardContainer: {
        flex: 1,
        width: Dimensions.get('window').width,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        position: 'relative',
    },
    resultCard: {
        height: Dimensions.get('window').height * 0.4,
        width: Dimensions.get('window').width * 0.9,
        backgroundColor: '#121111',
        borderRadius: 17,
        color: 'white',
    },
    resultCardBtn: {
        paddingVertical: 7,
        paddingHorizontal: 30,
        borderRadius: 10,
    },
    lottieAnimation: {
        position: 'absolute',
        height: Dimensions.get('window').height * 0.5,
        width: Dimensions.get('window').width,
        bottom: '45%',
        zIndex: 100,
    },
});

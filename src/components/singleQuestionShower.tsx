/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import {examType} from './mcqExaminer';

const SingleQuestionShower: React.FC<{questionid: string; questionType: examType; questionTitle: string; handleTakeExam: (id: string) => any}> = ({questionid, questionType, questionTitle, handleTakeExam}) => {
    return (
        <View>
            <View style={styles.singleQuestionShowerWrapper}>
                <View>
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>{questionTitle}</Text>
                </View>
                <View style={styles.singleQuestionShowerBtnWrapper}>
                    <TouchableOpacity
                        onPress={() => handleTakeExam(questionid)}
                        style={{
                            ...styles.singleQuestionShowerBtn,
                            backgroundColor: '#93c6d0',
                        }}>
                        <Text style={{color: 'black', fontSize: 15}}>Take Exam</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default SingleQuestionShower;

const styles = StyleSheet.create({
    singleQuestionShowerWrapper: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.09,
    },
    singleQuestionShowerBtnWrapper: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
    },
    singleQuestionShowerBtn: {
        paddingHorizontal: 23,
        paddingVertical: 10,
        margin: 3,
    },
});

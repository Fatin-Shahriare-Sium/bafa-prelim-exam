/* eslint-disable react-native/no-inline-styles */
import {
    Dimensions,
    FlatList,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React, {JSXElementConstructor, useEffect, useRef} from 'react';
import iqSet1 from '../data/iq/ques1.json';
import SingleMcqShower from './singleMcqShower.tsx';
import UseCheckAns from '../hooks/useCheckAns.ts';
export interface AnswerSheetObjType {
    questionNo: number;
    answer: {optionId: number};
}
const McqExaminer = () => {
    let answerSheet = useRef<AnswerSheetObjType[]>([]);
    //handle anser when user sellects an option
    let handleAnswer = (questionNo: number, answer: {optionId: number}) => {
        let preSheet = answerSheet.current;
        let newAns = {
            questionNo,
            answer,
        };
        preSheet.push(newAns);
        answerSheet.current = preSheet;
    };
    //handle submit to check answer paper
    let handleAnswerPaperCheck = () => {
        let {correctAns, incorrectAns, notTouch} = UseCheckAns(
            iqSet1.allQuestions,
            answerSheet.current,
        );
        console.log('incorrectAns', incorrectAns);
        console.log('not touch', notTouch);

        console.log(correctAns);
    };
    return (
        <View
            style={{
                height: Dimensions.get('window').height,
                width: Dimensions.get('window').width,
                backgroundColor: 'black',
            }}>
            <View>
                <Text
                    style={{
                        color: 'white',
                        textAlign: 'center',
                        fontSize: 30,
                        fontWeight: '900',
                    }}>
                    {iqSet1.questionName}
                </Text>
            </View>
            <ScrollView>
                <View style={styles.allMcqContainer}>
                    <FlatList
                        data={iqSet1.allQuestions}
                        keyExtractor={({question}) => question}
                        renderItem={sig => {
                            return (
                                <SingleMcqShower
                                    handleAnswer={handleAnswer}
                                    questionObj={sig.item}
                                />
                            );
                        }}
                    />
                </View>
            </ScrollView>
            <View
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <TouchableOpacity
                    style={styles.mcqSubmitBtn}
                    onPress={() => handleAnswerPaperCheck()}>
                    <Text
                        style={{
                            color: 'black',
                            fontSize: 17,
                            fontWeight: '700',
                        }}>
                        Submit Answer
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default McqExaminer;

const styles = StyleSheet.create({
    allMcqContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: 3,
    },
    mcqSubmitBtn: {
        backgroundColor: '#93c6d0',
        paddingVertical: 13,
        paddingHorizontal: 15,
        borderRadius: 9,
    },
});

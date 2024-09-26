/* eslint-disable react-native/no-inline-styles */
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import RadioGroup from 'react-native-radio-buttons-group';
import {AnswerSheetObjType} from './mcqExaminer';
interface SingleCheckedMcqShowerProps {
    questionObj: {
        no: number;
        question: string;
        option: {id: string; label: string}[];
        answer: {optionId: number};
    };
    isCorrect: boolean;
    userSelectedOption: AnswerSheetObjType;
}
const SingleCheckedMcqShower: React.FC<SingleCheckedMcqShowerProps> = ({questionObj, isCorrect, userSelectedOption}) => {
    console.log('userSelectedOptionin single chdclkked compoent', userSelectedOption);
    let determineColor = () => {
        let color = '';
        if (userSelectedOption.answer.optionId && isCorrect == true) {
            color = '#44f835';
        } else if (userSelectedOption.answer.optionId && isCorrect == false) {
            color = '#f56969';
        } else {
            color = '#fcc002';
        }
        return color;
    };
    let determineState = () => {
        let statement = '';
        if (userSelectedOption.answer.optionId && isCorrect == true) {
            statement = 'Your Answer is correct';
        } else if (userSelectedOption.answer.optionId && isCorrect == false) {
            statement = 'Your Answer is incorrect';
        } else {
            statement = 'You skipped it';
        }

        return statement;
    };
    return (
        <View style={{margin: '2%'}}>
            <Text style={{fontSize: 25, fontWeight: '700', color: '#e1dede'}}>{`${questionObj.no}.${questionObj.question}`}</Text>
            {/* <Text style={{color: 'red'}}>{isCorrect ? 'Correct' : 'incorrect'}</Text> */}
            <RadioGroup
                radioButtons={[
                    {
                        ...questionObj.option[0],
                        color: 'white',
                        borderColor: '#93c6d0',
                        selected: false,
                    },
                    {
                        ...questionObj.option[1],
                        color: 'white',
                        borderColor: '#93c6d0',
                        selected: false,
                    },
                    {
                        ...questionObj.option[2],
                        color: 'white',
                        borderColor: '#93c6d0',
                        selected: false,
                    },
                    {
                        ...questionObj.option[3],
                        color: 'white',
                        borderColor: '#93c6d0',
                        selected: true,
                    },
                ]}
                containerStyle={{
                    flexWrap: 'wrap',
                    marginTop: '1%',
                    backgroundColor: determineColor(),
                    padding: 2,
                    borderRadius: 5,
                }}
                selectedId={userSelectedOption.answer.optionId}
                labelStyle={{fontSize: 20, fontWeight: 'bold', color: 'white'}}
                layout="row"
            />
            <View style={{backgroundColor: 'white', height: Dimensions.get('window').height * 0.07}}>
                <Text style={{fontSize: 17, color: determineColor(), fontWeight: '500', marginLeft: '3%'}}>{determineState()}</Text>
                <Text style={{fontSize: 20, color: 'black', fontWeight: '900', marginLeft: '3%'}}>{`Answer:${questionObj.answer.optionId}`}</Text>
            </View>
        </View>
    );
};

export default SingleCheckedMcqShower;

const styles = StyleSheet.create({});

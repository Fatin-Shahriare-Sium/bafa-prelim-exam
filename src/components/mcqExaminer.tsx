/* eslint-disable react-native/no-inline-styles */
import {Dimensions, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View, Modal} from 'react-native';
import React, {JSXElementConstructor, useEffect, useRef, useState} from 'react';
import iqSet1 from '../data/iq/ques1.json';
import SingleMcqShower from './singleMcqShower.tsx';
import UseCheckAns from '../hooks/useCheckAns.ts';
import ResultCard from './resultCard.tsx';
import {TextInput} from 'react-native-gesture-handler';
import {RadioGroup} from 'react-native-radio-buttons-group';
export interface AnswerSheetObjType {
    questionNo: number;
    answer: {optionId: number};
}
export interface examPaperType {
    questionName: string;
    questionID: string;
    allQuestions: [
        {
            no: number;
            question: string;
            option: {id: number; label: string}[];
            answer: {optionId: number};
        },
    ];
}
export enum examType {
    IQ,
    Eng,
    PhyMath,
    GK,
}
interface McqExaminerModalProps {
    examPaper: examPaperType;
    typeofExam: examType;
    visibleState: boolean;
}
const McqExaminerModal: React.FC<McqExaminerModalProps> = ({examPaper, typeOfExam, visibleState}) => {
    let answerSheet = useRef<AnswerSheetObjType[]>([]);
    let [showResult, setShowResult] = useState(false);
    let [result, setResult] = useState({score: '', correct: 0, incorrect: 0, notTouched: 0});
    let [timeOfExam, setTimeOfExam] = useState(50);
    let [selectedId, setSelectedId] = useState('1');
    let [hasStarted, setHasStarted] = useState(false);
    let handleSelectTime = (id: string) => {
        console.log(id);
        if (id == '1') {
            setSelectedId('1');
            setTimeOfExam(50);
        } else if (id == '2') {
            setSelectedId('2');
            setTimeOfExam(35);
        } else if (id == '3') {
            setSelectedId('3');
            setTimeOfExam(25);
        } else {
            setSelectedId('4');
            setTimeOfExam(40);
        }
    };
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
        let {correctAns, incorrectAns} = UseCheckAns(iqSet1.allQuestions, answerSheet.current);
        console.log('incorrectAns', incorrectAns);
        let score = `${correctAns}/${examPaper.allQuestions.length}`;
        setResult({score, correct: correctAns, incorrect: incorrectAns, notTouched: examPaper.allQuestions.length - (correctAns + incorrectAns)});
        console.log(correctAns);
    };
    let handleShowResult = () => {
        setShowResult(!showResult);
    };
    return (
        <Modal visible={visibleState}>
            <View style={{height: Dimensions.get('window').height, width: Dimensions.get('window').width, backgroundColor: 'black'}}>
                <View>
                    <Text style={{color: 'white', textAlign: 'center', fontSize: 30, fontWeight: '900'}}>{examPaper.questionName}</Text>
                </View>
                <View>
                    <Text style={{fontSize: 25, color: 'white'}}>Time-{timeOfExam}</Text>
                    <RadioGroup
                        radioButtons={[
                            {id: '1', label: 'Bafa IQ (00:50:00)', color: 'white', borderColor: '#93c6d0'},
                            {id: '2', label: 'ISSB IQ (00:35:00)', color: 'white', borderColor: '#93c6d0'},
                            {id: '3', label: 'HARD (00:25:00)', color: 'white', borderColor: '#93c6d0'},
                            {id: '4', label: 'Moderate (00:40:00)', color: 'white', borderColor: '#93c6d0'},
                        ]}
                        onPress={e => handleSelectTime(e)}
                        selectedId={selectedId}
                        containerStyle={{flexWrap: 'wrap', marginTop: '1%', backgroundColor: '#363535', padding: 2, borderRadius: 5}}
                        labelStyle={{fontSize: 20, fontWeight: 'bold', color: 'white'}}
                        layout="row"
                    />
                    <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '3%'}}>
                        <TouchableOpacity style={styles.mcqSubmitBtn}>
                            <Text style={{color: 'black', fontSize: 20, fontWeight: '900'}}>Start Exam</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView>
                    <View style={styles.allMcqContainer}>
                        <FlatList
                            data={examPaper.allQuestions}
                            keyExtractor={({question}) => question}
                            renderItem={sig => {
                                return <SingleMcqShower handleAnswer={handleAnswer} questionObj={sig.item} />;
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
                    <TouchableOpacity style={styles.mcqSubmitBtn} onPress={() => handleAnswerPaperCheck()}>
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
            {result.score && <ResultCard quesName={examPaper.questionName} resultObj={result} />}
        </Modal>
    );
};

export default McqExaminerModal;

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

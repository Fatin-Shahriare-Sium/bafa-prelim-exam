/* eslint-disable react-native/no-inline-styles */
import {Dimensions, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View, Modal, ToastAndroid} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import SingleMcqShower from './singleMcqShower.tsx';
import UseCheckAns from '../hooks/useCheckAns.ts';
import ResultCard from './resultCard.tsx';
import {RadioGroup} from 'react-native-radio-buttons-group';
import BackgroundTimer from 'react-native-background-timer';
import ViewCheckedAnswerSheet from './viewCheckedAnswerSheet.tsx';
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
    IQ = 1,
    Eng = 2,
    PhyMath = 3,
    GK = 4,
}
interface McqExaminerModalProps {
    examPaper: examPaperType;
    typeofExam: examType;
    visibleState: boolean;
    handleExaminerModal: () => any;
}
const McqExaminerModal: React.FC<McqExaminerModalProps> = ({examPaper, typeofExam, visibleState, handleExaminerModal}) => {
    let [answerSheet, setAnswerSheet] = useState<AnswerSheetObjType[]>([]);
    let [showResult, setShowResult] = useState(false);
    let [result, setResult] = useState({score: '', correct: 0, incorrect: 0, notTouched: 0, totalQ: 0});
    let [timeOfExam, setTimeOfExam] = useState({min: 0, seconds: 0});
    let [remaingExamTime, setRemainingExamTime] = useState({min: 0, seconds: 0});
    let [selectedId, setSelectedId] = useState('1');
    let [hasStarted, setHasStarted] = useState(false);
    let [showAnswerSheet, setShowAnswerSheet] = useState(false);
    let intervalRef = useRef<number>();
    useEffect(() => {
        setHasStarted(false);
        setShowResult(false);
        setSelectedId('1');
        setAnswerSheet([]);
        if (typeofExam == examType.IQ) {
            setTimeOfExam({min: 50, seconds: 0});
        } else {
            setTimeOfExam({min: 30, seconds: 0});
        }
        console.log('exam tpe', typeofExam);

        setResult({score: '', correct: 0, incorrect: 0, notTouched: 0});
    }, [visibleState]);
    let handleSelectTime = (id: string) => {
        console.log(id);
        if (id == '1') {
            setSelectedId('1');
            setTimeOfExam({min: 50, seconds: 0});
        } else if (id == '2') {
            setSelectedId('2');
            setTimeOfExam({min: 35, seconds: 0});
        } else if (id == '3') {
            setSelectedId('3');
            setTimeOfExam({min: 25, seconds: 0});
        } else {
            setSelectedId('4');
            setTimeOfExam({min: 40, seconds: 0});
        }
    };
    let handleAnswer = (questionNo: number, answer: {optionId: number}) => {
        let newAns = {
            questionNo,
            answer,
        };
        setAnswerSheet([...answerSheet, newAns]);
    };
    //handle submit to check answer paper
    let handleAnswerPaperCheck = () => {
        setHasStarted(false);
        BackgroundTimer.clearInterval(intervalRef.current);
        let {correctAns, incorrectAns} = UseCheckAns(examPaper.allQuestions, answerSheet);
        console.log('incorrectAns', incorrectAns);
        let score = `${correctAns}/${examPaper.allQuestions.length}`;
        setResult({score, correct: correctAns, incorrect: incorrectAns, notTouched: examPaper.allQuestions.length - (correctAns + incorrectAns), totalQ: examPaper.allQuestions.length});
        setShowResult(true);
        console.log(correctAns);
    };
    let handleShowResult = () => {
        setShowResult(!showResult);
    };
    useEffect(() => {
        let elapsedTime = 0;
        let timeInSeconds = Math.floor(timeOfExam.min * 60) + Math.floor(timeOfExam.seconds);
        let remaingTime = 0;
        if (hasStarted == true) {
            intervalRef.current = BackgroundTimer.setInterval(() => {
                // this will be executed every 200 ms

                remaingTime = timeInSeconds - Math.floor(elapsedTime / 1000);
                elapsedTime = elapsedTime + 1000;
                if (remaingTime < 0) {
                    return handleAnswerPaperCheck();
                } else {
                    setRemainingExamTime({min: Math.floor(remaingTime / 60), seconds: Math.floor(remaingTime % 60)});
                }

                // even when app is the the background
                console.log('tic');
            }, 1000);
        }
        return () => {
            BackgroundTimer.clearInterval(intervalRef);
        };
    }, [hasStarted]);
    let startExam = () => {
        console.log('startExam ');
        setHasStarted(true);
    };
    let handleBackPress = () => {
        if (hasStarted == true) {
            ToastAndroid.show("Exam has started,you can't leave this", ToastAndroid.SHORT);
        } else {
            return handleExaminerModal();
        }
    };
    let handleOkBtnResultCard = () => {
        handleShowResult();
        handleExaminerModal();
    };
    let handleViewBtnResultCard = () => {
        handleShowResult();
        setShowAnswerSheet(true);
    };
    let handleDoneBtnInViewCheckedAnswerSheet = () => {
        handleShowResult();
        setShowAnswerSheet(false);
    };
    return (
        <Modal onRequestClose={() => handleBackPress()} visible={visibleState}>
            <View style={{height: Dimensions.get('window').height, width: Dimensions.get('window').width, backgroundColor: 'black'}}>
                <View>
                    <Text style={{color: 'white', textAlign: 'center', fontSize: 30, fontWeight: '900'}}>{examPaper.questionName}</Text>
                </View>
                <View>
                    <Text style={{fontSize: 25, color: 'white'}}>Time-{`${String(remaingExamTime.min).padStart(2, '0')}:${String(remaingExamTime.seconds).padStart(2, '0')}`}</Text>
                </View>
                {!hasStarted && (
                    <View>
                        <RadioGroup
                            radioButtons={[
                                {id: '1', label: 'Bafa IQ (00:50:00)', color: 'white', borderColor: '#93c6d0'},
                                {id: '2', label: 'ISSB IQ (00:35:00)', color: 'white', borderColor: '#93c6d0'},
                                {id: '3', label: 'HARD (00:25:00)', color: 'white', borderColor: '#93c6d0'},
                                {id: '4', label: 'Moderate (00:40:00)', color: 'white', borderColor: '#93c6d0'},
                            ]}
                            onPress={e => handleSelectTime(e)}
                            selectedId={selectedId}
                            containerStyle={{flexWrap: 'wrap', marginTop: '1%', backgroundColor: '#363535', padding: 2, borderRadius: 5, display: typeofExam == examType.IQ ? 'flex' : 'none'}}
                            labelStyle={{fontSize: 20, fontWeight: 'bold', color: 'white'}}
                            layout="row"
                        />
                        <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '3%'}}>
                            <TouchableOpacity onPress={() => startExam()} style={styles.mcqSubmitBtn}>
                                <Text style={{color: 'black', fontSize: 20, fontWeight: '900'}}>Start Exam</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
                <ScrollView>
                    <View style={styles.allMcqContainer}>
                        <FlatList
                            contentContainerStyle={{pointerEvents: hasStarted ? 'auto' : 'none'}}
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
                    {hasStarted && (
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
                    )}
                </View>
            </View>
            {showResult && <ResultCard handleViewBtn={handleViewBtnResultCard} handleOkBtn={handleOkBtnResultCard} quesName={examPaper.questionName} resultObj={result} />}
            {showAnswerSheet && <ViewCheckedAnswerSheet handleDoneBtn={handleDoneBtnInViewCheckedAnswerSheet} answerSheet={answerSheet} examPaper={examPaper} />}
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

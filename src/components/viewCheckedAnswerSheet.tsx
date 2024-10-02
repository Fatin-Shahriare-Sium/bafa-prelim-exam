/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {Dimensions, FlatList, Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AnswerSheetObjType, examPaperType} from './mcqExaminer';
import SingleCheckedMcqShower from './singleCheckedMcqShower';

const ViewCheckedAnswerSheet: React.FC<{examPaper: examPaperType; answerSheet: AnswerSheetObjType[]; handleDoneBtn: () => any}> = ({examPaper, answerSheet, handleDoneBtn}) => {
    let determineCorrectAns = SingleQues => {
        let correct = false;
        answerSheet.map((sig, index) => {
            if (sig.questionNo == SingleQues.no) {
                if (sig.answer.optionId == SingleQues.answer.optionId) {
                    correct = true;
                } else {
                    correct = false;
                }
            }
        });
        return correct;
    };
    let detemineWhatUserHadSelected = SingleQues => {
        let selectedOptionObj: AnswerSheetObjType = {
            answer: {optionId: 0},
            questionNo: 1,
        };

        answerSheet.map((sig, index) => {
            if (sig.questionNo == SingleQues.no) {
                selectedOptionObj = sig;
            }
        });
        return selectedOptionObj;
    };
    return (
        <Modal visible={true}>
            <View style={{backgroundColor: 'black', flex: 1}}>
                <FlatList
                    ListHeaderComponent={() => {
                        return (
                            <View>
                                <Text style={{color: 'white', textAlign: 'center', fontSize: 30, fontWeight: '900'}}>{examPaper.questionName}</Text>
                            </View>
                        );
                    }}
                    ListFooterComponent={() => {
                        return (
                            <TouchableOpacity onPress={() => handleDoneBtn()} style={styles.DoneBtn}>
                                <Text style={{color: 'black', fontWeight: '700', fontSize: 25, textAlign: 'center'}}>Done</Text>
                            </TouchableOpacity>
                        );
                    }}
                    ListFooterComponentStyle={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                    data={examPaper.allQuestions}
                    renderItem={sig => <SingleCheckedMcqShower userSelectedOption={detemineWhatUserHadSelected(sig.item)} questionObj={sig.item} isCorrect={determineCorrectAns(sig.item)} />}
                />
            </View>
        </Modal>
    );
};

export default ViewCheckedAnswerSheet;

const styles = StyleSheet.create({
    DoneBtn: {
        paddingVertical: 7,
        backgroundColor: '#93c6d0',
        paddingHorizontal: 30,
        borderRadius: 15,
        marginTop: '2%',
        width: '50%',
    },
});

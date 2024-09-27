/* eslint-disable react-native/no-inline-styles */
import {FlatList, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import SingleQuestionShower from '../../components/singleQuestionShower';

import IQQuestionListData from '../../data/iq/IQ.json';
import IQSet1 from '../../data/iq/ques1.json';
import IQSet2 from '../../data/iq/ques2.json';
import IQSet3 from '../../data/iq/ques3.json';
import McqExaminerModal, {examPaperType, examType} from '../../components/mcqExaminer';
const IqSectionExamLists = () => {
    let [paperForExam, setPaperForExam] = useState<examPaperType>();
    let [showModal, setShowModal] = useState(false);
    let takeExamFunc = (id: string) => {
        console.log('takeExamFunc', id);
        if (id == 'IQ Set 1') {
            setPaperForExam(IQSet1);
        } else if (id == 'IQ Set 2') {
            setPaperForExam(IQSet2);
        } else if (id === 'IQ Set 3') {
            setPaperForExam(IQSet3);
        }
        setShowModal(!showModal);
    };
    let handleMcqExaminerModal = () => {
        setShowModal(!showModal);
    };
    return (
        <View style={{backgroundColor: 'black'}}>
            <FlatList data={IQQuestionListData.allQuestions} renderItem={sig => <SingleQuestionShower questionType={examType.IQ} questionTitle={sig.item.questionName} index={sig.index} questionid={sig.item.questionID} handleTakeExam={takeExamFunc} />} />
            {showModal && <McqExaminerModal handleExaminerModal={handleMcqExaminerModal} visibleState={showModal} examPaper={paperForExam} typeofExam={examType.IQ} />}
        </View>
    );
};

export default IqSectionExamLists;

const styles = StyleSheet.create({});

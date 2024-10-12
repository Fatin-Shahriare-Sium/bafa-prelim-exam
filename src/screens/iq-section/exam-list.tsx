/* eslint-disable react-native/no-inline-styles */
import {Dimensions, FlatList, ScrollView, StyleSheet, View, Text} from 'react-native';
import React, {useState} from 'react';
import SingleQuestionShower from '../../components/singleQuestionShower';

import IQQuestionListData from '../../data/iq/IQ.json';
import IQSet1 from '../../data/iq/ques1.json';
import IQSet2 from '../../data/iq/ques2.json';
import IQSet3 from '../../data/iq/ques3.json';
import IQSet4 from '../../data/iq/ques4.json';
import IQSet5 from '../../data/iq/ques5.json';
import IQSet6 from '../../data/iq/ques6.json';
import McqExaminerModal, {examPaperType, examType} from '../../components/mcqExaminer';
import CustomCautionBox from '../../components/customCautionBox';
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
        } else if (id === 'IQ Set 4') {
            setPaperForExam(IQSet4);
        } else if (id === 'IQ Set 5') {
            setPaperForExam(IQSet5);
        } else if (id === 'IQ Set 6') {
            setPaperForExam(IQSet6);
        }
        setShowModal(!showModal);
    };
    let handleMcqExaminerModal = () => {
        setShowModal(!showModal);
    };
    return (
        <View style={styles.examListContainer}>
            <ScrollView>
                <Text style={{textAlign: 'center', fontSize: 30, color: 'white', fontWeight: '700', margin: 9}}>📝 Take IQ Exam</Text>
                <FlatList ListFooterComponent={<CustomCautionBox />} data={IQQuestionListData.allQuestions} renderItem={sig => <SingleQuestionShower questionType={examType.IQ} questionTitle={sig.item.questionName} index={sig.index} questionid={sig.item.questionID} handleTakeExam={takeExamFunc} />} />

                {showModal && <McqExaminerModal handleExaminerModal={handleMcqExaminerModal} visibleState={showModal} examPaper={paperForExam} typeofExam={examType.IQ} />}
            </ScrollView>
        </View>
    );
};

export default IqSectionExamLists;

const styles = StyleSheet.create({
    examListContainer: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'black',
        height: Dimensions.get('window').height * 0.78,
    },
});

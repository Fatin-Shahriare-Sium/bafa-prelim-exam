/* eslint-disable react-native/no-inline-styles */
import {Dimensions, FlatList, ScrollView, StyleSheet, View, Text} from 'react-native';
import React, {useState} from 'react';
import SingleQuestionShower from '../../components/singleQuestionShower';

import PMQuestionListData from '../../data/pm/pm.json';
import PMSet1 from '../../data/pm/ques1.json';
import PMSet2 from '../../data/pm/ques2.json';
import PMSet3 from '../../data/pm/ques3.json';
import McqExaminerModal, {examPaperType, examType} from '../../components/mcqExaminer';
import CustomCautionBox from '../../components/customCautionBox';
const PMSectionExamLists = () => {
    let [paperForExam, setPaperForExam] = useState<examPaperType>();
    let [showModal, setShowModal] = useState(false);
    let takeExamFunc = (id: string) => {
        console.log('takeExamFunc', id);
        if (id == 'PM Set 1') {
            setPaperForExam(PMSet1);
        } else if (id == 'PM Set 2') {
            setPaperForExam(PMSet2);
        } else if (id === 'PM Set 3') {
            setPaperForExam(PMSet3);
        }
        setShowModal(!showModal);
    };
    let handleMcqExaminerModal = () => {
        setShowModal(!showModal);
    };
    return (
        <ScrollView>
            <View style={styles.examListContainer}>
                <Text style={{textAlign: 'center', fontSize: 30, color: 'white', fontWeight: '700', margin: 9}}>📝 Take PhyMath Exam</Text>
                <FlatList ListFooterComponent={<CustomCautionBox />} data={PMQuestionListData.allQuestions} renderItem={sig => <SingleQuestionShower questionType={examType.PhyMath} questionTitle={sig.item.questionName} index={sig.index} questionid={sig.item.questionID} handleTakeExam={takeExamFunc} />} />

                {showModal && <McqExaminerModal handleExaminerModal={handleMcqExaminerModal} visibleState={showModal} examPaper={paperForExam} typeofExam={examType.PhyMath} />}
            </View>
        </ScrollView>
    );
};

export default PMSectionExamLists;

const styles = StyleSheet.create({
    examListContainer: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'black',
        height: Dimensions.get('window').height * 0.9,
    },
});

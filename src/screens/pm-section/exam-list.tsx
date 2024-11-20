/* eslint-disable react-native/no-inline-styles */
import {Dimensions, FlatList, ScrollView, StyleSheet, View, Text} from 'react-native';
import React, {useState} from 'react';
import SingleQuestionShower from '../../components/singleQuestionShower';

import PMQuestionListData from '../../data/pm/pm.json';
import PMSet1 from '../../data/pm/ques1.json';
import PMSet2 from '../../data/pm/ques2.json';
import PMSet3 from '../../data/pm/ques3.json';
import PMSet4 from '../../data/pm/ques4.json';
import PMSet5 from '../../data/pm/ques5.json';
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
        } else if (id === 'PM Set 4') {
            setPaperForExam(PMSet4);
        } else if (id === 'PM Set 5') {
            setPaperForExam(PMSet5);
        }
        setShowModal(!showModal);
    };
    let handleMcqExaminerModal = () => {
        setShowModal(!showModal);
    };
    return (
        <View style={styles.examListContainer}>
            <ScrollView>
                <Text style={{textAlign: 'center', fontSize: 30, color: 'white', fontWeight: '700', margin: 9}}>📝 Take PhyMath Exam</Text>
                <FlatList ListFooterComponent={<CustomCautionBox />} data={PMQuestionListData.allQuestions} renderItem={sig => <SingleQuestionShower questionType={examType.PhyMath} questionTitle={sig.item.questionName} index={sig.index} questionid={sig.item.questionID} handleTakeExam={takeExamFunc} />} />

                {showModal && <McqExaminerModal handleExaminerModal={handleMcqExaminerModal} visibleState={showModal} examPaper={paperForExam} typeofExam={examType.PhyMath} />}
            </ScrollView>
        </View>
    );
};

export default PMSectionExamLists;

const styles = StyleSheet.create({
    examListContainer: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'black',
        height: Dimensions.get('window').height * 0.78,
    },
});

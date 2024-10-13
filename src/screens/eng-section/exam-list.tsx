/* eslint-disable react-native/no-inline-styles */
import {Dimensions, FlatList, ScrollView, StyleSheet, View, Text} from 'react-native';
import React, {useState} from 'react';
import SingleQuestionShower from '../../components/singleQuestionShower';

import EngQuestionListData from '../../data/eng/eng.json';
import EngSet1 from '../../data/eng/ques1.json';
import EngSet2 from '../../data/eng/ques2.json';
import EngSet3 from '../../data/eng/ques3.json';
import EngSet4 from '../../data/eng/ques4.json';
import EngSet5 from '../../data/eng/ques5.json';
import McqExaminerModal, {examPaperType, examType} from '../../components/mcqExaminer';
import CustomCautionBox from '../../components/customCautionBox';
const EngSectionExamLists = () => {
    let [paperForExam, setPaperForExam] = useState<examPaperType>();
    let [showModal, setShowModal] = useState(false);
    let takeExamFunc = (id: string) => {
        console.log('takeExamFunc', id);
        if (id == 'Eng Set 1') {
            setPaperForExam(EngSet1);
        } else if (id == 'Eng Set 2') {
            setPaperForExam(EngSet2);
        } else if (id === 'Eng Set 3') {
            setPaperForExam(EngSet3);
        } else if (id === 'Eng Set 4') {
            setPaperForExam(EngSet4);
        } else if (id === 'Eng Set 5') {
            setPaperForExam(EngSet5);
        }
        setShowModal(!showModal);
    };
    let handleMcqExaminerModal = () => {
        setShowModal(!showModal);
    };
    return (
        <View style={styles.examListContainer}>
            <ScrollView>
                <Text style={{textAlign: 'center', fontSize: 30, color: 'white', fontWeight: '700', margin: 9}}>📝 Take English Exam</Text>
                <FlatList ListFooterComponent={<CustomCautionBox />} data={EngQuestionListData.allQuestions} renderItem={sig => <SingleQuestionShower questionType={examType.Eng} questionTitle={sig.item.questionName} index={sig.index} questionid={sig.item.questionID} handleTakeExam={takeExamFunc} />} />

                {showModal && <McqExaminerModal handleExaminerModal={handleMcqExaminerModal} visibleState={showModal} examPaper={paperForExam} typeofExam={examType.Eng} />}
            </ScrollView>
        </View>
    );
};

export default EngSectionExamLists;

const styles = StyleSheet.create({
    examListContainer: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'black',
        height: Dimensions.get('window').height * 0.78,
    },
});

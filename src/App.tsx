import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import iqOneData from "./data/iq/ques1.json";
import McqExaminer from "./components/mcqExaminer.tsx"
const App = () => {
  console.log(iqOneData.allQuestions[0].no);
  
  return (
    <SafeAreaView>
        <View style={styles.appContainer}>
        <McqExaminer/>
        </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  appContainer:{
    display:"flex"
  }
});
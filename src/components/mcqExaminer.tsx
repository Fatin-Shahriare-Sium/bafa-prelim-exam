import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useMemo, useRef } from 'react';
import iqSet1 from "../data/iq/ques1.json";
import SingleMcqShower from "./singleMcqShower.tsx"
export interface AnswerSheetObjType{
    questionNo:number,
    answer:{optionId:number}
}
const McqExaminer = () => {
   let answerSheet = useRef<AnswerSheetObjType[]>([]);
   let handleAnswer=(questionNo:number,answer:{optionId:number})=>{
    let preSheet = answerSheet.current;
    let newAns={
        questionNo,
        answer,
    };
    preSheet.push(newAns);
    answerSheet.current = preSheet;
   };
   useEffect(()=>{
    console.log("answershhet",answerSheet.current);
    
   },[answerSheet.current])
  return (
    <View>
      <Text>McqExaminer</Text>
        <View>
            <FlatList
            data={iqSet1.allQuestions}
            keyExtractor={({question})=>question}
            renderItem={(sig)=>{
                return(
                    <SingleMcqShower handleAnswer={handleAnswer} questionObj={sig.item}/>
                );
            }}
            />

            
           <TouchableOpacity onPress={()=>console.log(answerSheet.current)
           }>
            <Text>GET</Text>
           </TouchableOpacity>
        </View>
    </View>
  );
};

export default McqExaminer;

const styles = StyleSheet.create({});
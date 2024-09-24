import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import RadioGroup,{RadioButtonProps} from 'react-native-radio-buttons-group';
interface SingleMcqShowerProps{
    questionObj:{
        no:number,
        question:string,
        option:{id:number,label:string}[],
        answer:{optionId:number}
    },
    handleAnswer:(questionNo:number,answer:{optionId:number})=>any
}
const SingleMcqShower:React.FC<SingleMcqShowerProps> = ({questionObj,handleAnswer}) => {
  let [selectedId,setSelectedId]=useState("");
    return (
    <View>
      <Text style={{fontSize:25,fontWeight:"700",color:"black"}}>{questionObj.question}</Text>
      <RadioGroup 
            radioButtons={[{...questionObj.option[0],color:"black",borderColor:"green"},{...questionObj.option[1],color:"black",borderColor:"green"},{...questionObj.option[2],color:"black",borderColor:"green"},{...questionObj.option[3],color:"black",borderColor:"green"}]} 
            onPress={(e)=>{
                handleAnswer(questionObj.no,{optionId:Number(e)})
                return setSelectedId(e);
            }}
            containerStyle={{pointerEvents:selectedId?"none":"auto"}}
            labelStyle={{fontSize:20,fontWeight:"bold",color:"black"}}
            selectedId={selectedId}
            layout='row'
        />
    </View>
  );
};

export default SingleMcqShower;

const styles = StyleSheet.create({});
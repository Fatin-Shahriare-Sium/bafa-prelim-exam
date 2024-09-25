/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import RadioGroup from 'react-native-radio-buttons-group';
interface SingleMcqShowerProps {
    questionObj: {
        no: number;
        question: string;
        option: {id: number; label: string}[];
        answer: {optionId: number};
    };
    handleAnswer: (questionNo: number, answer: {optionId: number}) => any;
}
const SingleMcqShower: React.FC<SingleMcqShowerProps> = ({
    questionObj,
    handleAnswer,
}) => {
    let [selectedId, setSelectedId] = useState('');
    return (
        <View style={{margin: '2%'}}>
            <Text style={{fontSize: 25, fontWeight: '700', color: '#e1dede'}}>
                {`${questionObj.no}.${questionObj.question}`}
            </Text>
            <RadioGroup
                radioButtons={[
                    {
                        ...questionObj.option[0],
                        color: 'white',
                        borderColor: '#93c6d0',
                    },
                    {
                        ...questionObj.option[1],
                        color: 'white',
                        borderColor: '#93c6d0',
                    },
                    {
                        ...questionObj.option[2],
                        color: 'white',
                        borderColor: '#93c6d0',
                    },
                    {
                        ...questionObj.option[3],
                        color: 'white',
                        borderColor: '#93c6d0',
                    },
                ]}
                onPress={e => {
                    handleAnswer(questionObj.no, {optionId: Number(e)});
                    return setSelectedId(e);
                }}
                containerStyle={{
                    pointerEvents: selectedId ? 'none' : 'auto',
                    flexWrap: 'wrap',
                    marginTop: '1%',
                    backgroundColor: '#363535',
                    padding: 2,
                    borderRadius: 5,
                }}
                labelStyle={{fontSize: 20, fontWeight: 'bold', color: 'white'}}
                selectedId={selectedId}
                layout="row"
            />
        </View>
    );
};

export default SingleMcqShower;

const styles = StyleSheet.create({});

import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tips from './tips';
import IqSyllabus from './syllabus';
import IqSectionExamLists from './exam-list';
const IqSection = () => {
    let IQTab = createBottomTabNavigator();
    return (
        <View style={{height: Dimensions.get('window').height * 0.9}}>
            <IQTab.Navigator initialRouteName="iq-exam-lists">
                <IQTab.Screen
                    options={{headerShown: false}}
                    name="IqSection-tips"
                    component={Tips}
                />
                <IQTab.Screen
                    options={{headerShown: false}}
                    name="iq-exam-lists"
                    component={IqSectionExamLists}
                />
                <IQTab.Screen
                    options={{headerShown: false}}
                    name="IqSection-syllabus"
                    component={IqSyllabus}
                />
            </IQTab.Navigator>
        </View>
    );
};

export default IqSection;

const styles = StyleSheet.create({});

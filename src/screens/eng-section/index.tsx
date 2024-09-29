/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */

import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BottomTabBar, createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import EngSyllabus from './syllabus';
import EngTips from './tips';
import EngSectionExamLists from './exam-list';
import ExamIocn from '../../assets/exam-icon.png';
import TipIcon from '../../assets/tip-icon.png';
import SyllaIcon from '../../assets/sylla-icon.png';
import CustomTab from '../../components/customTab';
const EngSection = () => {
    let EngSectionTab = createBottomTabNavigator();
    return (
        <EngSectionTab.Navigator
            tabBar={props => {
                return (
                    <View style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height * 0.15, backgroundColor: 'black', display: 'flex', alignItems: 'center', borderTopColor: '#121111'}}>
                        <BottomTabBar {...props} />
                    </View>
                );
            }}
            screenOptions={{tabBarStyle: {backgroundColor: '#121111', width: '90%', borderRadius: 20, height: '70%', borderTopColor: '#121111', marginTop: '.777%'}, tabBarShowLabel: false, headerShown: false}}>
            <EngSectionTab.Screen
                options={{
                    tabBarIcon: ({focused}) => {
                        return <CustomTab tabNmae="Exam" icon={ExamIocn} active={focused} />;
                    },
                }}
                name="eng-exam"
                component={EngSectionExamLists}
            />

            <EngSectionTab.Screen
                options={{
                    tabBarIcon: ({focused}) => {
                        return <CustomTab tabNmae="Tips" icon={TipIcon} active={focused} />;
                    },
                }}
                name="eng-tips"
                component={EngTips}
            />
            <EngSectionTab.Screen
                options={{
                    tabBarIcon: ({focused}) => {
                        return <CustomTab tabNmae="Syllabus" icon={SyllaIcon} active={focused} />;
                    },
                }}
                name="eng-syllabus"
                component={EngSyllabus}
            />
        </EngSectionTab.Navigator>
    );
};

export default EngSection;

const styles = StyleSheet.create({});

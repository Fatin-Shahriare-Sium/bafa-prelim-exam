/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BottomTabBar, createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PmTips from './tips';
import PmSyllabus from './syllabus';
import ExamIocn from '../../assets/exam-icon.png';
import TipIcon from '../../assets/tip-icon.png';
import SyllaIcon from '../../assets/sylla-icon.png';
import CustomTab from '../../components/customTab';
import PMSectionExamLists from './exam-list';
const PmSection = () => {
    let PMSectionTab = createBottomTabNavigator();
    return (
        <PMSectionTab.Navigator
            tabBar={props => {
                return (
                    <View style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height * 0.15, backgroundColor: 'black', display: 'flex', alignItems: 'center', borderTopColor: '#121111'}}>
                        <BottomTabBar {...props} />
                    </View>
                );
            }}
            screenOptions={{tabBarStyle: {backgroundColor: '#121111', width: '90%', borderRadius: 20, height: '70%', borderTopColor: '#121111', marginTop: '.777%'}, tabBarShowLabel: false, headerShown: false}}>
            <PMSectionTab.Screen
                options={{
                    tabBarIcon: ({focused}) => {
                        return <CustomTab tabNmae="Exam" icon={ExamIocn} active={focused} />;
                    },
                }}
                name="pm-exam"
                component={PMSectionExamLists}
            />
            <PMSectionTab.Screen
                options={{
                    tabBarIcon: ({focused}) => {
                        return <CustomTab tabNmae="Tips" icon={TipIcon} active={focused} />;
                    },
                }}
                name="pm-tips"
                component={PmTips}
            />
            <PMSectionTab.Screen
                options={{
                    tabBarIcon: ({focused}) => {
                        return <CustomTab tabNmae="Syllabus" icon={SyllaIcon} active={focused} />;
                    },
                }}
                name="pm-syllabus"
                component={PmSyllabus}
            />
        </PMSectionTab.Navigator>
    );
};

export default PmSection;

const styles = StyleSheet.create({});

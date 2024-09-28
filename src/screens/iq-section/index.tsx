/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {Dimensions, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {BottomTabBar, createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IqSyllabus from './syllabus';
import IqSectionExamLists from './exam-list';
import IQTips from './tips';
import ExamIocn from '../../assets/exam-icon.png';
import TipIcon from '../../assets/tip-icon.png';
import SyllaIcon from '../../assets/sylla-icon.png';
import CustomTab from '../../components/customTab';
const IqSection = () => {
    let IQTab = createBottomTabNavigator();
    return (
        <View style={{height: Dimensions.get('window').height * 0.95}}>
            <IQTab.Navigator
                tabBar={props => {
                    return (
                        <View style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height * 0.1, backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', borderTopColor: '#121111'}}>
                            <BottomTabBar {...props} />
                        </View>
                    );
                }}
                screenOptions={{tabBarStyle: {backgroundColor: '#121111', width: '90%', borderRadius: 20, height: '90%', borderTopColor: '#121111'}, tabBarShowLabel: false}}
                initialRouteName="iq-exam-lists">
                <IQTab.Screen
                    options={{
                        headerShown: false,
                        tabBarIcon: ({focused}) => {
                            return <CustomTab tabNmae="exam" icon={ExamIocn} active={focused} />;
                        },
                    }}
                    name="iq-exam-lists"
                    component={IqSectionExamLists}
                />
                <IQTab.Screen
                    options={{
                        headerShown: false,
                        tabBarIcon: ({focused}) => {
                            return <CustomTab tabNmae="Tips" icon={TipIcon} active={focused} />;
                        },
                    }}
                    name="IqSection-tips"
                    component={IQTips}
                />
                <IQTab.Screen
                    options={{
                        headerShown: false,
                        tabBarIcon: ({focused}) => {
                            return <CustomTab tabNmae="Syllabus" icon={SyllaIcon} active={focused} />;
                        },
                    }}
                    name="IqSection-syllabus"
                    component={IqSyllabus}
                />
            </IQTab.Navigator>
        </View>
    );
};

export default IqSection;

const styles = StyleSheet.create({});

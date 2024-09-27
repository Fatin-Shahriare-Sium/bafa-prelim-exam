/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BottomTabBar, createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IqSyllabus from './syllabus';
import IqSectionExamLists from './exam-list';
import IQTips from './tips';
const IqSection = () => {
    let IQTab = createBottomTabNavigator();
    return (
        <View style={{height: Dimensions.get('window').height * 0.93}}>
            <IQTab.Navigator
                tabBar={props => {
                    return (
                        <View style={{width: Dimensions.get('window').width, backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', borderTopColor: '#121111', padding: 10}}>
                            <BottomTabBar {...props} />
                        </View>
                    );
                }}
                screenOptions={{tabBarStyle: {backgroundColor: '#121111', width: '90%', borderRadius: 7, bottom: '10%'}}}
                initialRouteName="iq-exam-lists">
                <IQTab.Screen options={{headerShown: false}} name="iq-exam-lists" component={IqSectionExamLists} />
                <IQTab.Screen options={{headerShown: false}} name="IqSection-tips" component={IQTips} />
                <IQTab.Screen options={{headerShown: false}} name="IqSection-syllabus" component={IqSyllabus} />
            </IQTab.Navigator>
        </View>
    );
};

export default IqSection;

const styles = StyleSheet.create({});

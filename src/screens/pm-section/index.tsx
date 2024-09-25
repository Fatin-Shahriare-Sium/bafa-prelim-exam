import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PmTips from './tips';
import PmSyllabus from './syllabus';
const PmSection = () => {
    let PMSectionTab = createBottomTabNavigator();
    return (
        <View>
            <PMSectionTab.Navigator>
                <PMSectionTab.Screen name="pm-tips" component={PmTips} />
                <PMSectionTab.Screen
                    name="pm-syllabus"
                    component={PmSyllabus}
                />
            </PMSectionTab.Navigator>
        </View>
    );
};

export default PmSection;

const styles = StyleSheet.create({});

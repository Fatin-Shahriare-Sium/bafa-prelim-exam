import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import EngSyllabus from './syllabus';
import EngTips from './tips';
const EngSection = () => {
    let EngSectionTab = createBottomTabNavigator();
    return (
        <View>
            <EngSectionTab.Navigator>
                <EngSectionTab.Screen
                    name="eng-syllabus"
                    component={EngSyllabus}
                />
                <EngSectionTab.Screen name="eng-tips" component={EngTips} />
            </EngSectionTab.Navigator>
        </View>
    );
};

export default EngSection;

const styles = StyleSheet.create({});

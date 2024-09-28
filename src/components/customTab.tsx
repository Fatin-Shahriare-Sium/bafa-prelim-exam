/* eslint-disable react-native/no-inline-styles */
import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CustomTab: React.FC<{icon: ImageSourcePropType; tabNmae: string; active: boolean}> = ({icon, tabNmae, active}) => {
    return (
        <View style={{...styles.customTabContainer, backgroundColor: active ? '#bec9c9' : '#121111'}}>
            <Image style={{width: 30, height: 30}} source={icon} />
            <Text style={{fontSize: 15, color: active ? 'black' : 'white', opacity: 1, fontWeight: '700'}}>{tabNmae}</Text>
        </View>
    );
};

export default CustomTab;

const styles = StyleSheet.create({
    customTabContainer: {
        paddingHorizontal: 15,
        paddingVertical: 7,
        display: 'flex',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

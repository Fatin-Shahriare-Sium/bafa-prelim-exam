import {Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
const CustomHomeTab: React.FC<{tabName: string; icon: ImageSourcePropType; hrefHandle: () => any}> = ({tabName, icon, hrefHandle}) => {
    return (
        <TouchableOpacity onPress={() => hrefHandle()} style={styles.customHomeTab}>
            <Image style={{width: 30, height: 30}} source={icon} />
            <Text numberOfLines={1} adjustsFontSizeToFit={true} style={{color: 'white'}}>
                {tabName}
            </Text>
        </TouchableOpacity>
    );
};

export default CustomHomeTab;

const styles = StyleSheet.create({
    customHomeTab: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '20%',
        margin: '2%',
        padding: 5,
        backgroundColor: '#121111',
    },
});

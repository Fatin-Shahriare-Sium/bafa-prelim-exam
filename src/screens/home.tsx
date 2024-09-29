/* eslint-disable react-native/no-inline-styles */
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BafaPic from '../assets/bafa.png';
import PhyIcon from '../assets/phy-icon.png';
import EngIcon from '../assets/eng-icon.png';
import IQIcon from '../assets/iq-icon.png';
import CustomHomeTab from '../components/customHomeTab';
const Home = ({navigation}) => {
    return (
        <View style={styles.homeWrapper}>
            <View style={{width: Dimensions.get('window').width * 0.9, marginTop: '10%'}}>
                <Text style={{color: 'white', fontSize: 30, textAlign: 'center'}}>Let's crack</Text>
                <Text style={{color: '#93c6d0', fontWeight: '900', textAlign: 'center', fontSize: 30, letterSpacing: 2}}>BAFA</Text>
                <Text style={{color: 'white', fontSize: 30, textAlign: 'center'}}>Preliminary Exam.</Text>
                <View>
                    <Image style={{height: Dimensions.get('window').height * 0.3, width: Dimensions.get('window').width * 0.9}} resizeMode="contain" source={BafaPic} />
                </View>
                <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: '10%'}}>
                    <CustomHomeTab tabName="IQ" icon={IQIcon} hrefHandle={() => navigation.navigate('IQ Section')} />
                    <CustomHomeTab tabName="English" icon={EngIcon} hrefHandle={() => navigation.navigate('Eng Section')} />
                    <CustomHomeTab tabName="PhyMath" icon={PhyIcon} hrefHandle={() => navigation.navigate('PhyMath Section')} />
                    <CustomHomeTab tabName="GK" icon={PhyIcon} hrefHandle={() => navigation.navigate('Home')} />
                </View>
                <View style={{marginTop: '10%'}}>
                    <Text style={{color: '#93c6d0', fontWeight: '900', textAlign: 'center', fontSize: 30, letterSpacing: 2}}>Free shall we keep the sky of Bangladesh ✈️</Text>
                </View>
            </View>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    homeWrapper: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: 'black',
        display: 'flex',
        alignItems: 'center',
    },
});

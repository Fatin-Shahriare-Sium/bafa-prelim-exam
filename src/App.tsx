/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View} from 'react-native';
import React, {useEffect} from 'react';
import iqOneData from './data/iq/ques1.json';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './screens/home.tsx';
import Details from './screens/details.tsx';
import IqSection from './screens/iq-section/index.tsx';
import EngSection from './screens/eng-section/index.tsx';
import PmSection from './screens/pm-section/index.tsx';
import MenuIcon from './assets/menu-icon.png';
import HomeIcon from './assets/home-icon.png';
import PhyIcon from './assets/phy-icon.png';
import EngIcon from './assets/eng-icon.png';
import IQIcon from './assets/iq-icon.png';
import InfoIcon from './assets/info.png';
import SplashScreen from 'react-native-splash-screen';
const App = () => {
    const Drawer = createDrawerNavigator();
    let {height, width} = useWindowDimensions();
    console.log(height, width);
    console.log(iqOneData.allQuestions[0].no);
    useEffect(() => {
        SplashScreen.hide();
    }, []);
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
            <View
                style={{
                    height: Dimensions.get('window').height,
                    width: Dimensions.get('window').width,
                    backgroundColor: 'black',
                }}>
                <NavigationContainer>
                    <Drawer.Navigator
                        screenOptions={{
                            header: ({navigation}) => {
                                return (
                                    <View style={{backgroundColor: 'black', padding: 5, height: Dimensions.get('window').height * 0.07}}>
                                        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                                            <Image style={{width: 25, height: 25, marginLeft: '2.5%', marginTop: '1%'}} source={MenuIcon} />
                                        </TouchableOpacity>
                                    </View>
                                );
                            },
                            drawerStyle: {backgroundColor: 'black'},
                            drawerInactiveTintColor: 'white',
                            drawerActiveBackgroundColor: '#121111',
                        }}
                        initialRouteName="Home">
                        <Drawer.Screen
                            options={{
                                headerShown: true,
                                drawerIcon: () => {
                                    return <Image source={HomeIcon} />;
                                },
                            }}
                            name="Home">
                            {props => <Home {...props} />}
                        </Drawer.Screen>
                        <Drawer.Screen
                            options={{
                                headerShown: true,
                                drawerIcon: () => {
                                    return <Image style={{width: 30, height: 30}} source={IQIcon} />;
                                },
                            }}
                            name="IQ Section"
                            component={IqSection}
                        />
                        <Drawer.Screen
                            options={{
                                headerShown: true,
                                drawerIcon: () => {
                                    return <Image source={EngIcon} />;
                                },
                            }}
                            name="Eng Section"
                            component={EngSection}
                        />
                        <Drawer.Screen
                            options={{
                                headerShown: true,
                                drawerIcon: () => {
                                    return <Image source={PhyIcon} />;
                                },
                            }}
                            name="PhyMath Section"
                            component={PmSection}
                        />
                        <Drawer.Screen
                            options={{
                                headerShown: true,
                                drawerIcon: () => {
                                    return <Image source={InfoIcon} />;
                                },
                            }}
                            name="About"
                            component={Details}
                        />
                    </Drawer.Navigator>
                </NavigationContainer>
            </View>
        </SafeAreaView>
    );
};

export default App;

const styles = StyleSheet.create({});

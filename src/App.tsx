import {Dimensions, SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import iqOneData from './data/iq/ques1.json';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './screens/home.tsx';
import Details from './screens/details.tsx';
import IqSection from './screens/iq-section/index.tsx';
import EngSection from './screens/eng-section/index.tsx';
import PmSection from './screens/pm-section/index.tsx';
const App = () => {
    const Drawer = createDrawerNavigator();
    console.log(iqOneData.allQuestions[0].no);
    return (
        <SafeAreaView>
            <View
                style={{
                    height: Dimensions.get('window').height,
                    width: Dimensions.get('window').width,
                }}>
                <NavigationContainer>
                    <Drawer.Navigator initialRouteName="Home">
                        <Drawer.Screen
                            options={{
                                headerShown: true,
                                headerTitle: 'hoddme',
                                headerTitleStyle: {display: 'none'},
                            }}
                            name="Home">
                            {props => <Home {...props} />}
                        </Drawer.Screen>
                        <Drawer.Screen name="Detail" component={Details} />
                        <Drawer.Screen name="IqSec" component={IqSection} />
                        <Drawer.Screen
                            name="Eng Section"
                            component={EngSection}
                        />
                        <Drawer.Screen
                            name="PhyMath Section"
                            component={PmSection}
                        />
                    </Drawer.Navigator>
                </NavigationContainer>
            </View>
        </SafeAreaView>
    );
};

export default App;

const styles = StyleSheet.create({
    appContainer: {
        display: 'flex',
    },
});

/* eslint-disable react-native/no-inline-styles */
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SingleSyllabus from '../../components/singleSyllabus';

const IqSyllabus = () => {
    return (
        <View style={styles.iqSyllabusWrapper}>
            <Text style={{textAlign: 'center', fontSize: 30, color: 'white', fontWeight: '700', margin: 9}}>🎯 IQ Topics</Text>
            <SingleSyllabus text="1.🔢 Number Series IQ" />
            <SingleSyllabus text="2. 🔢 Number Analogy" />
            <SingleSyllabus text="3. 🔠 Alphabetical Quibble" />
            <SingleSyllabus text="4. 💡 Analogical IQ" />
            <SingleSyllabus text="5. 🧩 Analogus Pair" />
            <SingleSyllabus text="6. 👨‍💻 Coding and decoding IQ" />
            <SingleSyllabus text="7. ⚙️ Letter to Number Coding IQ" />
            <SingleSyllabus text="8. 🧭 Direction and Distance IQ" />
            <SingleSyllabus text="9. ✨ Date and calender related IQ" />
            <SingleSyllabus text="10. 👨‍👩‍👧‍👦 Blood And Family related IQ" />
        </View>
    );
};

export default IqSyllabus;

const styles = StyleSheet.create({
    iqSyllabusWrapper: {
        backgroundColor: 'black',
        display: 'flex',
        alignItems: 'center',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    },
});

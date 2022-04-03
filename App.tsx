/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import { RootSiblingParent } from 'react-native-root-siblings';

import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import MainStackNavigation from "./src/StackNavigation/StackNavigation";
import {requestCameraPermission} from "./src/utils";

const App = () => {
    const isDarkMode = useColorScheme() === 'dark';
    useEffect(()=>{
        requestCameraPermission();
    },[]);
    return (
        <RootSiblingParent>
            <MainStackNavigation/>
        </RootSiblingParent>

    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default App;

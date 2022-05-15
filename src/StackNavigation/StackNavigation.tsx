import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import {RouteName} from "./route.constants";
import NotificationScreen from "../screens/NotificationScreen/NotificationScreen";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";

const Stack = createNativeStackNavigator();

const MainStackNavigation = () => {
    console.log('MainStackNavigation');
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={RouteName.HomeScreen}>
                <Stack.Screen name={RouteName.HomeScreen} component={HomeScreen} key={RouteName.HomeScreen}/>
                <Stack.Screen name={RouteName.NotificationScreen} component={NotificationScreen} key={RouteName.NotificationScreen}/>
                <Stack.Screen name={RouteName.ProfileScreen} component={ProfileScreen} key={RouteName.ProfileScreen}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainStackNavigation;

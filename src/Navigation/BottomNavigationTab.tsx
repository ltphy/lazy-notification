import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import ActivityScreen from "../screens/ActivityScreen/ActivityScreen";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
import PaymentScreen from "../screens/PaymentScreen/PaymentScreen";
import React from "react";
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const BottomNavigationTabs = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen}/>
                <Tab.Screen name="ActivityScreen" component={ActivityScreen}/>
                <Tab.Screen name="ProfileScreen" component={ProfileScreen}/>
                <Tab.Screen name="Payment" component={PaymentScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
};
export default BottomNavigationTabs;
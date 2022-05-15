import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import ActivityScreen from "../screens/ActivityScreen/ActivityScreen";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
import PaymentScreen from "../screens/PaymentScreen/PaymentScreen";
import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import bottomNavigationTabsStyles from "./BottomNavigationTab.styles";

const Tab = createBottomTabNavigator();

const BottomNavigationTabs = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                tabBarActiveTintColor: '#ed7907',
                tabBarStyle:bottomNavigationTabsStyles.tabBar,
                tabBarLabelStyle: bottomNavigationTabsStyles.tabBarLabel,

            }}>
                <Tab.Screen name="Home" component={HomeScreen} options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="home" color={color} size={size}/>),
                }}

                />
                <Tab.Screen name="ActivityScreen" component={ActivityScreen} options={{
                    tabBarLabel: 'Activity',
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="script-text" color={color} size={size}/>),
                    tabBarBadge: 2,
                }}/>
                <Tab.Screen name="Payment" component={PaymentScreen} options={{
                    tabBarLabel: 'Payment',
                    tabBarIcon: ({color, size}) => (<MaterialIcons name="payment" color={color} size={size}/>),
                }}/>
                <Tab.Screen name="ProfileScreen" component={ProfileScreen} options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="account-circle-outline" color={color} size={size}/>),
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
};
export default BottomNavigationTabs;
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import ActivityScreen from "../screens/ActivityScreen/ActivityScreen";
import PaymentScreen from "../screens/PaymentScreen/PaymentScreen";
import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import bottomNavigationTabsStyles from "./BottomNavigationTab.styles";
import {Text} from 'react-native';
import HistoryStackNavigation from "./HistoryStackNavigation/HistoryStackNavigation";
import {MainRouteName} from "./MainRoute.constants";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";

const Tab = createBottomTabNavigator();

const BottomNavigationTabs = () => {
    return (
        <Tab.Navigator screenOptions={({route}) => ({
            tabBarActiveTintColor: '#ed7907',
            tabBarStyle: bottomNavigationTabsStyles.tabBar,
            tabBarLabelStyle: bottomNavigationTabsStyles.tabBarLabel,
            tabBarLabel: ({position, focused}) =>
                focused ? (<Text style={{fontWeight: 'bold'}}>{route.name}</Text>) :
                    (<Text style={{fontWeight: 'normal', fontSize: 10}}>{route.name}</Text>),
        })}>
            <Tab.Screen name={"HomeSCEEN"} component={HomeScreen} options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="home" color={color} size={size}/>),
            }}

            />
            <Tab.Screen name={MainRouteName.ActivityScreen} component={ActivityScreen} options={{
                tabBarLabel: 'Activity',
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="script-text" color={color} size={size}/>),
                tabBarBadge: 2,
            }}/>
            <Tab.Screen name={MainRouteName.PaymentScreen} component={PaymentScreen} options={{
                tabBarLabel: 'Payment',
                tabBarIcon: ({color, size}) => (<MaterialIcons name="payment" color={color} size={size}/>),
            }}/>
            <Tab.Screen name={MainRouteName.ProfileScreen} component={ProfileScreen} options={{
                tabBarLabel: 'Profile',
                headerShown: false,
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="account-circle-outline" color={color} size={size}/>),
            }}/>
        </Tab.Navigator>
    );
};
export default BottomNavigationTabs;
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from "../../screens/HomeScreen/HomeScreen";
import {MainRouteName} from "../MainRoute.constants";
import PaymentScreen from "../../screens/PaymentScreen/PaymentScreen";
import ProfileScreen from "../../screens/ProfileScreen/ProfileScreen";
import {HistoryRoute} from "./HistoryRoute.constants";
import ChallengeScreen from "../../screens/ProfileScreen/screens/ChallengeScreen/ChallengeScreen";
import RewardScreen from "../../screens/ProfileScreen/screens/RewardScreen/RewardScreen";
import SubscriptionScreen from "../../screens/ProfileScreen/screens/SupscriptionScreen/SupscriptionScreen";

const Stack = createNativeStackNavigator();

const HistoryStackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={HistoryRoute.ChallengeScreen} component={ChallengeScreen}
                          key={HistoryRoute.ChallengeScreen}/>
            <Stack.Screen name={HistoryRoute.RewardScreen} component={RewardScreen}
                          key={HistoryRoute.RewardScreen}/>
            <Stack.Screen name={HistoryRoute.SubscriptionScreen} component={SubscriptionScreen}
                          key={HistoryRoute.SubscriptionScreen}/>
        </Stack.Navigator>
    );
};

export default HistoryStackNavigation;

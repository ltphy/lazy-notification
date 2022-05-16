import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from "../../screens/ProfileScreen/ProfileScreen";
import ChallengeScreen from "../../screens/ProfileScreen/screens/ChallengeScreen/ChallengeScreen";
import RewardScreen from "../../screens/ProfileScreen/screens/RewardScreen/RewardScreen";
import SubscriptionScreen from "../../screens/ProfileScreen/screens/SupscriptionScreen/SupscriptionScreen";
import {MainRouteName, MainRouteParamList} from "../MainRoute.constants";

const Stack = createNativeStackNavigator<MainRouteParamList>();

const HistoryStackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={MainRouteName.ProfileScreen} component={ProfileScreen}
                          key={MainRouteName.ProfileScreen}/>
            <Stack.Screen name={MainRouteName.ChallengeScreen} component={ChallengeScreen}
                          key={MainRouteName.ChallengeScreen}/>
            <Stack.Screen name={MainRouteName.RewardScreen} component={RewardScreen}
                          key={MainRouteName.RewardScreen}/>
            <Stack.Screen name={MainRouteName.SubscriptionScreen} component={SubscriptionScreen}
                          key={MainRouteName.SubscriptionScreen}/>
        </Stack.Navigator>
    );
};

export default HistoryStackNavigation;

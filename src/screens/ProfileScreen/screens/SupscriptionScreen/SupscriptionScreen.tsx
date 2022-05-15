import {useNavigation} from "@react-navigation/native";
import React from "react";
import {Button, Text, View} from "react-native";
import {StackNavigationProp} from '@react-navigation/stack';
import {MainRouteParamList} from "../../../../Navigation/MainRoute.constants";

const SubscriptionScreen = () => {
    const navigation = useNavigation<StackNavigationProp<MainRouteParamList>>();
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Subscription Screen</Text>
        </View>
    );
};

export default SubscriptionScreen;
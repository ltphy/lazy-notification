import {useNavigation} from "@react-navigation/native";
import React from "react";
import {Button, Text, View} from "react-native";
import { StackNavigationProp } from '@react-navigation/stack';
import {MainRouteParamList} from "../../../../Navigation/MainRoute.constants";

const RewardScreen = () => {
    const navigation = useNavigation<StackNavigationProp<MainRouteParamList>>();
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Reward Screen</Text>
        </View>
    );
};

export default RewardScreen;
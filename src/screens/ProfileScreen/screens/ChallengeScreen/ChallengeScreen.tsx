import {useNavigation} from "@react-navigation/native";
import React from "react";
import {Button, Text, View} from "react-native";
import {StackNavigationProp} from '@react-navigation/stack';
import {HistoryRouteParamList} from "../../../../Navigation/HistoryStackNavigation/HistoryRoute.constants";

const ChallengeScreen = () => {
    const navigation = useNavigation<StackNavigationProp<HistoryRouteParamList>>();

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Challenge Screen</Text>
        </View>
    );
};

export default ChallengeScreen;
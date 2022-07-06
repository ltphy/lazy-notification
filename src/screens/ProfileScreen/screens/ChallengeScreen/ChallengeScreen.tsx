import {useNavigation} from "@react-navigation/native";
import React from "react";
import {Button, Text, View} from "react-native";
import {StackNavigationProp} from '@react-navigation/stack';
import {MainRouteParamList} from "../../../../Navigation/MainRoute.constants";

const ChallengeScreen = () => {
    const navigation = useNavigation<StackNavigationProp<MainRouteParamList>>();

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Challenge Screen</Text>
        </View>
    );
};

export default ChallengeScreen;
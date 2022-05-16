import {useNavigation} from "@react-navigation/native";
import React from "react";
import {Button, Text, View} from "react-native";
import {MainRouteParamList} from "../../Navigation/MainRoute.constants";
import {StackNavigationProp} from '@react-navigation/stack';

const ActivityScreen = () => {
    const navigation = useNavigation<StackNavigationProp<MainRouteParamList>>();

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Activity Screen</Text>
        </View>
    );
};

export default ActivityScreen;
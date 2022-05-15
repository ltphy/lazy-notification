import {useNavigation} from "@react-navigation/native";
import React from "react";
import {Button, Text, View} from "react-native";
import {StackNavigationProp } from '@react-navigation/stack';
import {MainRouteName, MainRouteParamList} from "../../Navigation/MainRoute.constants";

const HomeScreen = () => {
    const navigation = useNavigation<StackNavigationProp<MainRouteParamList>>();
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate(MainRouteName.ProfileScreen)}
            />
        </View>
    );
};

export default HomeScreen;
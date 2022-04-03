import {useNavigation} from "@react-navigation/native";
import React from "react";
import {Button, Text, View} from "react-native";
import {RouteName, RouteStackParamList} from "../../StackNavigation/route.constants";
import { StackNavigationProp } from '@react-navigation/stack';

const HomeScreen = () => {
    const navigation = useNavigation<StackNavigationProp<RouteStackParamList>>();
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate(RouteName.ProfileScreen)}
            />
        </View>
    );
};

export default HomeScreen;
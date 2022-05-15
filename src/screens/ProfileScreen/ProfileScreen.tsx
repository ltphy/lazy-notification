import React, {useCallback, useState} from "react";
import {Button, Text, View} from "react-native";
import Toast from 'react-native-root-toast';
import {RouteName, RouteStackParamList} from "../../StackNavigation/route.constants";
import {StackNavigationProp} from "@react-navigation/stack";
import {useNavigation} from "@react-navigation/native";
import showToast from "../../utils/showToast";

const ProfileScreen = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const navigation = useNavigation<StackNavigationProp<RouteStackParamList>>();

    const goBack = async (): Promise<void> => {
        try {
            setLoading(true);
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve('success');
                }, 2000);
            });
        } finally {
            setLoading(false);
            showToast.success('Success');
            // showToast.success('Failed');
            // navigation.goBack();
            navigation.pop();
        }

    };
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Details Screen</Text>
            <Button
                title="Go to Details"
                onPress={goBack}
            />
        </View>
    );
}
export default ProfileScreen;


import React, {useState} from "react";
import {Button, Text, View} from "react-native";
import {StackNavigationProp} from "@react-navigation/stack";
import {useNavigation} from "@react-navigation/native";
import showToast from "../../utils/showToast";
import HistoryStackNavigation from "../../Navigation/HistoryStackNavigation/HistoryStackNavigation";
import {MainRouteName, MainRouteParamList} from "../../Navigation/MainRoute.constants";

const ProfileScreen = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const navigation = useNavigation<StackNavigationProp<MainRouteParamList>>();

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

    const goToChallengeScreen = () => {
        navigation.navigate({key: MainRouteName.RewardScreen, name: MainRouteName.RewardScreen});
    };

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Button title={"Go TO Challenge Screen"} onPress={goToChallengeScreen}/>
            <Text>Profile Screen</Text>
        </View>
    );
}
export default ProfileScreen;

